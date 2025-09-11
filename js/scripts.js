AOS.init();

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function changeLanguage(lang) {
    if (lang === 'en') {
        window.location.href = '/en';
    } else {
        window.location.href = '/bn';
    }
}

function toggleFAQ(element) {
    element.parentElement.classList.toggle('active');
}

function closeNotification() {
    document.getElementById('notification').style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
}

async function trackService() {
    const trackingId = document.getElementById('tracking-id').value;
    try {
        const response = await fetch(`/api/track/${trackingId}`);
        const result = await response.json();
        document.getElementById('tracking-result').innerText = `স্ট্যাটাস: ${result.status}, লোকেশন: ${result.location}`;
    } catch (error) {
        document.getElementById('tracking-result').innerText = 'ট্র্যাকিং আইডি অবৈধ।';
    }
}

async function loginCustomer() {
    const customerId = document.getElementById('customer-id').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerId, password })
        });
        const result = await response.json();
        document.getElementById('dashboard-content').style.display = 'block';
        document.getElementById('service-history').innerText = result.history;
        document.getElementById('coin-balance').innerText = `কয়েন: ${result.coins}`;
    } catch (error) {
        showNotification('লগইন ব্যর্থ। আবার চেষ্টা করুন।');
    }
}

async function subscribe() {
    const packageValue = document.getElementById('package').value;
    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ package: packageValue })
        });
        const result = await response.json();
        document.getElementById('subscription-result').innerText = 'সাবস্ক্রিপশন সফল!';
        showNotification('সাবস্ক্রিপশন সফল!');
    } catch (error) {
        document.getElementById('subscription-result').innerText = 'সাবস্ক্রিপশন ব্যর্থ।';
    }
}

async function addToCart(productId, price) {
    try {
        const response = await fetch('/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, price })
        });
        const result = await response.json();
        document.getElementById('cart-result').innerText = 'কার্টে যোগ হয়েছে!';
        showNotification('কার্টে যোগ হয়েছে!');
    } catch (error) {
        document.getElementById('cart-result').innerText = 'কার্টে যোগ ব্যর্থ।';
    }
}

async function submitReferral() {
    const email = document.getElementById('referral-email').value;
    try {
        const response = await fetch('/api/referral', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const result = await response.json();
        document.getElementById('referral-result').innerText = 'রেফারেল সফল!';
        showNotification('রেফারেল সফল!');
    } catch (error) {
        document.getElementById('referral-result').innerText = 'রেফারেল ব্যর্থ।';
    }
}

async function exchangeMoney() {
    const fromMethod = document.getElementById('from-method').value;
    const toMethod = document.getElementById('to-method').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const fromAccount = document.getElementById('from-account').value;
    const toAccount = document.getElementById('to-account').value;
    const otp = document.getElementById('otp').value;

    if (!fromMethod || !toMethod || !amount || !fromAccount || !toAccount || !otp) {
        document.getElementById('exchange-result').innerText = 'সব তথ্য পূরণ করুন';
        return;
    }

    try {
        let finalAmount = amount;
        if (fromMethod === 'usd' || toMethod === 'bdt') {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            const rate = data.rates.BDT;
            finalAmount = fromMethod === 'usd' ? amount * rate : amount / rate;
        }

        const commission = finalAmount * 0.02;
        const amountAfterCommission = finalAmount - commission;

        const response = await fetch('/api/exchange', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fromMethod,
                toMethod,
                amount,
                fromAccount,
                toAccount,
                otp,
                commission,
                finalAmount: amountAfterCommission
            })
        });

        const result = await response.json();
        document.getElementById('exchange-result').innerText = `লেনদেন সফল! কমিশন: ${commission} টাকা, প্রাপক পাবেন: ${amountAfterCommission} টাকা`;
        showNotification('লেনদেন সফলভাবে সম্পন্ন হয়েছে!');
    } catch (error) {
        document.getElementById('exchange-result').innerText = 'লেনদেন ব্যর্থ। আবার চেষ্টা করুন।';
    }
}

async function dailySignIn() {
    try {
        const response = await fetch('/api/rewards/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123' })
        });
        const result = await response.json();
        document.getElementById('reward-result').innerText = `আপনার কয়েন: ${result.coins}`;
        showNotification('ডেইলি সাইন-ইন সফল! ১০ কয়েন যোগ হয়েছে।');
    } catch (error) {
        showNotification('সাইন-ইন ব্যর্থ। আবার চেষ্টা করুন।');
    }
}

async function watchAd() {
    try {
        const response = await fetch('/api/rewards/ad', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123' })
        });
        const result = await response.json();
        document.getElementById('reward-result').innerText = `আপনার কয়েন: ${result.coins}`;
        showNotification('বিজ্ঞাপন দেখা সফল! ৫ কয়েন যোগ হয়েছে।');
    } catch (error) {
        showNotification('বিজ্ঞাপন দেখা ব্যর্থ। আবার চেষ্টা করুন।');
    }
}

async function watchVideo() {
    try {
        const response = await fetch('/api/rewards/video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123' })
        });
        const result = await response.json();
        document.getElementById('reward-result').innerText = `আপনার কয়েন: ${result.coins}`;
        showNotification('ভিডিও দেখা সফল! ১০ কয়েন যোগ হয়েছে।');
    } catch (error) {
        showNotification('ভিডিও দেখা ব্যর্থ। আবার চেষ্টা করুন।');
    }
}

async function redeemCoins() {
    const method = document.getElementById('redeem-method').value;
    const account = document.getElementById('redeem-account').value;
    const amount = parseInt(document.getElementById('redeem-amount').value);

    if (!method || !account || amount < 500) {
        document.getElementById('redeem-result').innerText = 'সব তথ্য পূরণ করুন এবং ন্যূনতম ৫০০ কয়েন রিডিম করুন।';
        return;
    }

    try {
        const response = await fetch('/api/rewards/redeem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123', method, account, amount })
        });
        const result = await response.json();
        document.getElementById('reward-result').innerText = `আপনার কয়েন: ${result.coins}`;
        document.getElementById('redeem-result').innerText = `রিডিম সফল! ${amount} টাকা ${method} এ পাঠানো হয়েছে।`;
        showNotification('কয়েন রিডিম সফল!');
    } catch (error) {
        document.getElementById('redeem-result').innerText = 'রিডিম ব্যর্থ। আবার চেষ্টা করুন।';
    }
}

async function buyCourse(courseId, price) {
    try {
        const response = await fetch('/api/courses/buy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123', courseId, price })
        });
        const result = await response.json();
        document.getElementById('course-result').innerText = 'কোর্স ক্রয় সফল!';
        showNotification('কোর্স ক্রয় সফল! আপনার ইমেইলে লিঙ্ক পাঠানো হয়েছে।');
    } catch (error) {
        document.getElementById('course-result').innerText = 'ক্রয় ব্যর্থ। আবার চেষ্টা করুন।';
    }
}

async function bookMarketplaceService(serviceId, price) {
    try {
        const response = await fetch('/api/marketplace/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123', serviceId, price })
        });
        const result = await response.json();
        document.getElementById('marketplace-result').innerText = 'সার্ভিস বুকিং সফল!';
        showNotification('সার্ভিস বুকিং সফল!');
    } catch (error) {
        document.getElementById('marketplace-result').innerText = 'বুকিং ব্যর্থ। আবার চেষ্টা করুন।';
    }
}

async function checkBadges() {
    try {
        const response = await fetch('/api/gamification/badges', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'user123' })
        });
        const result = await response.json();
        document.getElementById('badges').innerText = result.badges.join(', ') || 'কোনো ব্যাজ নেই';
        document.getElementById('leaderboard-position').innerText = `আপনার পজিশন: ${result.position}`;
        showNotification('ব্যাজ এবং লিডারবোর্ড আপডেট হয়েছে!');
    } catch (error) {
        showNotification('ব্যাজ চেক ব্যর্থ।');
    }
}

async function processPayment() {
    const method = document.getElementById('payment-method').value;
    const amount = parseFloat(document.getElementById('payment-amount').value);
    const account = document.getElementById('payment-account').value;

    if (!method || !amount || !account) {
        document.getElementById('payment-result').innerText = 'সব তথ্য পূরণ করুন।';
        return;
    }

    try {
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ method, amount, account, userId: 'user123' })
        });
        const result = await response.json();
        document.getElementById('payment-result').innerText = `পেমেন্ট সফল! ট্রানজেকশন আইডি: ${result.transactionId}`;
        showNotification('পেমেন্ট সফলভাবে সম্পন্ন হয়েছে!');
    } catch (error) {
        document.getElementById('payment-result').innerText = 'পেমেন্ট ব্যর্থ। আবার চেষ্টা করুন।';
    }
}

function showNotification(message) {
    document.getElementById('notification-message').innerText = message;
    document.getElementById('notification').style.display = 'block';
    setTimeout(() => document.getElementById('notification').style.display = 'none', 5000);
}

document.getElementById('product-search').addEventListener('input', function() {
    const search = this.value.toLowerCase();
    document.querySelectorAll('.product-item').forEach(item => {
        const name = item.querySelector('h3').innerText.toLowerCase();
        item.style.display = name.includes(search) ? 'block' : 'none';
    });
});

async function sendContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const recaptcha = grecaptcha.getResponse();

    if (!name || !email || !message || !recaptcha) {
        document.getElementById('contact-result').innerText = 'সব তথ্য পূরণ করুন।';
        return;
    }

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message, recaptcha })
        });
        const result = await response.json();
        document.getElementById('contact-result').innerText = 'মেসেজ পাঠানো সফল!';
        showNotification('মেসেজ পাঠানো হয়েছে!');
    } catch (error) {
        document.getElementById('contact-result').innerText = 'মেসেজ পাঠানো ব্যর্থ।';
    }
}

async function submitReview() {
    const rating = document.getElementById('review-rating').value;
    const text = document.getElementById('review-text').value;

    if (!rating || !text) {
        document.getElementById('review-result').innerText = 'সব তথ্য পূরণ করুন।';
        return;
    }

    try {
        const response = await fetch('/api/reviews/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rating, text })
        });
        const result = await response.json();
        document.getElementById('review-result').innerText = 'রিভিউ জমা দেয়া সফল!';
        showNotification('রিভিউ জমা দেয়া হয়েছে!');
    } catch (error) {
        document.getElementById('review-result').innerText = 'রিভিউ জমা দেয়া ব্যর্থ।';
    }
}

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '200',
        width: '300',
        videoId: 'dQw4w9WgXcQ', // প্রকৃত ভিডিও আইডি
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        watchVideo();
    }
}
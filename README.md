<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="মাগুড়া সার্ভিসিং কেয়ার - এসি, ফ্রিজ, জেনারেটর, ওয়েল্ডিং মেশিন, ড্রিল মেশিন, মাইক্রোওভেন এবং ওয়াশিং মেশিন ক্রয়, বিক্রয় ও সার্ভিসিং।">
  <meta name="keywords" content="মাগুড়া, এসি মেরামত, ফ্রিজ সার্ভিস, জেনারেটর, ওয়েল্ডিং মেশিন, ড্রিল মেশিন, মাইক্রোওভেন, ওয়াশিং মেশিন">
  <meta property="og:title" content="মাগুড়া সার্ভিসিং কেয়ার" />
  <meta property="og:description" content="দ্রুত ও বিশ্বাসযোগ্য এসি, ফ্রিজ, জেনারেটর ও অন্যান্য যন্ত্রপাতির ক্রয়, বিক্রয় ও সার্ভিসিং।" />
  <meta property="og:image" content="https://via.placeholder.com/100x100?text=Logo" />
  <meta property="og:url" content="your-website-url" />
  <title>মাগুড়া সার্ভিসিং কেয়ার</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Noto Sans Bengali', Arial, sans-serif;
      background: #f9fafd;
      margin: 0; padding: 0;
      color: #333;
    }
    header {
      background-color: #004aad;
      color: white;
      padding: 20px 10px;
      text-align: center;
    }
    .logo {
      width: 100px;
      height: auto;
      margin-bottom: 10px;
    }
    nav {
      background-color: #00337f;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    nav a {
      color: white;
      text-decoration: none;
      padding: 15px 20px;
      display: block;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    nav a:hover {
      background-color: #002060;
      transform: scale(1.05);
    }
    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 0 15px;
      background: white;
      border-radius: 10px;
    }
    h1, h2 {
      color: #004aad;
    }
    .promo-banner {
      background: #ffeb3b;
      color: #333;
      padding: 15px;
      text-align: center;
      font-weight: bold;
      margin: 20px 0;
      border-radius: 5px;
    }
    .service-list {
      list-style: none;
      padding: 0;
    }
    .service-list li {
      background: white;
      margin: 10px 0;
      padding: 15px;
      border-left: 5px solid #004aad;
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    .service-list li:hover {
      transform: translateY(-5px);
    }
    .service-image {
      width: 100px;
      height: auto;
      margin-top: 10px;
      border-radius: 5px;
    }
    .cta-button {
      display: inline-block;
      background-color: #004aad;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 15px;
      font-weight: bold;
      transition: transform 0.3s ease;
    }
    .cta-button:hover {
      background-color: #00337f;
      transform: scale(1.1);
    }
    .floating-cta {
      position: fixed;
      bottom: 80px;
      right: 20px;
      background-color: #28a745;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      z-index: 998;
    }
    .floating-cta:hover {
      background-color: #218838;
    }
    .testimonials, .gallery, .faq, .blog, .video, .newsletter, .awards, .purchase, .sell, .complaint, .service-tracking, .catalog, .chatbot, .reviews, .price-calculator, .loyalty, .tutorials, .appointment, .login, .tracking-map, .weather {
      margin-top: 30px;
    }
    .testimonial-item, .faq-item, .blog-item, .award-item, .weather {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .gallery img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
      transition: transform 0.3s ease;
    }
    .gallery img:hover {
      transform: scale(1.05);
    }
    .video iframe, .tutorials iframe {
      width: 100%;
      height: 300px;
      border-radius: 5px;
    }
    .faq-item h4 {
      margin: 0;
      cursor: pointer;
      color: #004aad;
    }
    .faq-item p {
      display: none;
      margin-top: 10px;
    }
    .faq-item.active p {
      display: block;
    }
    .blog-item h3 {
      margin: 0;
      color: #004aad;
    }
    .catalog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    .product {
      text-align: center;
      padding: 10px;
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
    .map-container {
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
    }
    #tracking-map iframe, #map {
      width: 100%;
      height: 400px;
      border-radius: 5px;
    }
    footer {
      background-color: #004aad;
      color: white;
      text-align: center;
      padding: 15px 10px;
      margin-top: 30px;
    }
    .social-links a {
      color: white;
      margin: 0 10px;
      font-size: 1.2em;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .social-links a:hover {
      color: #66b0ff;
    }
    .share-buttons a {
      margin: 0 10px;
      font-size: 1.2em;
      color: #004aad;
    }
    form label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    form input, form textarea, form select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      box-sizing: border-box;
    }
    form button {
      margin-top: 15px;
      background-color: #004aad;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.3s ease;
    }
    form button:hover {
      background-color: #00337f;
      transform: scale(1.1);
    }
    .stars input[type="radio"] {
      display: none;
    }
    .stars label {
      font-size: 30px;
      color: #ddd;
      cursor: pointer;
    }
    .stars label:before {
      content: '\f005';
      font-family: 'Font Awesome 6 Free';
    }
    .stars input:checked ~ label {
      color: #ffd700;
    }
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      max-width: 300px;
      z-index: 999;
      display: none;
    }
    .notification button {
      background: #218838;
      border: none;
      padding: 8px 15px;
      color: white;
      cursor: pointer;
      margin-top: 10px;
      border-radius: 5px;
    }
    .weather {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .weather img {
      width: 50px;
      height: 50px;
    }
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #004aad;
      color: white;
      padding: 10px 15px;
      border-radius: 50%;
      text-decoration: none;
      font-size: 1.2em;
      display: none;
    }
    .back-to-top:hover {
      background-color: #00337f;
    }
    #google_translate_element {
      margin-top: 15px;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
      }
      .gallery img {
        width: 150px;
        height: 100px;
      }
      .notification {
        max-width: 90%;
        right: 5%;
      }
      .floating-cta {
        bottom: 60px;
        right: 10px;
        font-size: 0.9em;
      }
      .video iframe, .tutorials iframe, #tracking-map iframe, #map {
        height: 250px;
      }
    }
  </style>
</head>
<body>

<!-- Notification Popup -->
<div class="notification" id="notification">
  <p>প্রথম সার্ভিসে ১০% ডিসকাউন্ট! এখনই বুক করুন!</p>
  <button onclick="closeNotification()">বন্ধ করুন</button>
</div>

<header>
  <img src="https://via.placeholder.com/100x100?text=Logo" alt="মাগুড়া সার্ভিসিং কেয়ার লোগো" class="logo">
  <h1>মাগুড়া সার্ভিসিং কেয়ার</h1>
  <p>দ্রুত ও বিশ্বাসযোগ্য ক্রয়, বিক্রয় ও সার্ভিসিং</p>
</header>

<nav>
  <a href="#home" aria-label="হোম পেজে যান">হোম</a>
  <a href="#about" aria-label="আমাদের সম্পর্কে জানুন">আমাদের সম্পর্কে</a>
  <a href="#purchase" aria-label="পণ্য ক্রয় করুন">ক্রয়</a>
  <a href="#sell" aria-label="পণ্য বিক্রয় করুন">বিক্রয়</a>
  <a href="#services" aria-label="সার্ভিসসমূহ দেখুন">সার্ভিস</a>
  <a href="#service-tracking" aria-label="সার্ভিস ট্র্যাকিং">সার্ভিস ট্র্যাকিং</a>
  <a href="#complaint" aria-label="অভিযোগ জানান">অভিযোগ</a>
  <a href="#catalog" aria-label="পণ্য ক্যাটালগ দেখুন">পণ্য ক্যাটালগ</a>
  <a href="#appointment" aria-label="এপয়েন্টমেন্ট বুক করুন">এপয়েন্টমেন্ট</a>
  <a href="#login" aria-label="গ্রাহক লগইন">লগইন</a>
  <a href="#tracking-map" aria-label="লাইভ ট্র্যাকিং">লাইভ ট্র্যাকিং</a>
  <a href="#reviews" aria-label="রিভিউ দিন">রিভিউ</a>
  <a href="#price-calculator" aria-label="খরচ ক্যালকুলেটর">খরচ ক্যালকুলেটর</a>
  <a href="#tutorials" aria-label="টিউটোরিয়াল দেখুন">টিউটোরিয়াল</a>
  <a href="#loyalty" aria-label="লয়ালটি প্রোগ্রাম">লয়ালটি</a>
  <a href="#weather" aria-label="আবহাওয়া দেখুন">আবহাওয়া</a>
  <a href="#contact" aria-label="যোগাযোগ করুন">যোগাযোগ</a>
</nav>

<!-- Floating CTA Button -->
<a href="tel:+8801637853013" class="floating-cta" aria-label="এখনই কল করুন"><i class="fas fa-phone"></i> এখনই কল করুন</a>

<div class="container">

  <section id="home">
    <h2>স্বাগতম</h2>
    <div class="promo-banner">প্রথম সার্ভিসে ১০% ডিসকাউন্ট! এখনই বুক করুন!</div>
    <p>আমরা এসি, ফ্রিজ, মটর, ফ্যান, জেনারেটর, ওয়েল্ডিং মেশিন, ড্রিল মেশিন, মাইক্রোওভেন ও ওয়াশিং মেশিনের ক্রয়, বিক্রয় ও সার্ভিসিং সেবা প্রদান করি।</p>
    <div id="google_translate_element"></div>
    <a href="#contact" class="cta-button">এখনই যোগাযোগ করুন</a>
  </section>

  <section id="weather">
    <h2>মাগুড়ার আবহাওয়া</h2>
    <div class="weather">
      <img id="weather-icon" src="" alt="আবহাওয়া আইকন">
      <div>
        <p><strong>তাপমাত্রা:</strong> <span id="temperature">...</span> °C</p>
        <p><strong>আর্দ্রতা:</strong> <span id="humidity">...</span>%</p>
        <p><strong>অবস্থা:</strong> <span id="description">...</span></p>
      </div>
    </div>
  </section>

  <section id="about">
    <h2>আমাদের সম্পর্কে</h2>
    <p>মাগুড়া সার্ভিসিং কেয়ার দীর্ঘ ১০ বছর ধরে সেবা প্রদান করে আসছে। আমাদের দক্ষ টেকনিশিয়ানরা যেকোনো যন্ত্রপাতি মেরামতে পারদর্শী। আমরা মাগুড়া শহরে হোম সার্ভিস প্রদান করি এবং ২৪-৪৮ ঘণ্টার মধ্যে সার্ভিস সম্পন্ন করি।</p>
    <a href="#contact" class="cta-button">আরও জানুন</a>
  </section>

  <section id="purchase">
    <h2>পণ্য ক্রয় করুন</h2>
    <p>আমাদের কাছ থেকে নতুন এসি, ফ্রিজ, জেনারেটর, ওয়াশিং মেশিন ইত্যাদি কিনুন।</p>
    <form action="https://formspree.io/f/your-purchase-form-id" method="POST">
      <label for="purchase-product">পণ্য নির্বাচন</label>
      <select id="purchase-product" name="product" required>
        <option value="" disabled selected>পণ্য নির্বাচন করুন</option>
        <option value="ac">এসি</option>
        <option value="fridge">ফ্রিজ</option>
        <option value="generator">জেনারেটর</option>
        <option value="washing">ওয়াশিং মেশিন</option>
      </select>
      <label for="quantity">পরিমাণ</label>
      <input type="number" id="quantity" name="quantity" min="1" placeholder="পরিমাণ লিখুন" required>
      <label for="purchase-name">নাম</label>
      <input type="text" id="purchase-name" name="name" placeholder="আপনার নাম লিখুন" required>
      <label for="purchase-phone">ফোন নম্বর</label>
      <input type="tel" id="purchase-phone" name="phone" placeholder="আপনার ফোন নম্বর লিখুন" required>
      <button type="submit">ক্রয় নিশ্চিত করুন</button>
    </form>
    <form action="https://sandbox.sslcommerz.com/gwprocess/v4/api.php" method="POST">
      <input type="hidden" name="store_id" value="your-store-id">
      <input type="hidden" name="store_passwd" value="your-store-passwd">
      <input type="hidden" name="total_amount" value="1000">
      <input type="hidden" name="currency" value="BDT">
      <input type="hidden" name="tran_id" value="unique-tran-id">
      <input type="hidden" name="success_url" value="your-success-url">
      <input type="hidden" name="fail_url" value="your-fail-url">
      <input type="hidden" name="cancel_url" value="your-cancel-url">
      <button type="submit" class="cta-button">পেমেন্ট করুন</button>
    </form>
  </section>

  <section id="sell">
    <h2>পণ্য বিক্রয় করুন</h2>
    <p>আপনার পুরানো যন্ত্রপাতি আমাদের কাছে বিক্রি করুন।</p>
    <form action="https://formspree.io/f/your-sell-form-id" method="POST">
      <label for="sell-product">পণ্যের ধরন</label>
      <select id="sell-product" name="product" required>
        <option value="" disabled selected>পণ্য নির্বাচন করুন</option>
        <option value="ac">এসি</option>
        <option value="fridge">ফ্রিজ</option>
        <option value="generator">জেনারেটর</option>
        <option value="washing">ওয়াশিং মেশিন</option>
      </select>
      <label for="condition">পণ্যের অবস্থা</label>
      <textarea id="condition" name="condition" rows="4" placeholder="পণ্যের অবস্থা বর্ণনা করুন" required></textarea>
      <label for="sell-photo">পণ্যের ছবি (URL)</label>
      <input type="url" id="sell-photo" name="photo" placeholder="ছবির URL লিখুন (ঐচ্ছিক)">
      <label for="sell-name">নাম</label>
      <input type="text" id="sell-name" name="name" placeholder="আপনার নাম লিখুন" required>
      <label for="sell-phone">ফোন নম্বর</label>
      <input type="tel" id="sell-phone" name="phone" placeholder="আপনার ফোন নম্বর লিখুন" required>
      <button type="submit">বিক্রয় নিশ্চিত করুন</button>
    </form>
  </section>

  <section id="services">
    <h2>সার্ভিসসমূহ</h2>
    <ul class="service-list">
      <li>
        <strong><i class="fas fa-wind"></i> এসি মেরামত ও রিফ্রেশ</strong>
        <img src="https://images.unsplash.com/photo-1617103996652-6c708fc1a4e0" alt="এসি মেরামত" class="service-image">
      </li>
      <li>
        <strong><i class="fas fa-snowflake"></i> ফ্রিজ সার্ভিস ও গ্যাস রিফিল</strong>
        <img src="https://images.unsplash.com/photo-1581263519560-9d8a7b3f2f94" alt="ফ্রিজ সার্ভিসিং" class="service-image">
      </li>
      <li>
        <strong><i class="fas fa-bolt"></i> জেনারেটর সার্ভিস</strong>
        <img src="https://images.unsplash.com/photo-1621905251189-1f865d10a2bf" alt="জেনারেটর মেরামত" class="service-image">
      </li>
    </ul>
    <a href="#service-tracking" class="cta-button">সার্ভিস ট্র্যাক করুন</a>
  </section>

  <section id="service-tracking">
    <h2>সার্ভিস ট্র্যাকিং</h2>
    <p>আপনার সার্ভিসের স্ট্যাটাস চেক করুন।</p>
    <form action="https://formspree.io/f/your-tracking-form-id" method="POST">
      <label for="tracking-id">সার্ভিস আইডি</label>
      <input type="text" id="tracking-id" name="tracking-id" placeholder="আপনার সার্ভিস আইডি লিখুন" required>
      <button type="submit">ট্র্যাক করুন</button>
    </form>
  </section>

  <section id="complaint">
    <h2>অভিযোগ জানান</h2>
    <p>আমাদের সেবা সম্পর্কে কোনো অভিযোগ থাকলে জানান।</p>
    <form action="https://formspree.io/f/your-complaint-form-id" method="POST">
      <label for="complaint-id">সার্ভিস আইডি (ঐচ্ছিক)</label>
      <input type="text" id="complaint-id" name="service-id" placeholder="সার্ভিস আইডি লিখুন">
      <label for="complaint-details">অভিযোগের বিবরণ</label>
      <textarea id="complaint-details" name="details" rows="4" placeholder="আপনার অভিযোগ লিখুন" required></textarea>
      <label for="complaint-name">নাম</label>
      <input type="text" id="complaint-name" name="name" placeholder="আপনার নাম লিখুন" required>
      <label for="complaint-phone">ফোন নম্বর</label>
      <input type="tel" id="complaint-phone" name="phone" placeholder="আপনার ফোন নম্বর লিখুন" required>
      <button type="submit">অভিযোগ জানান</button>
    </form>
  </section>

  <section id="catalog">
    <h2>পণ্য ক্যাটালগ</h2>
    <div class="catalog-grid">
      <div class="product">
        <img src="https://images.unsplash.com/photo-1617103996652-6c708fc1a4e0" alt="এসি">
        <h3>নতুন এসি</h3>
        <p>দাম: ৳৩০,০০০</p>
        <a href="#purchase" class="cta-button">কিনুন</a>
      </div>
      <div class="product">
        <img src="https://images.unsplash.com/photo-1581263519560-9d8a7b3f2f94" alt="ফ্রিজ">
        <h3>নতুন ফ্রিজ</h3>
        <p>দাম: ৳২৫,০০০</p>
        <a href="#purchase" class="cta-button">কিনুন</a>
      </div>
    </div>
  </section>

  <section id="appointment">
    <h2>এপয়েন্টমেন্ট বুক করুন</h2>
    <div class="calendly-inline-widget" data-url="https://calendly.com/your-username/service" style="min-width:320px;height:630px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
  </section>

  <section id="login">
    <h2>গ্রাহক লগইন</h2>
    <form>
      <label for="login-email">ইমেইল</label>
      <input type="email" id="login-email" name="email" placeholder="আপনার ইমেইল লিখুন" required>
      <label for="login-password">পাসওয়ার্ড</label>
      <input type="password" id="login-password" name="password" placeholder="পাসওয়ার্ড লিখুন" required>
      <button type="submit" class="cta-button">লগইন</button>
    </form>
  </section>

  <section id="tracking-map">
    <h2>লাইভ ট্র্যাকিং</h2>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&callback=initMap" async></script>
    <script>
      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 23.4879916, lng: 89.4144871 },
          zoom: 15
        });
        new google.maps.Marker({
          position: { lat: 23.4879916, lng: 89.4144871 },
          map,
          title: "টেকনিশিয়ানের লোকেশন"
        });
      }
    </script>
  </section>

  <section id="reviews">
    <h2>রিভিউ দিন</h2>
    <form action="https://formspree.io/f/your-review-form-id" method="POST">
      <label for="rating">রেটিং</label>
      <div class="stars">
        <input type="radio" id="star5" name="rating" value="5" />
        <label for="star5"></label>
        <input type="radio" id="star4" name="rating" value="4" />
        <label for="star4"></label>
        <input type="radio" id="star3" name="rating" value="3" />
        <label for="star3"></label>
        <input type="radio" id="star2" name="rating" value="2" />
        <label for="star2"></label>
        <input type="radio" id="star1" name="rating" value="1" />
        <label for="star1"></label>
      </div>
      <label for="review">মন্তব্য</label>
      <textarea id="review" name="review" rows="4" placeholder="আপনার মন্তব্য লিখুন" required></textarea>
      <button type="submit">জমা দিন</button>
    </form>
  </section>

  <section id="price-calculator">
    <h2>খরচ ক্যালকুলেটর</h2>
    <select id="service-type">
      <option value="1000">এসি ক্লিনিং (৳১০০০)</option>
      <option value="1500">ফ্রিজ সার্ভিস (৳১৫০০)</option>
      <option value="2000">জেনারেটর সার্ভিস (৳২০০০)</option>
    </select>
    <button onclick="calculatePrice()">হিসাব করুন</button>
    <p id="result">আনুমানিক খরচ: ৳০</p>
  </section>

  <section id="chatbot">
    <h2>চ্যাট সাপোর্ট</h2>
    <p>আমাদের সাথে লাইভ চ্যাট করুন বা আপনার প্রশ্ন জিজ্ঞাসা করুন!</p>
    <!-- Tawk.to Chatbot -->
    <script type="text/javascript">
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/your-tawk-to-id/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    </script>
  </section>

  <section id="tutorials">
    <h2>টিউটোরিয়াল</h2>
    <iframe src="https://www.youtube.com/embed/videoseries?list=YOUR-PLAYLIST-ID" title="টিউটোরিয়াল ভিডিও" allowfullscreen></iframe>
  </section>

  <section id="loyalty">
    <h2>লয়ালটি প্রোগ্রাম</h2>
    <p>প্রতি সার্ভিসে ১০ পয়েন্ট, ৫০ পয়েন্টে ৫% ডিসকাউন্ট!</p>
    <form action="https://formspree.io/f/your-loyalty-form-id" method="POST">
      <label for="loyalty-id">গ্রাহক আইডি</label>
      <input type="text" id="loyalty-id" name="loyalty-id" placeholder="আপনার গ্রাহক আইডি লিখুন" required>
      <button type="submit">পয়েন্ট চেক করুন</button>
    </form>
  </section>

  <section id="newsletter">
    <h2>নিউজলেটার</h2>
    <p>আমাদের সর্বশেষ অফার ও আপডেট পেতে সাবস্ক্রাইব করুন।</p>
    <form action="https://formspree.io/f/your-newsletter-form-id" method="POST">
      <label for="newsletter-email">ইমেইল</label>
      <input type="email" id="newsletter-email" name="email" placeholder="আপনার ইমেইল লিখুন" required>
      <button type="submit">সাবস্ক্রাইব করুন</button>
    </form>
  </section>

  <section id="awards">
    <h2>পুরস্কার ও সম্মাননা</h2>
    <div class="award-item">
      <h3>শ্রেষ্ঠ সার্ভিস প্রোভাইডার ২০২৩</h3>
      <p>মাগুড়া চেম্বার অফ কমার্স থেকে পুরস্কৃত।</p>
    </div>
    <div class="award-item">
      <h3>গ্রাহক সন্তুষ্টি পুরস্কার ২০২৪</h3>
      <p>বাংলাদেশ কনজ্যুমার অ্যাসোসিয়েশন থেকে পুরস্কৃত।</p>
    </div>
  </section>

  <section id="gallery">
    <h2>আমাদের কাজের ছবি</h2>
    <div class="gallery">
      <img src="https://images.unsplash.com/photo-1617103996652-6c708fc1a4e0" alt="এসি মেরামত">
      <img src="https://images.unsplash.com/photo-1581263519560-9d8a7b3f2f94" alt="ফ্রিজ সার্ভিসিং">
      <img src="https://images.unsplash.com/photo-1621905251189-1f865d10a2bf" alt="জেনারেটর মেরামত">
    </div>
  </section>

  <section id="testimonials">
    <h2>গ্রাহকের মতামত</h2>
    <div class="testimonial-item">
      <p>"দ্রুত এবং পেশাদার সার্ভিস। আমার এসি এখন নতুনের মতো!"</p>
      <p><strong>- মোঃ রহিম</strong></p>
    </div>
    <div class="testimonial-item">
      <p>"ফ্রিজ মেরামতের জন্য তাদের সার্ভিস অসাধারণ।"</p>
      <p><strong>- ফাতেমা বেগম</strong></p>
    </div>
  </section>

  <section id="faq">
    <h2>সাধারণ প্রশ্নোত্তর</h2>
    <div class="faq-item">
      <h4>সার্ভিসের সময় কতক্ষণ লাগে?</h4>
      <p>সাধারণত ২৪-৪৮ ঘণ্টার মধ্যে আমরা সার্ভিস সম্পন্ন করি।</p>
    </div>
    <div class="faq-item">
      <h4>হোম সার্ভিস পাওয়া যায়?</h4>
      <p>হ্যাঁ, আমরা মাগুড়া শহরে হোম সার্ভিস প্রদান করি।</p>
    </div>
  </section>

  <section id="blog">
    <h2>ব্লগ</h2>
    <div class="blog-item">
      <h3>এসি রক্ষণাবেক্ষণের টিপস</h3>
      <p>আপনার এসি নিয়মিত পরিষ্কার করুন এবং ফিল্টার চেক করুন।</p>
      <a href="#" class="cta-button">আরও পড়ুন</a>
    </div>
    <div class="blog-item">
      <h3>ফ্রিজের সমস্যা সমাধান</h3>
      <p>ফ্রিজ ঠাণ্ডা না হলে গ্যাস চেক করুন।</p>
      <a href="#" class="cta-button">আরও পড়ুন</a>
    </div>
  </section>

  <section id="video">
    <h2>আমাদের কাজের ভিডিও</h2>
    <iframe src="https://www.youtube.com/embed/YOUR-VIDEO-ID" title="আমাদের কাজের ভিডিও" allowfullscreen></iframe>
  </section>

  <section id="contact">
    <h2>যোগাযোগ</h2>
    <p><strong>ঠিকানা:</strong> পশুহাসপাতাল সংলগ্ন, মাগুড়া সদর, মাগুড়া, বাংলাদেশ</p>
    <p><strong>ফোন:</strong> <a href="tel:+8801637853013">+8801637853013</a>, <a href="tel:+8801703253325">+8801703253325</a></p>
    <p><strong>ইমেইল:</strong> <a href="mailto:info@magracare.com">info@magracare.com</a></p>
    <p><strong>WhatsApp:</strong> <a href="https://wa.me/+8801637853013?text=আমি%20সার্ভিস%20সম্পর্কে%20জানতে%20চাই" target="_blank">চ্যাট করুন</a></p>
    <p><strong>ফেসবুক:</strong> <a href="https://facebook.com/magracare" target="_blank">আমাদের ফেসবুক পেজ</a></p>
    <div class="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.6470394963647!2d89.4144871!3d23.4879916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fefa5b2c7e0b7b%3A0x2e8b8b0b3b3b3b3b!2sMagura%20Sadar%2C%20Magura!5e0!3m2!1sen!2sbd!4v1697631234567!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <h3>যোগাযোগ ফর্ম</h3>
    <form action="https://formspree.io/f/your-contact-form-id" method="POST">
      <label for="contact-name">নাম</label>
      <input type="text" id="contact-name" name="name" placeholder="আপনার নাম লিখুন" required>
      <label for="contact-email">ইমেইল</label>
      <input type="email" id="contact-email" name="email" placeholder="আপনার ইমেইল লিখুন" required>
      <label for="contact-message">বার্তা</label>
      <textarea id="contact-message" name="message" rows="4" placeholder="আপনার বার্তা লিখুন" required></textarea>
      <button type="submit">পাঠিয়ে দিন</button>
    </form>
    <div class="share-buttons">
      <a href="https://www.facebook.com/sharer/sharer.php?u=your-website-url" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://twitter.com/intent/tweet?url=your-website-url" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://wa.me/?text=মাগুড়া%20সার্ভিসিং%20কেয়ার%20দেখুন:%20your-website-url" target="_blank"><i class="fab fa-whatsapp"></i></a>
    </div>
  </section>

</div>

<!-- Back to Top Button -->
<a href="#" class="back-to-top" aria-label="পৃষ্ঠার শীর্ষে ফিরুন"><i class="fas fa-arrow-up"></i></a>

<footer>
  <p>© ২০২৫ মাগুড়া সার্ভিসিং কেয়ার। সর্বস্বত্ব সংরক্ষিত।</p>
  <div class="social-links">
    <a href="https://facebook.com/magracare" target="_blank" aria-label="ফেসবুক পেজে যান"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com/magracare" target="_blank" aria-label="টুইটার পেজে যান"><i class="fab fa-twitter"></i></a>
    <a href="https://wa.me/+8801637853013?text=আমি%20সার্ভিস%20সম্পর্কে%20জানতে%20চাই" target="_blank" aria-label="WhatsApp-এ যোগাযোগ করুন"><i class="fab fa-whatsapp"></i></a>
  </div>
</footer>

<!-- Google Translate Widget -->
<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'bn', includedLanguages: 'bn,en,hi', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<!-- Weather API -->
<script>
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Magura,BD&appid=aeb7fbb490008095ef5450428ebee123&units=metric')
    .then(response => response.json())
    .then(data => {
      document.getElementById('temperature').textContent = data.main.temp;
      document.getElementById('humidity').textContent = data.main.humidity;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    })
    .catch(error => console.error('আবহাওয়া ডেটা লোডে সমস্যা:', error));
</script>

<!-- Price Calculator -->
<script>
  function calculatePrice() {
    const servicePrice = document.getElementById('service-type').value;
    document.getElementById('result').textContent = `আনুমানিক খরচ: ৳${servicePrice}`;
  }
</script>

<!-- Notification -->
<script>
  window.onload = function() {
    document.getElementById('notification').style.display = 'block';
  };
  function closeNotification() {
    document.getElementById('notification').style.display = 'none';
  }
</script>

<!-- Back to Top -->
<script>
  window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  };
</script>

<!-- FAQ Toggle -->
<script>
  document.querySelectorAll('.faq-item h4').forEach(item => {
    item.addEventListener('click', () => {
      const faqItem = item.parentElement;
      faqItem.classList.toggle('active');
    });
  });
</script>

</body>
</html>
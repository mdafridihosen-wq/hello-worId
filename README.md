
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>মাগুড়া সার্ভিসিং কেয়ার</title>
  <style>
    body {
      font-family: Arial, sans-serif;
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
    nav {
      background-color: #00337f;
      display: flex;
      justify-content: center;
    }
    nav a {
      color: white;
      text-decoration: none;
      padding: 15px 20px;
      display: block;
      font-weight: bold;
    }
    nav a:hover {
      background-color: #002060;
    }
    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 0 15px;
    }
    h1, h2 {
      color: #004aad;
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
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
    footer {
      background-color: #004aad;
      color: white;
      text-align: center;
      padding: 15px 10px;
      margin-top: 30px;
    }
    form label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    form input, form textarea {
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
    }
    form button:hover {
      background-color: #00337f;
    }
    /* Responsive */
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>

<header>
  <h1>মাগুড়া সার্ভিসিং কেয়ার</h1>
  <p>দ্রুত ও বিশ্বাসযোগ্য সার্ভিসিং আপনার সেবায়</p>
</header>

<nav>
  <a href="#home">হোম</a>
  <a href="#about">আমাদের সম্পর্কে</a>
  <a href="#services">সার্ভিসসমূহ</a>
  <a href="#contact">যোগাযোগ</a>
</nav>

<div class="container">

  <section id="home">
    <h2>স্বাগতম</h2>
    <p>আমরা এসি, ফ্রিজ, মটর, ফ্যান, জেনারেটর, ওয়েল্ডিং মেশিন, ড্রিল মেশিন, মাইক্রোওভেন ও ওয়াশিং মেশিন সার্ভিস ও বিক্রয় করে থাকি। আপনার যেকোনো যন্ত্রপাতির সমস্যা সমাধানে আমরা প্রস্তুত।</p>
  </section>

  <section id="about">
    <h2>আমাদের সম্পর্কে</h2>
    <p>মাগুড়া সার্ভিসিং কেয়ার দীর্ঘ ১০ বছর ধরে সেবা প্রদান করে আসছে। আমাদের লক্ষ্য গ্রাহকের সন্তুষ্টি এবং দ্রুত সার্ভিস। আমাদের দক্ষ টেকনিশিয়ানরা যেকোনো ধরনের যন্ত্রপাতি মেরামতে সক্ষম।</p>
  </section>

  <section id="services">
    <h2>সার্ভিসসমূহ</h2>
    <ul class="service-list">
      <li>এসি মেরামত ও রিফ্রেশ</li>
      <li>ফ্রিজ সার্ভিস ও গ্যাস রিফিল</li>
      <li>মোটর ও ফ্যান মেরামত</li>
      <li>জেনারেটর সার্ভিস ও পাস করা</li>
      <li>ওয়েল্ডিং মেশিন মেরামত</li>
      <li>ড্রিল মেশিন সার্ভিস</li>
      <li>মাইক্রোওভেন ও ওয়াশিং মেশিন মেরামত</li>
    </ul>
  </section>

  <section id="contact">
    <h2>যোগাযোগ</h2>
    <p>ঠিকানা: মাগুড়া সদর, মাগুড়া, বাংলাদেশ</p>
    <p>ফোন: +8801637853013</p>
    <p>ইমেইল: info@magracare.com</p>

    <h3>যোগাযোগ ফর্ম</h3>
    <form>
      <label for="name">নাম</label>
      <input type="text" id="name" name="name" placeholder="আপনার নাম লিখুন" required>

      <label for="email">ইমেইল</label>
      <input type="email" id="email" name="email" placeholder="আপনার ইমেইল লিখুন" required>

      <label for="message">বার্তা</label>
      <textarea id="message" name="message" rows="4" placeholder="আপনার বার্তা লিখুন" required></textarea>

      <button type="submit">পাঠিয়ে দিন</button>
    </form>
  </section>

</div>

<footer>
  <p>© ২০২৫ মাগুড়া সার্ভিসিং কেয়ার। সর্বস্বত্ব সংরক্ষিত।</p>
</footer>

</body>
</html>
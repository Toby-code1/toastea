// ── Reviews data (inlined — no network request needed) ───
const REVIEWS = [
  {n:"Melody Ward",d:"18 hours ago",s:5,t:"Fantastic service and cute atmosphere! Room for a small breakfast or brunch. The baked goods are phenomenal!",p:""},
  {n:"JoAnn Ballor",d:"3 days ago",s:5,t:"I ordered a mocha and the New Yorker toasty, both were incredible. The mocha was one of the best I've had in Edinburgh and the toasty was a perfect blend of cheese and pastrami. I highly recommend stopping for breakfast or lunch!",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn3yqa0VhNtgcwhHp2VbdD6yG689ABPATw17PE7sYDJ64cDnxTnz1_0zj7PP2rdLHn5UWhnPu6Id8MJ71vn39_q2agiZi-ZeqNm5_OT-SgOo-YoGo4K7IZDSCnb3k4w9nxPHvlvCoT_9zQo=w800-h800-p-k-no"},
  {n:"Areli Alejandra Sevilla Gallardo",d:"4 days ago",s:5,t:"Coffee and muffins were delicious. The service was super friendly, and they even give you recommendations on things to do in Edinburgh, and they made us feel like family.",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn0aOHZh5nj_k_RHCyaTMoI6gVm22SqPxun9D_rArnt_foijQJGuy8Ph4pRvMdkyBX8Fq9-FvfWxns1QNkrCkcm1xBODLdT-M-UENkndOWx0GMk5z91X1_WEYj4PfyEfX4BpcyU8PqbEjyCb=w800-h800-p-k-no"},
  {n:"Grace Brindley",d:"a week ago",s:5,t:"Amazing toasties and such friendly staff, we live in the area and love coming here for lunch. The extra pickles on the side really top it all off 🩷",p:""},
  {n:"Quiet Banker",d:"a week ago",s:5,t:"Found this place whilst out for an errand. Lovely small shop, terrific food, hot teas, friendly staff. Great spot, highly recommended.",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn18tORisCmha24deK2Su78wBmI9ayiIBMdGdsbELZk-L8EusYD9dBrEgbuv4uk4kCZtKihqVsMkwMvI-ifF_6kMZ6pCAyAsD_p_UutG1SBgRvQvVYkvEAkPA83gAF5cO2epUjN0iT1Dpw3i=w800-h800-p-k-no"},
  {n:"Esra Ozkan",d:"a week ago",s:5,t:"Surprise spot on our way to the city center where we had delicious toasties!! Very friendly staff, clean and cosy shop. Felt very welcomed, definitely would love to come back on our next trip to Edinburgh. Highly recommend!!",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn3Nvcvrp659fK4R_GCsGz86KtGr3z2WnOu4fwwzz8stlfaq8glBMO8pePVk206MG6-sXtlTEle4J2x54nUSZDTAUDsaRoJb5YhWh5PLQO9Ocxf0nXjTfRq9gHttSpKRlc82b3oxMi0qKclU=w800-h800-p-k-no"},
  {n:"Tom Kaijaks",d:"a week ago",s:5,t:"Had the Athens toastie, was amazing! Will definitely be coming again.",p:""},
  {n:"Ezgi Bozdogan",d:"a week ago",s:5,t:"We tried New York and Istanbul toasties, super delicious! A gem found in Edinburgh!",p:""},
  {n:"Ida Wong",d:"2 weeks ago",s:5,t:"The food was good. You can really taste the difference from those chain. People are friendly and welcoming. I love the details of the cafe deco.",p:""},
  {n:"Lawrence Khoury",d:"3 weeks ago",s:5,t:"Our hotel was in the area and we spotted this place walking by one day and decided to give it a try. Staff were super friendly and the restaurant is a really quirky decor. Our coffees were well-made and the Paris sandwich was delicious. Highly recommended.",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn2RFmzHIPdr7ITtSkYBxStEkozkMBtlyR_vSP15pMVlrANMz5vcyIaEfDWeoFFp6W7OFbP7LKoPOTlOSbvZPKp91ff6F3ZcVZdxyLkoAFgqnSuk_sKDckIO5CEIijmmzRCH1xhx7F-i90Q4=w800-h800-p-k-no"},
  {n:"Dennis Hodgkins",d:"a month ago",s:5,t:"Great little place, good food and drinks, love the china tea pots and cups, brilliant staff. Its not fancy, its cosy, its great value with great service.",p:""},
  {n:"Sophie Revesz",d:"a month ago",s:5,t:"Had a lovely lunch here - great selection of toasties (all very cheesy!), coffees and smoothies. Friendly service. I'll be back!",p:""},
  {n:"Daniela Koren",d:"a month ago",s:5,t:"Such a nice little spot, totally authentical Edinburgh. I had an Edinburgh-toast and a small dessert. Great food, very friendly people - highly recommended!",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn094WJyEecmYTe2ONC_ohwBiPkf_Fpq5t8kUTCWcbV7gCletcI3lz3UBrVk7w61ZqMmDZ1czDmokjHh4LBxjION8f2OpGaODIrNg5E40XJdV-2nFba6jUC9wdSVHzMNwfSCFbYFtZ0mDko=w800-h800-p-k-no"},
  {n:"Chloe Danielle",d:"a month ago",s:5,t:"Lovely cosy cafe we stumbled across with very attentive & kind staff. Toastie was one of the best I've ever had! We will be back!",p:""},
  {n:"Mark Gee",d:"a month ago",s:5,t:"Went in here with my Wife and had the New Yorker toastie which was fantastic. It was also my birthday and the staff played music and wished me a happy birthday with a little cake. ☺️ Made my day ☺️",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn3TLd7vAL6T_ERyVsoRM6j3yUT03Y_XyKjPWWm_TsddoYhUPCGnHO4Rtj5egop-T2bALP-0RaylIlEZQzNQftb3nIYORaiQ8lPSqf7X-7oftikbuAQux51vNqzx288CjMRcuvikM6DOJ30x=w800-h800-p-k-no"},
  {n:"Em",d:"a month ago",s:5,t:"Yummy haggis and cheesy toastie! Also had the best green smoothie with freshly grated ginger! The owner is so kind!",p:""},
  {n:"Phoebe Weir",d:"a month ago",s:5,t:"Amazing toasties with lots of choices! Visited with my family of 6 people and we all had different toasties and they were all amazing. Staff were so friendly. Would highly recommend for breakfast and lunch 😊",p:""},
  {n:"Chrysalis Jacqueline Hind",d:"a month ago",s:5,t:"Go there omg it's delightful, my wife and I Loved the place the food was so good, great service and the atmosphere? Perfect anytime.",p:""},
  {n:"Claire Donnelly",d:"a month ago",s:5,t:"Fantastic toasties and very friendly staff :)",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn3ASKLvrpm0CoY-lTUfINh2hngVZJOVjK4QuOCbY9n6YSKpQLIXGgicpaarPmgJLleAsrAd_XqwHwDIeKnK0WjNGx6itG5qrAr0mKhG3Gcfdrcwbfsdkxilgtg5JHizb6DmzlGnzebCwLg=w800-h800-p-k-no"},
  {n:"Omer Amin",d:"a month ago",s:5,t:"I had a wonderful experience at Toastea ☕️ The service was excellent — friendly, attentive, and very welcoming from the moment I arrived 👌",p:""},
  {n:"Giacomo Rosapepe",d:"a month ago",s:5,t:"I had a very nice breakfast here with my family. The butter croissant is delicious, and even the toast is fresh and well-portioned. The service is also very kind. I would definitely recommend it.",p:""},
  {n:"Lien Winters",d:"a month ago",s:4,t:"Lovely staff. They were very kind. We had a great lunch.",p:""},
  {n:"Manuel Maldonado",d:"a month ago",s:5,t:"A very pleasant place with excellent coffee, and the food is delicious too. The staff are very friendly. Highly recommended.",p:""},
  {n:"Patrick Schneider",d:"a month ago",s:5,t:"A fantastic café with amazing food. The coffee is delicious, the cake absolutely divine. The service is top-notch and incredibly friendly! Highly recommended if you're in Edinburgh!",p:""},
  {n:"Jessica Rogers",d:"2 months ago",s:5,t:"Beautiful little cafe with incredibly lovely staff. Had great chats with the owner, couldn't be lovelier! Baked treats were amazing ✨",p:""},
  {n:"Deniz Öncel",d:"2 months ago",s:5,t:"Lovely place with amazing staff! The toasts are absolutely delicious, and the drinks are very tasty. They also have a great bakery selection. Last but not least, the music is just perfect! Such a cozy and enjoyable atmosphere. Thank you Toastea, will definitely be back!",p:""},
  {n:"Alyssa Mascoe",d:"2 months ago",s:5,t:"Wow! This place is amazing, very friendly staff and the best sandwich and muffins ever. I ordered the chai tea and the Athens sandwich absolutely amaaaazing! Tried a blueberry muffin as well and it was so moist and fresh I loved it!",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn1sA7V0uxt5r_8zIGjL8RwxQwtVfW_TUYfw2Gj2l0dsu11PETRAxpUGpzqyStMgH6X9Hg8XvwJd-5pAzyYFbRwCxiJoFCempxhQ9qC3wUhcVYf68QwElTuI6r784ac2tNub6dg13G3lvakI=w800-h800-p-k-no"},
  {n:"Robert Brown",d:"2 months ago",s:5,t:"Super cute, great service, delicious food.",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn2zsalgMrX94JWvVmgekJ5-pyBNcYGxzCkEhr7AP_RTnS42qH3SVDlOgCBcp8-zJ-aExfXfK6HvT9Jg6DPPwL9fFipBdFR9RCtz0-bXc0DaDFmskPkvHO5gkQwcfz9gged1Y20P4ExaV3l6=w800-h800-p-k-no"},
  {n:"Becky Robertson",d:"2 months ago",s:5,t:"Visited this cafe a few times now and it did not disappoint. Very good location, clean cafe and really friendly staff. I recommend the New Yorker toastie and Iced Chai Latte! They have lots of baked goods and cakes to choose from too.",p:""},
  {n:"Edgar Bleykh",d:"2 months ago",s:5,t:"It was our first cafe in Edinburgh. We wanted to grab something after long flights, and it was absolutely perfect spot. We took two toasts (London and Edinburgh). It was delicious. Total recommend ❤️",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn2mbJWG0gFVeMM0fz9EuWnGG1Feofg5NrTMUDRKdpDcj3mrI7bGo-RojmUDxmV7DC3inrX8R2kRnuBKiMfN0LSneaiEboO5DDySNNC4yhnEPoq1BUguusanNZOrksuKI1-xLx272pwujYk=w800-h800-p-k-no"},
  {n:"Tanya Progackaya",d:"2 months ago",s:5,t:"A lovely little place with delicious food and warm, welcoming staff 💫 Definitely worth a visit for tea and a sandwich!",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn1bQmhnnozQnDD42iCwRwgWmnPApxgamkUKpC0vBgMZ6OBJyZotshaLIG9WnDjXHKTYYuaoJ1Ol37a2AuabgeVaZljkBjQoaycMgKHDfgJ1afZDpp8JdMtpkcbp-Pdr6TggKrCoR4V469Yv=w800-h800-p-k-no"},
  {n:"Gillian Winiarski",d:"2 months ago",s:5,t:"What a lovely little cafe, the ladies were very welcoming and friendly, they let me try a small bowl of their exceptional Chicken and Veg soup while I waited for my toastie which was also really tasty, loved the crisps and pickle on the side and the French Vanilla Latte 😋 will definitely be back ❤️",p:""},
  {n:"Ikra Cesmeliler",d:"2 months ago",s:5,t:"I tried the New York Toastie and I really loved it ❤️ One of the staff members recommended it to me and it was a very good suggestion. It was one of the best food experiences I had. The taste was amazing and the recipe was perfect. The service was also very good. I will definitely come back again.",p:""},
  {n:"Alyssa Mascoe",d:"2 months ago",s:5,t:"We had a Shortbread cookie and a brookie and both were really delicious. We don't know how they make this shortbread soooo good, but it definitely is amazing :)",p:""},
  {n:"gamze oskay",d:"2 months ago",s:5,t:"The toast and tea were absolutely delicious, made with really great ingredients, such a lovely, sweet atmosphere. Really enjoyed it.",p:"https://lh3.googleusercontent.com/grass-cs/ANxoTn20ogPKdONOnaoBpcnzbtKpB7gnZAYoyPZvLVWk93LNbe7HzNZ8L80aMTRjbZUnGTAWMp1SH4rztWGGkFWaGMauOwkPZ6FtMuIeKjlfRddS7RnyDGOG2tHDV5-Wi3-EEM9RfZr0tSQ7zxlL=w800-h800-p-k-no"},
  {n:"ronay eroglu",d:"2 months ago",s:5,t:"5 star rating for this amazing cafe. The food, bakery and drinks are absolutely delicious. I had such an enjoyable experience here. I recommend this cafe to everyone.",p:""},
  {n:"Ina Nowak",d:"2 months ago",s:5,t:"Delicious toasties! Cheerful and friendly service. This lovingly decorated shop is a great place to linger. I'm already looking forward to a Frankfurt toastie on my next visit 😜",p:""},
];

(function buildReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;
  REVIEWS.forEach(r => {
    const stars = '★'.repeat(r.s) + (r.s < 5 ? '☆'.repeat(5 - r.s) : '');
    const photo = r.p ? `<img class="review-photo" src="${r.p}" alt="Photo by ${r.n}" loading="lazy" />` : '';
    const card = document.createElement('article');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-stars">${stars}</div>
      <p class="review-text">${r.t}</p>
      ${photo}
      <div class="review-meta">
        <span class="review-name">${r.n}</span>
        <span class="review-date">${r.d}</span>
      </div>`;
    track.appendChild(card);
  });
})();

// Drag-to-scroll for reviews track
const wrap = document.querySelector('.reviews-track-wrap');
if (wrap) {
  let isDown = false, startX, scrollLeft;
  wrap.addEventListener('mousedown', e => {
    isDown = true; wrap.classList.add('is-dragging');
    startX = e.pageX - wrap.offsetLeft; scrollLeft = wrap.scrollLeft;
  });
  wrap.addEventListener('mouseleave', () => { isDown = false; wrap.classList.remove('is-dragging'); });
  wrap.addEventListener('mouseup',    () => { isDown = false; wrap.classList.remove('is-dragging'); });
  wrap.addEventListener('mousemove', e => {
    if (!isDown) return; e.preventDefault();
    wrap.scrollLeft = scrollLeft - (e.pageX - wrap.offsetLeft - startX);
  });
}

// ── Scroll reveals ────────────────────────────────────────
const revealItems = document.querySelectorAll('.section, .intro-strip, footer');
revealItems.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealItems.forEach(el => observer.observe(el));

document.querySelectorAll('[data-float]').forEach(card => {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    card.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// ── Mobile nav toggle ─────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav nav');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navToggle.classList.toggle('is-open');
    navMenu.classList.toggle('is-open');
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('is-open');
      navMenu.classList.remove('is-open');
    });
  });
}

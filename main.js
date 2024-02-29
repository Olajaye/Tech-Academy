//change navber styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//show faq 
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq_icon i');
    if (icon.className === 'bi bi-plus-lg') {
      icon.className = "bi bi-dash-lg"
    } else {
      icon.className = 'bi bi-plus-lg'
    }
  })
})

//show/hide
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-meun-btn");
const closeBtn = document.querySelector("#close-meun-btn");


menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
}) 
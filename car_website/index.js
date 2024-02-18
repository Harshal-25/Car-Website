let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");
MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".loginFormContainer").classList.toggle("active");
};

document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".loginFormContainer").classList.remove("active");
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    let Speed = el.getAttribute("data-speed")
    let X = (window.innerWidth - e.pageX * Speed) / 60;
    let Y = (window.innerHeight - e.pageY * Speed) / 60;

    el.style.transform = `translateX(${Y}px) translateY(${X}px)`
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    el.style.transform = `translateX(0px) translateY(0px)`
  });
};

var swiper = new Swiper(".VehiclesSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
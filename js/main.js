// DARK MODE
const theme = document.querySelector("#theme-toggle");
const toggle = document.querySelector(".light-mode-active");

if (theme) {
  theme.addEventListener("click", function () {
    const theNav = document.querySelector(".navbar");
    const theNavBrand = document.querySelector(".navbar-brand");
    const theNavLinks = document.querySelector(".nav-link");
    const theMain = document.querySelector(".themain");
    const theFrontpage = document.querySelector(".frontpage-image");
    const theArrowDown = document.querySelector(".bxs-down-arrow");
    const theImage = document.querySelector(".img-self-self");
    const theExperience = document.querySelector(".experience-tab-text-text");
    const theContact = document.querySelector(".contact-title-title");
    const theFooter = document.querySelector(".thefooter");
    theNav.classList.toggle("light-mode-active");
    theNavLinks.classList.toggle("light-mode-active-text");
    theNavBrand.classList.toggle("light-mode-active-text");
    theMain.classList.toggle("light-mode-active");
    theFrontpage.classList.toggle("light-mode-active");
    theArrowDown.classList.toggle("light-mode-active");
    theImage.classList.toggle("light-mode-active-border");
    theExperience.classList.toggle("light-mode-active-text");
    theContact.classList.toggle("light-mode-active-contact-text");
    theFooter.classList.toggle("light-mode-active-footer");
  })
}
toggle.onclick = function () {
  toggle.classList.toggle('light-mode-active')
}

// COPY PASTE EMAIL
const button = document.querySelector(".copytoClipboard");
if (button) {
  button.addEventListener("click", function () {
    const mail = "yc5693410@gmail.com";
    navigator.clipboard.writeText(mail);
  })
}

// CHANGE TEXT EXPERIENCE
console.log("main.js loaded in");
const buttonInfo = document.querySelector(".button-info");
const buttonHobby = document.querySelector(".button-hobby");
const buttonPoints = document.querySelector(".button-points");
const text = document.querySelector(".text");
const title = document.querySelector(".experience-tab-title-title")

if (buttonInfo) {
  buttonInfo.addEventListener("click", function () {
    text.innerHTML = "Ik ben na de basisschool naar het Maerlant Lyceum gegaan met een advies HAVO/VWO, maar ben daarna gezakt, omdat ik niks deed";
    title.innerHTML = "Maerlant-Lyceum";
  })
}

if (buttonHobby) {
  buttonHobby.addEventListener("click", function () {
    text.innerHTML = "Nadat ik gezakt was ging ik naar het Sint-Maartenscollege in Voorburg, omdat dat de enige school was die mij kon hebben, omdat we laat een school hadden gezocht en heb de volgende 3 jaar MAVO gedaan en met succes afgerond";
    title.innerHTML = "Sint-Maartenscollege Voorburg";
  })
}

if (buttonPoints) {
  buttonPoints.addEventListener("click", function () {
    text.innerHTML = "Ik zit nu op het ROC Mondriaan op Tinwerf en doe de opleiding Software Development en zal de komende jaren aan deze portfolio werken en verbeteren";
    title.innerHTML = "ROC Mondriaan";
  })
}
// DARK MODE


// TRANSITION

window.onload = () => {
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 1500);
}

console.log("Animation Loaded in")

// COPY PASTE EMAIL
const button = document.querySelector(".copytoClipboard");
if (button) {
  button.addEventListener("click", function () {
    const mail = "ycelik5693410@gmail.com";
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
const button = document.querySelector(".copytoClipboard");
if (button) {
  button.addEventListener("click", function () {
    let mail = "yc5693410@gmail.com";
    navigator.clipboard.writeText(mail);
  })
}

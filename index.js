const success = 
    document.getElementById("successAlert").addEventListener("click", () => {
    let alertElement = document.getElementById("alertMessage");

    alertElement.innerHTML = "همکاران ما به زودی با شما تماس میگیرند";
    alertElement.style.display = "block";

    /*function closeAlert() {
        let alertElement = document.getElementById("alertMessage");
        alertElement.style.display = "none";
    }*/
});
console.log(success)



const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");

scrollButton.addEventListener("click", () => {
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});

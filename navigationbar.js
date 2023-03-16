const IonRef = document.querySelector('.icon')
const navRef = document.querySelector('.nav-wrapper')
const linking = document.querySelectorAll('.menu li')
IonRef.addEventListener('click', () => {
  navRef.classList.toggle('nav-wrapper-active')
  linking.forEach((link, index) => {

    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `fade-in 0.5s forwards ${index / 7 + 0.5}s`;
    }
  });
});
const Opc = document.querySelector('.divclass')
function work(){
  if(Opc.style.display ==='block'){
    Opc.style.opacity ='none'
  

  }
  work()

}









// let imgs = document.getElementById('ph')
// let inputspalce = document.getElementById('file-up')
// inputspalce.onchange = function(){
//   imgs.src = URL.createObjectURL(inputspalce.files[0])
// }
// // Convert image to data URL
// var canvas = document.createElement("canvas");
// var img = document.getElementById("ph");
// canvas.width = img.width;
// canvas.height = img.height;
// var ctx = canvas.getContext("2d");
// ctx.drawImage(img, 0, 0);
// var dataURL = canvas.toDataURL();

// // Store image and input data in localStorage
// var inputElement = document.getElementById("file-up");
// var inputData = inputElement.value;
// localStorage.setItem("ph", dataURL);
// localStorage.setItem("file-up", inputData);

// // Retrieve image and input data from localStorage
// var storedImage = new Image();
// var storedImageDataURL = localStorage.getItem("ph");
// storedImage.src = storedImageDataURL;
// document.body.appendChild(storedImage);

// var storedInputData = localStorage.getItem("file-up");
// if (storedInputData !== null) {
//   inputElement.value = storedInputData;
// }

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

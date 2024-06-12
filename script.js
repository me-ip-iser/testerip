let hid = false;

function hideShow() {
  if (hid == false) {
    let btn = document.getElementById("btn");
  let menu = document.getElementById("menuBar");

  btn.style.transform = "rotate(180deg)"
  btn.style.transitionProperty = "all"
  btn.style.transitionDuration = "1s"
  menu.style.animationName = "show"
  menu.style.animationDuration = "2.5s"
  setTimeout(() => {
    menu.style.display = "none"
  }, 2400);
  hid = true 
  }
  else {
    btn.style.transform = "rotate(360deg)"
  btn.style.transitionProperty = "all"
  btn.style.transitionDuration = "1s"
  menu.style.animationName = "hide"
  menu.style.animationDuration = "2.5s"
  
    menu.style.display = "block"
  
  hid = false 
  }
}
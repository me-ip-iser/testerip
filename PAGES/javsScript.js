let Ip1 = 0 ;
let Ip2 = 0 ;
let trueVar = 0 ;

document.addEventListener("DOMContentLoaded", ()=>{
  localStorage.getItem("IP");
  if (localStorage.getItem("IP")) {
    document.getElementById("ip").innerHTML = localStorage.getItem("IP")
  }
})

function Ip() {
  Ip1 = Math.floor(Math.random()*200) ;    
  Ip2 = Math.floor(Math.random()*99)
  let Ip = `192.${Ip1}.${Ip2}.11`
  console.log(Ip)
  localStorage.setItem("IP", Ip);
  document.getElementById("ip").innerHTML = Ip
  trueVar = Math.floor(Math.random()*100)
  console.log("safe")
  document.getElementById("result").innerHTML = "Safe ;)"
  document.getElementById("result").style.color = "greenyellow"
  if (trueVar === 100) {
    console.error("ur not safe")
    document.getElementById("result").innerHTML = "Oh No !"
    document.getElementById("result").style.color = "red"
  }
}



const Hour = document.getElementById("h");
const Min = document.getElementById("min");
const Sec = document.getElementById("s");
 
function funct(){
    let h = new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm = "AM"
    if(h>12){
        h=h- 12;
        ampm = "AM";
    } 
    Hour.innerText = h;
    Min.innerText= m;
    Sec.innerText= s;
    ampm, (innerText=ampm);
    setTimeout(()=>{
        funct()
    },1000)
}
funct()
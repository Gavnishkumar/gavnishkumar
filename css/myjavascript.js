
opennav=()=>{
let a= document.getElementById('mysideNav');
if (window.innerWidth <= 1031) {
    
    a.style.height="450px";
}

else{
a.style.height="100px";
}
   
}
closebutton=()=>{
let b=document.getElementById('mysideNav');
    b.style.height="0px";
}
openreadmore=()=>{
    let c=document.getElementById("readmore");
    c.style.height="300px";
    c.style.border="1px solid white";
   
}


closereadmore=()=>{
    let c=document.getElementById("readmore");
    c.style.height="0px";
    c.style.border="0px solid black";
}

mssg=()=>{
    let name=document.querySelector('.name').value;
    let mssg=document.querySelector('.message').value;
    window.open(`https://wa.me/+919368985917?text= Hii, Gavnish I am *${name}* my message :* ${mssg}*`);  

}

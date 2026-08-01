const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


document.querySelectorAll("button,a").forEach(item=>{


item.addEventListener("mouseenter",()=>{

cursor.style.transform=
"translate(-50%,-50%) scale(2)";

cursor.style.background="#00ffff";

});


item.addEventListener("mouseleave",()=>{

cursor.style.transform=
"translate(-50%,-50%) scale(1)";

cursor.style.background="transparent";

});


});
//your JS code here. If required.
let btn=document.querySelector(".btn");
let div=document.querySelector(".search");
let input=document.querySelector(".input");
btn.addEventListener("click",()=>{
	div.classList.add("active");
	div.querySelector(".input").focus();
	
}
)
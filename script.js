//your JS code here. If required.
let btn=document.getElementByClass(".btn");
let div=document.getElementByClass(".search");
let input=document.getElementByClass(".input");
btn.addEventListener("click",()=>{
	div.classList("active");
	input.focus();
	
}
)
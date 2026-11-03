//your JS code here. If required.
const removeColor=()=>{
	const colorSelect=document.querySelector("#colorSelect");
	const selectedIndex=colorSelect.selectedIndex;

	if(selectedIndex !== -1){
		colorSelect.remove(selectedIndex);
	}
}
const button=document.querySelector('input[value="Select and Remove"]')
button.addEventListener("click",removeColor)
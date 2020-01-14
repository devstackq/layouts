const insert = (num) => {
	document.form.textview.value = document.form.textview.value + num;
}
const equal = () => {
	let exp = document.form.textview.value = eval(document.form.textview.value);
	if(exp) {
		document.form.textview.value = eval(exp)
	}
}

const clean = () => {
	document.form.textview.value = "0";
}
const backspace = () =>{
	let exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length-1);
}
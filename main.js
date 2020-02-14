//Java Script Document

//target submit button
let submitButton = document.querySelector('.submit');
//when button is clicked run function
submitButton.onclick = newTask;


//4. function to create new li with checkbox, the input and delete button
function newTask(){

	//create new li element check box and delete button
	let newdiv = document.createElement('div');

	//input checkbox
	let newInput = document.createElement('input');
	newInput.type = 'checkbox';

	//when change use function check
	newInput.onchange = checked;

	//delete button
	let deleteb = document.createElement('button');
	deleteb.innerText = 'delete';

	//when click use this function
	deleteb.onclick = gone;

	//grab text from input
	let text = document.querySelector('.new');
	let p = document.createElement('p');
	p.appendChild(document.createTextNode(text.value));

	//make div have the checkbox, input and delete button
	newdiv.appendChild(newInput);
	newdiv.appendChild(p);
	newdiv.appendChild(deleteb);

	if (text.value.length <1){
		//if there is nothing in the input it will say no
		alert("You do not have any text inputed")
	}
	else{
		//grab ul to target input
	let newlist = document.querySelector('.List');
		newlist.appendChild(newdiv);
	}
}


//5. check off function
function checked(e){
		if(e.target.nextElementSibling.style.textDecoration != 'line-through'){
		e.target.nextElementSibling.style.textDecoration = 'line-through';


		//move child to last
		let last = e.target.parentElement; 
		last.parentElement.appendChild(last);

		//ding sound when check off
		document.querySelector('.sound').play();
		//class set
		last.setAttribute('class', 'done');
		//tif 2
		
		e.target.nextElementSibling.style.color = 'Green';
	}
	else {
		e.target.nextElementSibling.style.textDecoration = 'none';
		this.removeAttribute('class');
		e.target.nextElementSibling.style.color = 'Black';
	}
}
//6. delete button
function gone(a){
	let leave = a.target.parentElement; 
	leave.parentElement.removeChild(leave);
}

//trying a delete all checked button
// let snap = document.querySelector('.deleteAll');
// snap.onclick = thanos;

// //function to remove all with classs name
// function thanos(){
// 	var i = 0;
// 	let almost = document.querySelector('.done');
// 	//loop the delete for the class
// 	while(i > almost){
// 	almost.parentElement.removeChild(almost);
// 	}
// }


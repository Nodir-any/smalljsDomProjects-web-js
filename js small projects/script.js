//----------------------------------------------reveals text that is hidden or vice-virsa
/*const revealBtn = document.querySelector('.reveal-btn');
const hiddenText = document.querySelector('.hidden-text');

function revalEverything(){

	if(hiddenText.classList.contains('reveal-btn')
){
		hiddenText.classList.remove('reveal-btn')
	}else{
  		hiddenText.classList.add('reveal-btn')
  }
}


revealBtn.addEventListener('click', revalEverything);*/	


//------------------------------------------------changes bg color onclick for individual li

/*document.querySelector("#football").addEventListener('click', function(e){

	console.log("football is clicked");
	
	const target = e.target;
	if (target.matches('li')){
		target.style.backgroundColor = 'blue';
		target.style.color = 'white';

}

})


document.querySelector("#basketball").addEventListener('click', function(e){

	console.log("basketball is clicked");
	
	const target = e.target;
	if (target.matches('li')){
		target.style.backgroundColor = 'orange';
		target.style.color = 'black';

}

})


document.querySelector("#boxing").addEventListener('click', function(e){

	console.log("boxing is clicked");
	
	const target = e.target;
	if (target.matches('li')){
		target.style.backgroundColor = 'maroon';
		target.style.color = 'white';

}

})


document.querySelector("#tennis").addEventListener('click', function(e){

	console.log("tennis is clicked");
	
	const target = e.target;
	if (target.matches('li')){
		target.style.backgroundColor = 'aqua';
		target.style.color = 'black';

}

})


document.querySelector("#golf").addEventListener('click', function(e){

	console.log("golf is clicked");
	
	const target = e.target;
	if (target.matches('li')){
		target.style.backgroundColor = 'gold';
		target.style.color = 'black';

}

})*/


//---------------------------------------------------------------changes bg for all li through parent element
//(event allogation improves performance and takes less space)


/*document.querySelector('#sports').addEventListener('click', function(e){
	console.log(e.target.getAttribute('id') + 'is cliced');
	
	const target = e.target;
	if (target.matches('li')){
		target.style.backgroundColor = 'orange';
		target.style.color = 'black';
		target.style.fontStyle = 'italic';

}


})*/

//---------------------------------------------------------------project1---quote generator

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
	quote: "Quotes here random randomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandomrandomfjfdtrdvdrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandfsrgfdtjomrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandofgdfdxsbdxmrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomranddsvder65456omrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandfhfyjgjomrandomrandomrandomrandomrandomrandomrandomrandom ",
	person: 'Person who said thequote'
},{
	quote: "Quotes here random randomrandomrandomrandomrandomrandomrandomkyu97randomrandomrandomrandom ",
	person: 'Person who said thequote'
}

]


btn.addEventListener('click', function(){
	
	let random = Math.floor(Math.random() * quotes.length);
	
	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;
})



//ONE THING ALL STYLING IS UP TO YOU AT THIS POINT, THIS IS JUST BOILER PLATE

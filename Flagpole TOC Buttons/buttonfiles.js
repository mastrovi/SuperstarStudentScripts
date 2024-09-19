// Establishes the text area so the buttons can reference it.
const textarea = document.getElementById('message');
textarea.value += '';

// ✅ Append text on button click template:
//btn.addEventListener('click', function handleClick() {
 // textarea.value += 'Pub notes -- ';
//});

//Just all the buttons really
Lettersbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Pub notes -- Letters -- Tom the dancing bug -- City pages -- This modern world -- ';
});

monkeybutton.addEventListener('click', function handleClick() {
  textarea.value += 'A million monkeys -- ';
});

outbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Out there! -- ';
});

combutton.addEventListener('click', function handleClick() {
  textarea.value += 'Comment -- ';
});

theabutton.addEventListener('click', function handleClick() {
  textarea.value += 'Theatre notes -- ';
});

voibutton.addEventListener('click', function handleClick() {
  textarea.value += 'Other voices -- ';
});

moviedbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Movie dope -- ';
});

redbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Redux nation -- ';
});

moviepbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Movie pick -- ';
});

artbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Art notes -- ';
});

grubbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Grub notes -- Daily special -- ';
});

abcbutton.addEventListener('click', function handleClick() {
  textarea.value += 'ABC a is playing at b on c -- ABC@ATL -- ';
});
//ABC@ATL -- 
recbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Record reviews -- ';
});

lostbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Lost picture show -- ';
});

linbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Liner notes -- ';
});

endbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Threats & promises -- Comics -- Reality check';
});

beatbutton.addEventListener('click', function handleClick() {
  textarea.value += 'That beat in time -- ';
});

spotbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Spotlight -- ';
});

clearbutton.addEventListener('click', function handleClick() {
  textarea.value = '';
});

revbutton.addEventListener('click', function handleClick() {
  textarea.value += 'Book rev. -- ';
});

custombutton.addEventListener('click', function handleClick(){
	textarea.value += (document.getElementById("inp").value) + " -- ";
  document.getElementById("inp").value = "";
});

hipbutton.addEventListener('click', function handleClick(){
	textarea.value += "Hip mamma -- ";
});

//Pressing enter also submits the custom headline instead of just pressing the button.
function clickPress(event){
	
	if (event.key == "Enter"){
  	textarea.value += (document.getElementById("inp").value) + " -- ";
    document.getElementById("inp").value = "";
  }
}

//made by Molly Wilson 9/19/24. Do not claim 

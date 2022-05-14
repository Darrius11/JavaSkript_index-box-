  /* box01.innerText = 'Hallo Welt!'; */



  //Option 1: named function
/* const box01 = document.querySelector('#box01');

const box02 = document.querySelector('#box02'); */


/*
 //Option 2: anonymous function
box01.addEventListener('click', function(){
console.log('Hi!');
});

box02.addEventListener('mouseenter', function (){ //Call back function / function(){ console.log     ('lala')});
  console.log('Lala');
});
box02.addEventListener('mouseleave', function (){
  console.log('Bye');
}); 





 //Der Text in box 
box01.addEventListener('click', function() {
box01.innerText = 'wow';                         //Element.eigenschaft = 'lala';  
}); 

box02.addEventListener('mouseenter', function (){
  box02.innerText = 'lala'
});
box02.addEventListener('mouseleave', function (){
  box02.innerText = 'baba'
});
 */




/* 
const box01 = document.querySelector('#box01');  
  function writeStuff() {
  console.log('Huhu!');
}

const box02 = document.querySelector('#box02');
box02.addEventListener('mouseout' , writeStuff1);
box02.addEventListener('mouseenter' , writeStuff2);

function writeStuff1() {
  console.log('Hi!');
}

function writeStuff2() {
  console.log('Bye!');
}  */



/* box01.addEventListener('click', () => box01.innerText = 'wow' });  //ist korrect  und ist gleich wie nachoben  */ 

//box01.addEventListener('click', e => console.log(e));

/*box01.addEventListener ('click', function(e) {
console.log(e);
 });  //man kann auch so schrieben
 */




/* box01.addEventListener('click', e => { 
  console.log(e.target);
  if (e.clientX <= e.target.clientWidth / 2){
  e.target.innerText = 'Links';
  e.target.style.backgroundColor = '#ff0000;'   //meinElement.style.backgroungColot = '#0C0';
  } else {
  e.target.innerText = 'Rechts';
  e.target.style.backgroundColor = '#008000'
  }
}); */ 



/*   box02.addEventListener('click', (e) => {
console.log(widow.getComputesStyle(e.target).backgroundColor);
});   */


/* const box01 = document.querySelector('#box01');
const box02 = document.querySelector('#box02');
const box03 = document.querySelector('#box03');
const box04 = document.querySelector('#box04');
const box05 = document.querySelector('#box05');

box01.addEventListener('click', () => {
  document.body.style.backgroundColor = 'yellow'
});

box02.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue'
});

box03.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red'
});

box04.addEventListener('click', () => {
  document.body.style.backgroundColor = 'brown'
});

box05.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green  '
}); */



const divs = document.querySelectorAll('.box');

for(div of divs) {
  div.addEventListener('click', e => {
    e.stopPropagation();
    document.body.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
  });
}

document.body.addEventListener('click', () => {
  document.body.style.backgroundColor = '#FFF';
});






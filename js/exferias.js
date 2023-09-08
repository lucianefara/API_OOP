//correcção exercício férias

let btn3 = document.querySelector('#btn3');
let btnAddText = document.querySelector('#addTexto');
let newP = document.createElement('p');
newP.innerText = 'voltámos de férias';
document.body.appendChild(newP);
let size = parseInt(getComputedStyle(newP).fontSize);
let increaseBtn = document.createElement('button');
let decreaseBtn = document.createElement('button');
let listItems = document.getElementsByTagName('li');
let learnedBtn = document.querySelector('#aprendido');
let btnAddItem = document.querySelector('#addItem');
let myList = document.querySelector('#list');

function changeColor () {
    let newColor = randomColor();
    this.style.backgroundColor = newColor;
}

function  randomColor() {

  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);

  return `rgb(${r}, ${g}, ${b})`;
    
}

function decreaseSize(){
     newP.style.fontSize = `${size-5}px`;
     newP.style.textAlign= 'right';
}

function increaseSize(){
    newP.style.fontSize = `${size+5}px`;
    newP.style.textAlign= 'center';
}



function addText(){

    increaseBtn.innerText = 'Aumentar Texto';
    decreaseBtn.innerText = 'Diminuir Texto';
    document.body.appendChild(increaseBtn);
    document.body.appendChild(decreaseBtn);
   



}

function aprendido(){

    for(let item of listItems ){
        item.append('-aprendido');

    }
}

function addItem(){
  let newItem = prompt('O que aprendeste mais?');

  let newLi = document.createElement('li');
  newLi.innerText = newItem; 
  myList.appendChild(newLi);
  
 
}



//JS
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',changeColor);

//Jquery
let btn2 = $('#btn2');
btn2.on('click',changeColor);


btn3.addEventListener('click',changeColor);
btnAddText.addEventListener('click', addText, {once:true});

decreaseBtn.addEventListener('click',decreaseSize);
increaseBtn.addEventListener('click',increaseSize);
learnedBtn.addEventListener('click', aprendido, {once: true});
btnAddItem.addEventListener('click', addItem, {once: true});
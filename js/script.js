const form = document.querySelector('form');
const produt = document.querySelector('#product');
const qt = document.querySelector('#qty');

const myItems = $('#myItems').text('Cucu novo texto Jquery');
console.log(myItems);



/*form.addEventListener('submit', function(event){
     event.preventDefault();

     let item = document.createElement('li');
     item.innerText = qt.value + ' ' + produt.value;
     list.appendChild(item);

     form.reset();

})


class GroceryItem {
     constructor(name, quantity, price){
         this.name = name;
         this.quantity = quantity; 
         this.price = price;
     }
     
     showPrice(){
         return `O preço de ${this.name} é ${this.price}`;
     }

     showQty(){
          return `É para trazer ${this.quantity} unidades de ${this.name}`;
      }
 }
 
const batatas = new GroceryItem("Marker", "5", "$3");

console.log(batatas.showPrice())
console.log(batatas.showQty()) */

const loadStarWarsFilm = async () => {
    const res = await fetch("https://swapi.dev/api/films/1/");
    const data = await res.json();
    console.log(data);

    let filmName = document.createElement('h1');
    filmName.innerText = data.title;

    document.body.append(filmName);

}


loadStarWarsFilm();



String.prototype.toLowerAndWeekend = function(){
     return `Estamos quase de fim de semana ${this.toLowerCase()}`;
}; 

let myName = 'Sara';

alert(myName.toLowerAndWeekend());















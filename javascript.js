const BurgerBtn = document.getElementById("burger-btn");
const BurgerMenu = document.getElementById("burger-menu");
const Burgercontact = document.getElementById("contact");
const Burgercontactnumber = document.getElementById("contact-number");

const showSideMenu = () => {
    BurgerMenu.classList.toggle("show"); 
    BurgerBtn.classList.toggle("show1");
    Burgercontact.classList.toggle("show2");
    Burgercontactnumber.classList.toggle("show3");
}

BurgerBtn.addEventListener("click",showSideMenu);



var modal = document.getElementById('modal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

var modal2 = document.getElementById('FonModal');
var btn2 = document.getElementById("submit");
var span2 = document.getElementsByClassName("close2")[0];
var Input = document.getElementById('name');
var Input2 = document.getElementById('number');
var Input3 = document.getElementById('comment');



btn2.onclick = function() {
    modal2.style.display = "block";
    Input.reset();
    Input2.reset();
    Input3.reset();
}
span2.onclick = function() {
    modal2.style.display = "none";
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal2) {
        modal2.style.display = "none"
    }
}



let name = document.querySelector('#name');
let number = document.querySelector('#number');
let comment = document.querySelector('#comment');
let submit = document.querySelector('#submit');

let appeals = {};


function Appeal(name,number,comment){
     this.name = name;
     this.number = number;
     this.comment = comment;
}

function createId(appeals){
    return Object.keys(appeals).length;
}

submit.addEventListener('click',() => {
    const nameAppeal = name.value;
    const numberAppeal = number.value;
    const commentAppeal = comment.value; 

    const appeal = new Appeal(nameAppeal,numberAppeal,commentAppeal);

    const appealId = 'Appeal' + createId(appeals);
    appeals[appealId] = appeal;

    console.log(appeals);
})

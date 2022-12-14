let cat_name = document.querySelector('[name="petNickname"]');
let breed = document.querySelector("#breed");
let food = document.querySelectorAll('input[name="food"]');
let sex = document.querySelectorAll('input[name="sex"]');
let btn = document.querySelector("#btn");

class Cat {
    constructor (name, breed, food, sex){
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

function getBreed(){
    let selectedBreed = breed.options[breed.selectedIndex].value;
    return selectedBreed;
}

function checkedCheckbox(check) { 
    let checkedValue = [];
    for (let i in check){
        if(check[i].checked){
            if(check == sex) {
                return check[i].value;
            }
            checkedValue.push(check[i].value);
        }
    }
    return checkedValue.join();


function sendData(e) {
    let cat = new Cat (cat_name.value, getBreed(), checkedCheckbox(food), checkedCheckbox(sex));
    console.log(cat);

    e.preventDefault();

    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error)); 
}

btn.addEventListener("click", sendData);
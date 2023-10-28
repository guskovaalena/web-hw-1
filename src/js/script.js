// будущая страница
// имя
document.getElementById("name").oninput = function() {addFName()};
let inputName = document.querySelector('#name');
function addFName() {
    let futureName = inputName.value;
    document.getElementById("fname").innerHTML = futureName;
    localStorage.setItem("futureName", futureName);
    document.querySelector('.fname').style.cssText = "background-color: white;";
}

// пол
function func1() {
    var rad=document.getElementsByName('radio');
    for (var i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        let futureGender = rad[i].value;
        document.getElementById("fgender").innerHTML = futureGender;
        localStorage.setItem("futureGender", futureGender);
        document.querySelector('.fgender').style.cssText = "background-color: white;";
      }
    }
}

// дата рождения
function onDateChange(obj){
    let date = obj.value;
    let year = date[0] + date[1] + date[2] + date[3];
    let month = date[5] + date[6];
    let day = date[8] + date[9];
    var now = new Date(); //Текущя дата
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    var dob = new Date(year,month,day); //Дата рождения
    var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    var age; //Возраст

    //Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
        age = age-1;
    }
    let add;
    if (age % 10 == 1){
        add = "год";
    }
    else if (age % 10 == 2 || age % 10 == 3 || age % 10 == 4){
        add = "годa";
    }
    else {
        add = "лет";
    }
    let futureAge = age + ' ' + add;
    document.getElementById("fage").innerHTML = futureAge;
    localStorage.setItem("futureAge", futureAge);
    document.querySelector('.fage').style.cssText = "background-color: white;";
}

// о себе
document.getElementById("inform").oninput = function() {addFAboutYou()};
let inputAbout = document.querySelector('#inform');
function addFAboutYou() {
    let futureAbout = inputAbout.value;
    document.getElementById("faboutyou").innerHTML = futureAbout;
    localStorage.setItem("futureAbout", futureAbout);
    document.querySelector('.faboutyou').style.cssText = "background-color: white;";
}

let showcontactsLink = document.querySelector('.showcontacts');

document.getElementById("tg").oninput = function() {addFTg()};
let inputTg = document.querySelector('#tg');
function addFTg() {
    let futureTg = "@" + inputTg.value;
    document.getElementById("showtg-text").innerHTML = futureTg;
    localStorage.setItem("futureTg", futureTg);
    if (inputTg.value != ""){
        showcontactsLink.removeAttribute('onclick');
        showcontactsLink.style.cssText = "opacity: 1;";
    }
}

document.getElementById("phone").oninput = function() {addFPhone()};
let inputPhone = document.querySelector('#phone');
function addFPhone() {
    let futurePhone = inputPhone.value;
    document.getElementById("showtel-text").innerHTML = futurePhone;
    localStorage.setItem("futurePhone", futurePhone);
    if (inputPhone.value != ""){
        showcontactsLink.removeAttribute('onclick');
        showcontactsLink.style.cssText = "opacity: 1;";
    }
}

// document.getElementById("fcourse").innerHTML = localStorage.getItem("futureCourse");
// if (localStorage.getItem("futureCourse"))
//     document.querySelector('.fedu').style.cssText = "background-color: white;";

// validation

function isDigit(symbol){
    if (+symbol == 0 || +symbol == 1 || +symbol == 2 || +symbol == 3 || +symbol == 4 || +symbol == 5 || +symbol == 6 || +symbol == 7 || +symbol == 8 || +symbol == 9){
        return true;
    }
    else{
        return false;
    }
}

const left = document.querySelector('.left');
const name = left.querySelector("#name");
const genders = left.querySelectorAll("#gender");
const dateofbirth = left.querySelector("#dateofbirth");
const tg = left.querySelector("#tg");
const phone = left.querySelector("#phone");
const inform = left.querySelector("#inform");

const continueBtn = document.querySelector('.continue');
continueBtn.addEventListener('click', function(){
    let flag = true;
    if (!name.value){
        name.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
        document.querySelector('#ifInvalidName').innerHTML = "Оязательное поле";
        flag = false;
    }
    if (!(genders[0].checked || genders[1].checked)){
        document.querySelector('.ifInvalidGender').innerHTML = "Выберите один из вариантов"
        flag = false;
    }
    if (!dateofbirth.value){
        dateofbirth.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
        document.querySelector('#ifInvalidDob').innerHTML = "Оязательное поле"
        flag = false;
    }
    if (!tg.value){
        tg.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
        document.querySelector('#ifInvalidTg').innerHTML = "Оязательное поле";
        flag = false;
    }
    if (!phone.value){
        phone.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
        document.querySelector('#ifInvalidPhone').innerHTML = "Оязательное поле";
        flag = false;
    }
    if (!inform.value){
        inform.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
        document.querySelector('#ifInvalidInform').innerHTML = "Оязательное поле";
        flag = false;
    }
    if (phone.value.length < 11){
        phone.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
        document.querySelector('#ifInvalidPhone').innerHTML = "Введите 11 цифр";
        flag = false;
    }
    for (var i = 0; i < phone.value.length; i++){
        if (isDigit(phone.value[i]) == false){
            flag = false;
            phone.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
            document.querySelector('#ifInvalidPhone').innerHTML = "Посторонние символы";
        }
    }
    for (var i = 0; i < tg.value.length; i++){
        if (tg.value.charCodeAt(i) > 122){ //символ 122 это 'z'
            flag = false;
            tg.style.cssText = "border-color: #FF0000; background-color: #FF00000D; height: 6.5vh;";
            document.querySelector('#ifInvalidTg').innerHTML = "Некорректный ввод";
        } 
    }

    if (flag == true){
        document.location='index2.html';
    }

})

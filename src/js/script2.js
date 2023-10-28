let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".option");

select.onclick = () => {
    selectContainer.classList.toggle("active");
};


options.forEach((e) => {
    e.addEventListener("click", () => {
        input.value = e.innerText;

        document.getElementById("ffaculty").innerHTML = e.innerText;
        document.querySelector('.fedu').style.cssText = "background-color: white;";
        // localStorage.setItem("futureFaculty", e.innerText);

        selectContainer.classList.remove("active");
        options.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});


let selectContainer1 = document.querySelector(".select-container1");
let select1 = document.querySelector(".select1");
let input1 = document.getElementById("input1");
let options1 = document.querySelectorAll(".option1");

select1.onclick = () => {
    selectContainer1.classList.toggle("active");
};

options1.forEach((e) => {
    e.addEventListener("click", () => {
        input1.value = e.innerText;

        document.getElementById("fstage").innerHTML = e.innerText.toLowerCase() + ' ';
        document.querySelector('.fedu').style.cssText = "background-color: white;";
        // localStorage.setItem("futureStage", e.innerText.toLowerCase() + ' ');

        selectContainer1.classList.remove("active");
        options1.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});

document.getElementById("fname").innerHTML = localStorage.getItem("futureName");
document.querySelector('.fname').style.cssText = "background-color: white;";

document.getElementById("fgender").innerHTML = localStorage.getItem("futureGender");
document.querySelector('.fgender').style.cssText = "background-color: white;";

document.getElementById("fage").innerHTML = localStorage.getItem("futureAge");
document.querySelector('.fage').style.cssText = "background-color: white;";

document.getElementById("faboutyou").innerHTML = localStorage.getItem("futureAbout");
document.querySelector('.faboutyou').style.cssText = "background-color: white;";



function func2() {
    var rad=document.getElementsByName('radio-course');
    for (var i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        let futureCourse = rad[i].value + ' курс, ';
        document.getElementById("fcourse").innerHTML = futureCourse;
        // localStorage.setItem("futureCourse", futureCourse);
        document.querySelector('.fedu').style.cssText = "background-color: white;";
        let gradStatus = document.getElementById("grad");
        if (gradStatus.checked) {
            gradStatus.checked = 0;
        }
      }
    }
}

function func3() {
    let futureCourse = 'Выпускник, ';
    document.getElementById("fcourse").innerHTML = futureCourse;
    // localStorage.setItem("futureCourse", futureCourse);
    document.querySelector('.fedu').style.cssText = "background-color: white;";
    var rad=document.getElementsByName('radio-course');
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
          rad[i].checked = 0;
        }
    }
}

document.getElementById("OP").oninput = function() {addFOP()};
let inputOP = document.querySelector('#OP');
function addFOP() {
  let futureOP = inputOP.value;
  document.getElementById("fOP").innerHTML = futureOP;
//   localStorage.setItem("futureOP", futureOP);
  document.querySelector('.fOP').style.cssText = "background-color: white;";
}

document.getElementById("work").oninput = function() {addFWork()};
let inputWork = document.querySelector('#work');
function addFWork() {
  let futureWork = inputWork.value;
  document.getElementById("fwork").innerHTML = futureWork;
//   localStorage.setItem("futureWork", futureWork);
}

document.getElementById("showtg-text").innerHTML = localStorage.getItem("futureTg");
document.getElementById("showtel-text").innerHTML = localStorage.getItem("futurePhone");

const roles = document.querySelectorAll('.edu');
const course = document.getElementsByName('radio-course');
const grad = document.querySelector('#grad');
const stage = document.querySelector('#input1');
const faculty = document.querySelector('#input');
const OP = document.querySelector('.OP');
const work = document.querySelector('.work');

const continueBtn = document.querySelector('.continue');
continueBtn.addEventListener('click', function(){
    let flag = true;
    if (!(roles[0].checked || roles[1].checked)){
        flag = false;
        document.querySelector('.ifInvalidRole').innerHTML = "Выберите один из вариантов";
    }
    if (!(course[0].checked || course[1].checked || course[2].checked || course[3].checked || course[4].checked || course[5].checked || grad.checked)){
        flag = false;
        document.querySelector('.course').style.cssText = "border-color: #FF0000; background-color: #FF00000D;";
        document.querySelector('.ifInvalidCourse').innerHTML = "Выберите один из вариантов";
    }
    if (!stage.value){
        flag = false;
        document.querySelector('.ifInvalidStage').innerHTML = "Обязательное поле";
        document.querySelector('.select-container1 .select1').style.cssText = "border-color: #FF0000; background-color: #FF00000D;";
    }
    if (!faculty.value){
        flag = false;
        document.querySelector('.ifInvalidFaculty').innerHTML = "Обязательное поле";
        document.querySelector('.select-container .select').style.cssText = "border-color: #FF0000; background-color: #FF00000D;";
    }
    if (!OP.value){
        flag = false;
        document.querySelector('#ifInvalidOP').innerHTML = "Обязательное поле";
        document.querySelector('.OP').style.cssText = "border-color: #FF0000; background-color: #FF00000D;";
    }
    if (!work.value){
        flag = false;
        document.querySelector('#ifInvalidWork').innerHTML = "Обязательное поле";
        document.querySelector('.work').style.cssText = "border-color: #FF0000; background-color: #FF00000D;";
    }

    if (flag == true){}

})





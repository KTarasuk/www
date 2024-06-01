console.log('Start program');

const widthWebSite = window.screen.width; // Получаем ширину экрана
const body = document.getElementById("bodyWebSite"); // Получаем body
console.log(widthWebSite);
switch (widthWebSite) { // Задаем размер шрифта по размеру экрана
    case 1440:
        console.log("Width | Active fontSize 20px");
        body.style.fontSize = '20px';
        break;
    case 2560:
        console.log("Width | Active fontSize 24px");    
        body.style.fontSize = '24px';
        break;
    default:
        break;
}

// === MenuBarMobile === \\
const menuBar = document.getElementById('menuListMobile');

function menuBarOpen(){
    menuBar.style.fontSize = '100%';
    menuBar.style.width = '100%';
    menuBar.style.paddingTop = '25%';
    menuBar.style.transition = '0.35s';
    console.log('MenuBar | Open');
}
function menuBarClose(){
    menuBar.style.width = "0%";
    menuBar.style.fontSize = '0%';
    console.log('MenuBar | Close');
}


// === Info Project === \\

const infoProject = document.getElementById('iP');
const projectOne = document.getElementById('projectOne');
const projectTwo = document.getElementById('projectTwo');

function closeInfoProject() {
    infoProject.style.width = '0%';
    projectOne.style.fontSize = '0%';
    projectTwo.style.fontSize = '0%';
    console.log('Projects | Close Info Project');
}
function openInfoProject() {
    infoProject.style.width = '100%';
    infoProject.style.transition = '0.5s';
    console.log('Projects | Open Info Project'); 
}
function openProjectOne(){
    projectOne.style.fontSize = '100%';
    projectOne.style.transition = '0.5s';
    console.log('Projects | Open One Project');
}
function openProjectTwo(){
    projectTwo.style.fontSize = '100%';
    projectTwo.style.transition = '0.5s';
    console.log('Projects | Open Two Project');
}

function openIPPO(){
    openInfoProject();
    openProjectOne();
}
function openIPPT(){
    openInfoProject();
    openProjectTwo();
}
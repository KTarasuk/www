console.log('Start program'); // Start program

const widthSite = window.screen.width;

// === MenuBarMobile === \\
const menuBar = document.getElementById('menuListMobile');

if (widthSite <= 600){
    console.info('Mobile | MenuBar Active');
    function menuBarOpen(){
        menuBar.style.fontSize = '100%';
        menuBar.style.width = '100%';
        menuBar.style.paddingTop = '25%';
        menuBar.style.transition = '0.3s';
        console.log('MenuBar | Open');
    }
    function menuBarClose(){
        menuBar.style.width = "0%";
        menuBar.style.fontSize = '0%';
        console.log('MenuBar | Close');
    }
} else { console.log('Mobile | MenuBar not active'); }


// === Info Project === \\

let infoProject = document.getElementById('iP');
let projectOne = document.getElementById('projectOne');
let projectTwo = document.getElementById('projectTwo');

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
    console.log('Project | Open One Project');
}
function openProjectTwo(){
    projectTwo.style.fontSize = '100%';
    projectTwo.style.transition = '0.5s';
    console.log('Project | Open Two Project');
}

function openIPPO(){
    openInfoProject();
    openProjectOne();
}
function openIPPT(){
    openInfoProject();
    openProjectTwo();
}
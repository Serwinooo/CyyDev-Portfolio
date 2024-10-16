// container & other div
const projectTabs = document.getElementsByClassName('ag-format-container');
const projectContainer = document.getElementById('projectContainer');
const projects = document.querySelectorAll('.project');
// buttons/div with addEventListener
const projectCode = document.getElementById('projectCode');
const projectDesign = document.getElementById('projectDesign');

function pageExistDesign() {
    const content = document.querySelector('.content');
    return content !== null; 
}

function pageExistPrograms() {
    const projectSection = projectContainer;
    return projectSection !== null; 
}

function projCode() {
    if (!pageExistPrograms()) {
        window.location.href = '503.html';
    } else {
        projectContainer.style.display = 'flex';

        for (let i = 0; i < projects.length; i++) {
            projects[i].style.display = 'grid';        
        }

        for (let i = 0; i < projectTabs.length; i++) {
            projectTabs[i].style.display = 'none';
        }
    }
}
projectCode.addEventListener('click', projCode);


function projDesign() {
    if (!pageExistDesign()) { 
        window.location.href = "503.html";
    } else {

        console.log("Page exists, proceed with the operation");
    }
}
projectDesign.addEventListener('click', projDesign);
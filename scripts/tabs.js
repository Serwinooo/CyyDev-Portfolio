const projectContainer = document.getElementById('projectContainer');
const projects = document.querySelectorAll('.project');
// const designContainer = 
// const otherContainer =
const projectTabs = document.getElementsByClassName('ag-format-container');

const projectCode = document.getElementById('projectCode');

function projCode() {
        projectContainer.style.display = 'flex';

    for(i = 0; i < projects.length; i++){
        projects[i].style.display = 'grid';        }

    for(i = 0; i < projectTabs.length; i++){
        projectTabs[i].style.display = 'none';
    }
}

projectCode.addEventListener('click', projCode);
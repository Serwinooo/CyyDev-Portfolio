const checkbox = document.getElementById("checkbox");
const navbarLinks = document.querySelectorAll('.navbar-nav a');
const cards = document.querySelectorAll('.card');
const intro = document.querySelector('.intro');
const cardHeader = document.querySelector('.card-header');
const pfName = document.querySelectorAll('.all-span');
const aboutTitle = document.querySelectorAll('.abt');
const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
const navbarNav = document.querySelector('#navbarNav');
const cardContent = document.querySelector('.card-content');
const projectItem = document.querySelectorAll('.project-item');
const projectPar = document.querySelectorAll('.project-item p');
const labelForm = document.querySelectorAll('#label-form');
const projContP =  document.querySelectorAll('.project-content p');
const verifiedLogo = document.querySelector('.bi-check-circle-fill');

function changeMode() {
    if (checkbox.checked) {
        // light mode
        document.body.classList.add('dark');
        navbarTogglerIcon.classList.add('dark-mode-icon');
        
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = '#000';
        }

        for (let i = 0; i < pfName.length; i++) {
            pfName[i].style.color = '#000';
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '#fff';
        }

        for (let i = 0; i < aboutTitle.length; i++) {
            aboutTitle[i].style.color = '#000';
        }

        for (let i = 0; i < projectItem.length; i++) {
            projectItem[i].style.background = '#111';
            projectItem[i].style.color = '#fff';
        }

        for (let i = 0; i < projectPar.length; i++) {
            projectPar[i].style.color = '#fff';
        }

        for (let i = 0; i < labelForm.length; i++) {
            labelForm[i].style.color = '#000';
        }

        for (let i = 0; i < projContP.length; i++) {
            projContP[i].style.color = '#000';
        }

        intro.style.color = '#fff';
        cardHeader.style.color = '#fff';
        navbarNav.style.background = '#fff';
        cardContent.style.color = '#000';
        verifiedLogo.style.color = 'rgb(36, 36, 253)';


    } else {
        // fedault
        document.body.classList.remove('dark');
        navbarTogglerIcon.classList.remove('dark-mode-icon');
        
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = '';
        }

        for (let i = 0; i < pfName.length; i++) {
            pfName[i].style.color = '';
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '';
        }

        for (let i = 0; i < aboutTitle.length; i++) {
            aboutTitle[i].style.color = '';
        }

        for (let i = 0; i < projectItem.length; i++) {
            projectItem[i].style.background = '';
            projectItem[i].style.color = '';
        }

        for (let i = 0; i < projectPar.length; i++) {
            projectPar[i].style.color = '';
        }

        for (let i = 0; i < labelForm.length; i++) {
            labelForm[i].style.color = '';
        }

        for (let i = 0; i < projContP.length; i++) {
            projContP[i].style.color = '';
        }


        intro.style.color = '';
        cardHeader.style.color = '';
        navbarNav.style.background = '';
        cardContent.style.color = '';
        verifiedLogo.style.color = '';
    }
}

checkbox.addEventListener('change', changeMode);

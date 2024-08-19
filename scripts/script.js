const contentHome = document.querySelector('#content-home');
const aboutContainer = document.querySelector('#content-about');
const contentTitle = document.querySelector('#content-title');
const card2 = document.querySelector('.div2 .card');
const contentContact = document.querySelector('#content-contact');
const contentCertificates = document.querySelector('#content-certificates');
const contentProjects = document.querySelector('#content-projects');

const hideAllSections = () => {
    contentHome.style.display = 'none';
    aboutContainer.style.display = 'none';
    contentContact.style.display = 'none';
    contentCertificates.style.display = 'none';
    contentProjects.style.display = 'none';
};

const resetCardStyles = () => {
    card2.style.marginTop = '0rem';
    card2.style.paddingBottom = '0rem';
};

const homePage = () => {
    hideAllSections();
    resetCardStyles();
    contentHome.style.display = 'block';
    contentTitle.innerHTML = 'Welcome to CyyDev Portfolio!';
};

const aboutPage = () => {
    hideAllSections();
    resetCardStyles();
    aboutContainer.style.display = 'block';
    card2.style.marginTop = '6rem';
    contentTitle.innerHTML = 'About Me';
};

const contactPage = () => {
    hideAllSections();
    resetCardStyles();
    contentContact.style.display = 'block';
    card2.style.marginTop = '4rem';
    contentTitle.innerHTML = 'Contact Me';
};

const certPage = () => {
    hideAllSections();
    resetCardStyles();
    contentCertificates.style.display = 'block';
    card2.style.paddingBottom = '2rem';
    contentTitle.innerHTML = 'Seminars & Training Certificates';
};

const projectPage = () => {
    hideAllSections();
    resetCardStyles();
    contentProjects.style.display = 'block';
    card2.style.paddingBottom = '2rem';
    contentTitle.innerHTML = 'Project Experience';
};

# CyyDev Portfolio

Welcome to the portfolio of Cerwin Roxas, showcasing a collection of projects, educational background, and professional experience in web development and computer engineering.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## About

This portfolio is a personal website that highlights my skills, projects, certificates, and work experience. It is designed to be a single-page application with smooth transitions between different sections like Home, About, Contact, Certificates, and Projects.

## Features

- **Responsive Design**: Fully responsive across different devices.
- **Dark/Light Mode**: Toggle between dark and light themes.
- **Interactive Sections**: Smooth transitions and animations when navigating between sections.
- **Project Details**: Detailed descriptions of selected projects, including live demos and source code links.
- **Contact Form**: Users can send messages directly via a contact form.

## Installation

To run this project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/cyydev-portfolio.git
    ```

2. Navigate to the project directory:

    ```bash
    cd cyydev-portfolio
    ```

3. Open `index.html` in your preferred browser:

    ```bash
    open index.html
    ```

## Usage

The website is structured into different sections:

- **Home**: A brief introduction and a friendly console message.
- **About**: Education background and work experience.
- **Contact**: A form to reach out via email.
- **Certificates**: Showcases certificates from various trainings and seminars.
- **Projects**: Displays key projects with details and links to live demos.

### JavaScript Functions

The JavaScript functions used for navigating between sections:

- `hideAllSections()`: Hides all content sections.
- `applyAnimation(element)`: Applies animation to a given element.
- `homePage()`: Displays the Home section.
- `aboutPage()`: Displays the About section.
- `contactPage()`: Displays the Contact section.
- `certPage()`: Displays the Certificates section.
- `projectPage()`: Displays the Projects section.

### Example JavaScript Snippet

-   HTML5
-   CSS3
-   Bootstrap 5
-   JavaScript
-   EmailJS (for contact form)

### Acknowledgements
-   This portfolio is inspired by various web development tutorials and personal projects. Special thanks to the open-source community for providing resources and tools to enhance the development process.

### Contact
-   `Email`: Cerwinroxas17@gmail.com
-   `LinkedIn`: https://www.linkedin.com/in/cerwin-roxas-67b436250/
-   `GitHub`: https://github.com/Serwinooo

### Example JavaScript Snippet

```javascript
const hideAllSections = () => {
    contentHome.style.display = 'none';
    aboutContainer.style.display = 'none';
    contentContact.style.display = 'none';
    contentCertificates.style.display = 'none';
    contentProjects.style.display = 'none';
};

const applyAnimation = (element) => {
    element.classList.add('animate');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate');
    }, { once: true });
};


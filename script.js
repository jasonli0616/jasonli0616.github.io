/*
Jason Li's Portfolio Website
made by: Jason Li
*/

// Adjust intro for screen size
function adjustIntroForScreenSize() {
    let screen_width = screen.availWidth
    let intro_section = document.getElementById("intro-section")
    if (screen_width <= 770 && screen_width >= 450) {
        intro_section.innerHTML = `
            <div class="py-5" id="intro-section">
                <div class="container">
                    <img src="files/jl_logo.png" alt="" style="max-width: 18rem;">
                        <h1 class="display-1 text-light">Jason Li</h1>
                        <h5 class="display-5 text-light">Aspiring smart person</h3>
                        <p class="lead text-light" id="intro-text">
                            I am a high school student in Canada interested in programming with experience in Python, HTML, and CSS. To see my projects or to learn more about me, click the buttons below.
                        </p>
                        <p>
                            <button class="btn btn-outline-info" onclick="scrollToSection('projects')">Projects</button>
                            <button class="btn btn-outline-light" onclick="scrollToSection('about-me')">About me</button>
                            <button class="btn btn-outline-light" onclick="scrollToSection('contact')">Contact</button>
                        </p>
                </div>
            </div>
        `
    } else if (screen_width <= 1005) {
        intro_section.innerHTML = `
            <div class="py-5" id="intro_section">
                <div class="container">
                        <div class="row justify-content-center">
                            <div class="col">
                                <img src="files/jl_logo.png" alt="" style="max-width: 18rem;">
                            </div>
                            <div class="col">
                                <h1 class="display-1 text-light">Jason Li</h1>
                                <h5 class="display-5 text-light">Aspiring smart person</h3>
                                <p class="lead text-light" id="intro-text">
                                    I am a high school student in Canada interested in programming with experience in Python, HTML, and CSS. To see my projects or to learn more about me, click the buttons below.
                                </p>
                                <p>
                                    <button class="btn btn-outline-info" onclick="scrollToSection('projects')">Projects</button>
                                    <button class="btn btn-outline-light" onclick="scrollToSection('about-me')">About me</button>
                                    <button class="btn btn-outline-light" onclick="scrollToSection('contact')">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    } else {
        intro_section.innerHTML = `
            <div class="py-5" id="intro-section">
                <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-4">
                                <img src="files/jl_logo.png" alt="" style="max-width: 18rem;">
                            </div>
                            <div class="col-5">
                                <h1 class="display-1 text-light">Jason Li</h1>
                                <h5 class="display-5 text-light">Aspiring smart person</h3>
                                <p class="lead text-light" id="intro-text">
                                    I am a high school student in Canada interested in programming with experience in Python, HTML, and CSS. To see my projects or to learn more about me, click the buttons below.
                                </p>
                                <p>
                                    <button class="btn btn-outline-info" onclick="scrollToSection('projects')">Projects</button>
                                    <button class="btn btn-outline-light" onclick="scrollToSection('about-me')">About me</button>
                                    <button class="btn btn-outline-light" onclick="scrollToSection('contact')">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
adjustIntroForScreenSize()


// Adjust intro size on window resize event
window.addEventListener('resize', function(event) {
    adjustIntroForScreenSize()
}, true);


// Open GitHub on click
function viewOnGitHub(repo) {
    if (repo == "pyinstallergui") {
        window.open("https://github.com/HDSB-GWS-ProgrammingClub/PyInstaller-GUI", "_blank");
    } else if (repo == "bscode") {
        window.open("https://github.com/jasonli0616/BSCode", "_blank");
    } else if (repo == "pyshellbot") {
        window.open("https://github.com/jasonli0616/PyShell-Discord-Bot", "_blank");
    }
}

// Button scrolls down to section
function scrollToSection(sectionid) {
    let scrollto_section = document.getElementById(sectionid);
    scrollto_section.scrollIntoView({ behavior: 'smooth' });
    if (sectionid == "home") {
        document.getElementById("navbarNav").innerHTML = `
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" style="cursor: pointer;" aria-current="page" onclick="scrollToSection('home')">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('projects')">Projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('about-me')">About me</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('contact')">Contact</a>
                </li>
            </ul>
        `;
    } else if (sectionid == "projects") {
        document.getElementById("navbarNav").innerHTML = `
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('home')">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" style="cursor: pointer;" aria-current="page" onclick="scrollToSection('projects')">Projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('about-me')">About me</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('contact')">Contact</a>
                </li>
            </ul>
        `;
    } else if (sectionid == "about-me") {
        document.getElementById("navbarNav").innerHTML = `
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('home')">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" aria-current="page" onclick="scrollToSection('projects')">Projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" style="cursor: pointer;" aria-current="page" onclick="scrollToSection('about-me')">About me</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('contact')">Contact</a>
                </li>
            </ul>
        `;
    } else if (sectionid == "contact") {
        document.getElementById("navbarNav").innerHTML = `
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('home')">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" aria-current="page" onclick="scrollToSection('projects')">Projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer;" onclick="scrollToSection('about-me')">About me</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" style="cursor: pointer;" aria-current="page" onclick="scrollToSection('contact')">Contact</a>
                </li>
            </ul>
        `;
    }
}

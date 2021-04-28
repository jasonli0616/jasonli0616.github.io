/*
Jason Li's Portfolio Website
made by: Jason Li
*/

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

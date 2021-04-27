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
    scrollto_section.scrollIntoView();
}

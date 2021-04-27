/*
Jason Li's Portfolio Website
made by: Jason Li
*/



// Open GitHub on click - PyInstaller GUI
document.getElementById("pyinstallergui-github-btn").onclick = function() {
    window.open("https://github.com/HDSB-GWS-ProgrammingClub/PyInstaller-GUI", "_blank");
}

// Open GitHub on click - BSCode
document.getElementById("bscode-github-btn").onclick = function() {
    window.open("https://github.com/jasonli0616/BSCode", "_blank");
}

// Open GitHub on click - PyShell Discord Bot
document.getElementById("pyshellbot-github-btn").onclick = function() {
    window.open("https://github.com/jasonli0616/PyShell-Discord-Bot", "_blank");
}

function scrollToSection(sectionid) {
    let scrollto_section = document.getElementById(sectionid);
    scrollto_section.scrollIntoView();
}

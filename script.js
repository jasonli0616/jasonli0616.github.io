/*
Jason Li's Portfolio Website
made by: Jason Li
*/


// Adjust intro for screen size
function adjustIntroForScreenSize() {
    let screen_width = screen.availWidth
    let intro_section = document.getElementById("intro-section")
    let intro_section_txt_content = document.getElementById("intro-section-txt").innerHTML
    if (screen_width <= 1005) {
        intro_section.innerHTML = `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <img src="files/jl_logo.png" alt="" style="max-width: 18rem;">
                    </div>
                    <div class="col" id="intro-section-txt">
                        ${intro_section_txt_content}
                    </div>
                </div>
            </div>
        `
    } else {
        intro_section.innerHTML = `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="files/jl_logo.png" alt="" style="max-width: 18rem;">
                    </div>
                    <div class="col" id="intro-section-txt">
                        ${intro_section_txt_content}
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


// Smooth scroll for Safari
(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

// If using Internet Explorer, add message
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
if (msie > 0) {
   // IE 10 or older
        let intro_div = document.getElementById('intro-section-txt')
        intro_div.innerHTML = `
            <div class="alert alert-danger">Parts of this website may not display properly with Internet Explorer. Please use <a href="https://www.microsoft.com/en-us/edge" target="_blank">Microsoft Edge</a> or <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>.</div>
            ${intro_div.innerHTML}
        `
}
var ua = window.navigator.userAgent;
var trident = ua.indexOf('Trident/');
if (trident > 0) {
        // IE 11
        let intro_div = document.getElementById('intro-section-txt')
        intro_div.innerHTML = `
            <div class="alert alert-danger">Parts of this website may not display properly with Internet Explorer. Please use <a href="https://www.microsoft.com/en-us/edge" target="_blank">Microsoft Edge</a> or <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>.</div>
            ${intro_div.innerHTML}
        `
}
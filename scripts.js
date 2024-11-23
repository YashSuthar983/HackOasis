// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Move the cursor element based on mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`; // Adjust to center cursor
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;  // Adjust to center cursor
});

// Change the cursor color and size when hovering over clickable elements
document.querySelectorAll('a, button, .cta-button, .option-icon').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.backgroundColor = '#ffffff'; // Change to white on hover
        cursor.style.width = '40px'; // Increase size
        cursor.style.height = '40px'; // Increase size
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#ff6600'; // Revert to neon orange
        cursor.style.width = '20px'; // Revert size
        cursor.style.height = '20px'; // Revert size
    });
});

// Open and close the full-page menu
const optionIcon = document.getElementById('hero-content');
const fullPageMenu = document.getElementById('full-page-menu');
const closeButton = document.getElementById('close-button');
const menuOptions = document.querySelectorAll('.menu-option');

// Open full-page menu
optionIcon.addEventListener('click', () => {
    fullPageMenu.classList.toggle('open');
});

// Close full-page menu
closeButton.addEventListener('click', () => {
    fullPageMenu.classList.remove('open');
});

// Navigate to a new page on clicking a menu option
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        const link = option.dataset.link; // Get the link from the data attribute
        if (link) {
            window.location.href = link;
        }
    });
});

// Scroll handling for About section reveal
window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('#about');
    const windowHeight = window.innerHeight;
    const sectionTop = aboutSection.getBoundingClientRect().top;

    // If the About section is within the viewable area, make it visible
    if (sectionTop < windowHeight - 150) {
        aboutSection.classList.add('visible');
    }
});

// Scroll handling for background video
window.addEventListener('scroll', function () {
    const video = document.getElementById('background-video');
    const videoOffset = window.pageYOffset / 2; // Controls how fast the video scrolls
    video.style.transform = `translateY(${videoOffset}px)`;
});

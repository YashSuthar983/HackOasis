// Select all the elements to animate, including the specifications table
const fadeInElements = document.querySelectorAll('.hero-content, .photo img, .photo-content, .features h2, .feature-item, .testimonials h2, .testimonial-item, .specifications, .specifications table');

// IntersectionObserver callback function
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Only add the 'visible' class once
            if (!entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe each element to animate
fadeInElements.forEach(element => observer.observe(element));


// Select the video and the audio toggle button
const video = document.getElementById('hero-video');
const audioToggleButton = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');


// Event listener to toggle mute/unmute
audioToggleButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false; // Unmute the video
        audioIcon.classList.remove('fa-volume-mute'); // Remove mute icon
        audioIcon.classList.add('fa-volume-up'); // Add unmute icon
    } else {
        video.muted = true; // Mute the video
        audioIcon.classList.remove('fa-volume-up'); // Remove unmute icon
        audioIcon.classList.add('fa-volume-mute'); // Add mute icon
    }
});


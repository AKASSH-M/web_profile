const javaIcon = document.querySelector('.floating-icon.java');
const reactIcon = document.querySelector('.floating-icon.react');
const pythonIcon = document.querySelector('.floating-icon.python');

const java = { top: 30, left: 15 };
const react = { top: 10, left: 78 };
const python = { top: 60, left: 95 };

let java_opacity = Math.random();
let react_opacity = Math.random();
let python_opacity = Math.random();

let java_op = java_opacity > 0.5;
let react_op = react_opacity > 0.5;
let python_op = python_opacity > 0.5;

function rand() {
    return Math.floor(Math.random() * 100);
}

function moveRandomPosition(obj) {
    obj.top = rand();
    obj.left = rand();
}

function applyPositions() {
    javaIcon.style.top = java.top + '%';
    javaIcon.style.left = java.left + '%';
    reactIcon.style.top = react.top + '%';
    reactIcon.style.left = react.left + '%';
    pythonIcon.style.top = python.top + '%';
    pythonIcon.style.left = python.left + '%';
}

function setopacity() {
    javaIcon.style.opacity = java_opacity;
    reactIcon.style.opacity = react_opacity;
    pythonIcon.style.opacity = python_opacity;
}

function startLoop() {
    // Java icon
    if (java_op) {
        java_opacity = Math.min(1, java_opacity + 0.01);
        if (java_opacity >= 1) java_op = false;
    } else {
        java_opacity = Math.max(0, java_opacity - 0.01);
        if (java_opacity <= 0) {
            java_op = true;
            moveRandomPosition(java);
        }
    }

    // React icon
    if (react_op) {
        react_opacity = Math.min(1, react_opacity + 0.01);
        if (react_opacity >= 1) react_op = false;
    } else {
        react_opacity = Math.max(0, react_opacity - 0.01);
        if (react_opacity <= 0) {
            react_op = true;
            moveRandomPosition(react);
        }
    }

    // Python icon
    if (python_op) {
        python_opacity = Math.min(1, python_opacity + 0.01);
        if (python_opacity >= 1) python_op = false;
    } else {
        python_opacity = Math.max(0, python_opacity - 0.01);
        if (python_opacity <= 0) {
            python_op = true;
            moveRandomPosition(python);
        }
    }

    setopacity();
    applyPositions();

    requestAnimationFrame(startLoop);
}

// Start loop
requestAnimationFrame(startLoop);

// Disable right click on image
const image = document.querySelector('img');
if (image) {
    image.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
}
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when scrolling down 200px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block'; // Show button
  } else {
    scrollToTopBtn.style.display = 'none'; // Hide button
  }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // Smooth scroll
  });
};

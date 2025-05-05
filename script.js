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
  return Math.floor(Math.random() * 80) + 10; // Constrain to 10%-90% range
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

function setOpacity() {
  let t = theme_black ? 1 : 0;
  javaIcon.style.opacity = java_opacity*t;
  reactIcon.style.opacity = react_opacity*t;
  pythonIcon.style.opacity = python_opacity*t;
}

function startLoop() {
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

  setOpacity();
  applyPositions();

  requestAnimationFrame(startLoop);
}

requestAnimationFrame(startLoop);

// Disable context menu for all images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', event => event.preventDefault());
});

// Scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Theme toggle
var theme_black = true;
const toggleThemeBtn = document.getElementById('toggle_theme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  theme_black = theme_black? false : true;
  toggleThemeBtn.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
});

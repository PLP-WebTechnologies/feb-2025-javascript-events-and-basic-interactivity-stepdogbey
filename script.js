// Button Click Event
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover Event
const hoverBtn = document.getElementById("hoverBtn");
hoverBtn.addEventListener("mouseover", () => {
  hoverBtn.style.backgroundColor = "lightgreen";
});
hoverBtn.addEventListener("mouseout", () => {
  hoverBtn.style.backgroundColor = "";
});

// Keypress Detection
const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Secret Action - Double Click
const secretBtn = document.getElementById("secretBtn");
secretBtn.addEventListener("dblclick", () => {
  alert("You have double clicked!");
});

// Change Text Button
const changeTextBtn = document.getElementById("changeTextBtn");
const textToChange = document.getElementById("textToChange");
changeTextBtn.addEventListener("click", () => {
  textToChange.textContent = "🎉 The text has changed!";
});

// Image Gallery - Next Image
const galleryImage = document.getElementById("galleryImage");
const nextImageBtn = document.getElementById("nextImageBtn");
const images = [
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.png",
];
let currentImageIndex = 0;

nextImageBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  galleryImage.src = images[currentImageIndex];
});

// Tabs
const tablinks = document.querySelectorAll(".tablink");
const tabcontents = document.querySelectorAll(".tabcontent");

function hideAllTabs() {
  tabcontents.forEach(tab => tab.style.display = "none");
}

hideAllTabs(); // Hide all tabs initially

// Show default tab
document.getElementById("tab1").style.display = "block";

tablinks.forEach(link => {
  link.addEventListener("click", () => {
    hideAllTabs();
    const tabId = `tab${link.dataset.tab}`;
    document.getElementById(tabId).style.display = "block";
  });
});

// Form Validation
const form = document.getElementById("sampleForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});
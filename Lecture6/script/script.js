document.addEventListener("DOMContentLoaded", function () {
  // Custom Cursor
  const cursor = document.createElement("div");
  cursor.id = "customCursor";

  const arrow = document.createElement("div");
  arrow.id = "cursorArrow";
  cursor.appendChild(arrow);

  document.body.appendChild(cursor);

  let lastX = 0, lastY = 0;

  document.addEventListener("mousemove", (e) => {
      let deltaX = e.clientX - lastX;
      let deltaY = e.clientY - lastY;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      if (deltaX === 0 && deltaY === 0) {
          arrow.innerHTML = ""; // No arrow when stationary
      } else if (Math.abs(deltaX) > Math.abs(deltaY)) {
          arrow.innerHTML = deltaX > 0 ? ">" : "<";
          arrow.style.top = "0";
          arrow.style.left = deltaX > 0 ? "23px" : "-15px";
      } else {
          arrow.innerHTML = deltaY > 0 ? "v" : "^";
          arrow.style.left = "0";
          arrow.style.top = deltaY > 0 ? "20px" : "-15px";
      }

      lastX = e.clientX;
      lastY = e.clientY;
  });

  // Theme Toggle Button
  const themeToggle = document.createElement("button");
  themeToggle.id = "theme-toggle";
  themeToggle.style.position = "fixed";
  themeToggle.style.bottom = "20px";
  themeToggle.style.right = "20px";
  document.body.appendChild(themeToggle);

  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
  } else {
      themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          themeToggle.textContent = "☀️";
      } else {
          localStorage.setItem("theme", "light");
          themeToggle.textContent = "🌙";
      }
  });
});

// Strengths Typewriter Effect
function showStrengths(event) {
  event.preventDefault(); // Prevent default link behavior
  
  const strengthsText = 
      "🌟 I am a strong problem solver, 💻 proficient in JavaScript, Java, and Web Development, " +
      "🔍 highly detail-oriented with a focus on quality assurance, 📝 skilled in technical writing, " +
      "🚀 passionate about learning and adapting to new technologies.";
  
  const strengthsElement = document.getElementById("typedText");
  const strengthsSection = document.getElementById("strengths");

  strengthsSection.classList.remove("hidden"); // Show section
  strengthsElement.innerHTML = ""; // Clear previous text
  
  let index = 0;
  
  function typeText() {
      if (index < strengthsText.length) {
          strengthsElement.innerHTML += strengthsText.charAt(index);
          index++;
          setTimeout(typeText, 50); // Adjust speed (50ms per letter)
      } else {
          strengthsElement.style.borderRight = "none"; // Remove cursor after typing
      }
  }
  
  typeText();
}

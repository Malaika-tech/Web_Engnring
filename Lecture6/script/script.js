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


document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = "none");
            answer.style.display = "block";
        }
    });
});

// Typing Animation
const textElement = document.querySelector(".typing-text");
const strengths = 
      ["🌟 I am a strong problem solver, 💻 proficient in JavaScript, Java, and Web Development, " +
      "🔍 highly detail-oriented with a focus on quality assurance, 📝 skilled in technical writing, " +
      "🚀 passionate about learning and adapting to new technologies."];
let index = 0;
let charIndex = 0;
function type() {
    if (charIndex < strengths[index].length) {
        textElement.innerHTML += strengths[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}
function erase() {
    if (charIndex > 0) {
        textElement.innerHTML = strengths[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % strengths.length;
        setTimeout(type, 500);
    }
}
type();

// FAQs Toggle
const faqs = document.querySelectorAll(".faq-question");
faqs.forEach(q => q.addEventListener("click", function() {
    this.nextElementSibling.style.display =
        this.nextElementSibling.style.display === "block" ? "none" : "block";
}));
document.getElementById("request-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const leaveType = document.getElementById("leave-type").value;
    const message = document.getElementById("message").value;

    // Simple Alert for Form Submission
    alert(`Request Submitted:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Leave Type: ${leaveType}
        Message: ${message || "No additional notes"}`);
});



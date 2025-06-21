document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const response = document.getElementById("response");
  response.textContent = `Thank you, ${name}! We’ll get back to you soon.`;
});

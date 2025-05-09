document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        const padding = 50;
        window.scrollTo({
            top: target.offsetTop-padding,
            behavior: 'smooth'
        });
    });
});

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission if invalid

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const workDetail = document.getElementById("workDetail").value.trim();

    let errors = [];

    if (!fullName) errors.push("Please enter your full name.");
    if (!email) {
      errors.push("Please enter your email address.");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push("Invalid email address format.");
      }
    }
    if (!subject) errors.push("Please enter a subject.");
    if (!workDetail) errors.push("Please enter work details.");

    if (errors.length > 0) {
      alert(errors.join("\n")); // Show all errors
    } else {
      alert("Form is valid. Submitting...");
    }
});

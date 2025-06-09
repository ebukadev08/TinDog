
  async function handleForm(formId, statusId) {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/mgvyayde", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.textContent = "Message sent successfully!";
          status.style.display = "block";
          status.classList.remove("text-danger");
          status.classList.add("text-success");
          form.reset();
        } else {
          throw new Error();
        }
      } catch {
        status.textContent = "Error sending message. Please try again.";
        status.style.display = "block";
        status.classList.remove("text-success");
        status.classList.add("text-danger");
      }
      status.style.display = "block";

      setTimeout(() => {
        status.classList.remove('text-success','text-danger')
        status.style.display = "none";
        status.textContent = "";
      }, 6000);
    });
  }

  handleForm("form1", "status1");
  handleForm("form2", "status2");



  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

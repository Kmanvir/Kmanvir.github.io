function showContactForm() {
    const form = document.getElementById('contact-form');
    form.classList.remove('hidden');
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('Manvir Kaur').value.trim();
    const email = document.getElementById('kmanvir943@gmail.com').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
      alert("Thank you for your message! I will get back to you soon.");
      resetForm();
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  function resetForm() {
    document.getElementById('Manvir Kaur').value = '';
    document.getElementById('kmanvir943@gmail.com').value = '';
    document.getElementById('message').value = '';
  }
  
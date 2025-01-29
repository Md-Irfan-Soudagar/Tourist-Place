// Select elements
const loginFormContainer = document.querySelector('.login-form-container');
const formClose = document.getElementById('form-close');
const logoBtn = document.getElementById('logo-btn');
const navbar = document.querySelector('.navbar');

// Toggle login form visibility
logoBtn.addEventListener('click', () => {
    loginFormContainer.style.display =
        loginFormContainer.style.display === 'block' ? 'none' : 'block';
});

// Close login form
formClose.addEventListener('click', () => {                                         
    loginFormContainer.style.display = 'none';
});

// Toggle navbar for mobile devices
document.addEventListener('click', (e) => {
    if (e.target.closest('.icons') && !e.target.closest('.search-bar-container')) {
        navbar.classList.toggle('show');
    } else if (!e.target.closest('.navbar')) {
        navbar.classList.remove('show');
    }
});

// content
document.querySelector('.explore-button').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;
  
    if (!location || !date || !people) {
      alert('Please fill in all fields!');
      return;
    }
  
    alert(`Searching for trips to ${location} on ${date} for ${people} people.`);
  });
  



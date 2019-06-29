// navbar links

let links = [...document.getElementsByClassName('links')];
const toggle = document.getElementById('toggle');

const toggleBurgerNav = () => {
  toggle.checked = false;
};

//giving each link in navbar a function to toggle menu on and off
links.forEach(link => link.addEventListener('click', toggleBurgerNav));

//event listenter on contact form to post form

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const formMessage = document.getElementById('form-message');
  const formData = document.querySelectorAll('.form-data');

  const obj = {};

  formData.forEach(formElement => {
    obj[formElement.name] = formElement.value;
  });
  fetch(
    'https://script.google.com/macros/s/AKfycbxG4MzUf6Z6X5KxZbA66j0CiARk6ilV8qcsUhqA2HNw7tzJ81-E/exec',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: `<p>Hi Burhan, </p>
      <p>${obj.name} has sent you a message from your portfolio.<p>
      <p>Contact details:</p> 
      <ul>
      <li>Email: ${obj.email}</li>
      <li>Phone: ${obj.phone}</li>  
      </ul>
      <p>Message</p>
      <p>${obj.message}</p>  
      `
    }
  )
    .then(response => {
      console.log(response);
      contactForm.textContent = `Message successfully sent.`;
      contactForm.style.color = 'green';
    })
    .catch(err => {
      console.log('Error: ', err);
      formMessage.textContent = `Failed to send message. Please check your connection`;
      formMessage.style.color = 'red';
      return false;
    });
});

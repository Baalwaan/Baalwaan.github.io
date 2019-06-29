let links = [...document.getElementsByClassName('links')];

const toggle = document.getElementById('toggle');

const toggleBurgerNav = () => {
  toggle.checked = false;
};

links.forEach(link => link.addEventListener('click', toggleBurgerNav));

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const contactForm = document.getElementById('contact-form');
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
      body: JSON.stringify(obj)
    }
  )
    .then(response => response.text())
    .then(response => {
      console.log(response);
      formMessage.textContent = `Message successfully sent.`;
      formMessage.style.color = 'green';
    })
    .catch(err => {
      console.log('Error: ', err);
      formMessage.textContent = `Failed to send message. Please check your connection`;
      formMessage.style.color = 'red';
      return false;
    });
});

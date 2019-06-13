let links = [...document.getElementsByClassName('links')];

const toggle = document.getElementById('toggle');

const toggleBurgerNav = () => {
  toggle.checked = false;
};

links.forEach(link => link.addEventListener('click', toggleBurgerNav));

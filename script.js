
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});


const newsList = document.querySelector('#news ul');
let newsItems = newsList.querySelectorAll('li');
let currentNewsIndex = 0;

function scrollNews() {
  newsList.style.transition = 'transform 0.5s ease-in-out';
  newsList.style.transform = `translateY(-${currentNewsIndex * 20}px)`;

  currentNewsIndex++;
  if (currentNewsIndex === newsItems.length) {
    currentNewsIndex = 0;
    setTimeout(() => {
      newsList.style.transition = 'none';
      newsList.style.transform = 'translateY(0)';
    }, 500);
  }

  setTimeout(scrollNews, 3000);
}

scrollNews();

// JavaScript
const castStaffButton = document.getElementById('cast-staff-button');

castStaffButton.addEventListener('click', function() {
  castStaffButton.classList.toggle('active');
});

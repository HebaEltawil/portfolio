// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  backToTopBtn.classList.add('show');
  document.querySelector('.navbar').classList.add('scrolled');
} else {
  backToTopBtn.classList.remove('show');
  document.querySelector('.navbar').classList.remove('scrolled');
}
}

backToTopBtn.onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
};

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const toggleButtons = document.querySelectorAll('.toggle-desc-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const card = this.closest('.project-card');
    card.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
  });
});

document.addEventListener('click', function() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.remove('active');
    const icon = card.querySelector('.toggle-desc-btn i');
    if (icon) {
      icon.classList.add('bi-eye');
      icon.classList.remove('bi-eye-slash');
    }
  });
});


const cards = document.querySelectorAll('.project-card');

function checkCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkCards);
checkCards();

const skillItems = document.querySelectorAll('.skill-item');

function checkSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skillItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkSkills);
checkSkills();

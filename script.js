document.addEventListener('DOMContentLoaded', () => {
  // Search Toggle
//   function togglesearch() {
//     const search = document.querySelector('.search');
//     search.classList.toggle('active');
// }

  // // Theme Toggle
  // const themeToggle = document.querySelector('.theme-toggle');
  // const body = document.body;

  // if (themeToggle) {
  //   themeToggle.addEventListener('click', () => {
  //     body.classList.toggle('dark-mode');
  //   });
  // }

  // Carousel functionality
  const carousel = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= items.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = items.length - 1;
    } else {
      currentSlide = index;
    }
    if (carousel) {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide--;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide++;
      showSlide(currentSlide);
    });
  }

  // Auto advance slides
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);

  // Product card click handlers
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const product = card.dataset.product;
      window.location.href = `https://krishi-market.example.com/product/${product}`;
    });
  });

  // Scroll down button
  const scrollBtn = document.querySelector('.scroll-down');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      const productsGrid = document.querySelector('.products-grid');
      if (productsGrid) {
        window.scrollTo({
          top: productsGrid.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  // Product icon hover animations
  document.querySelectorAll('.product-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Search Toggle
  function togglesearch() {
    const search = document.querySelector('.search');
    if (search) {
      search.classList.toggle('active');
    }
  }

  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  }

  // Carousel functionality
  const carousel = document.querySelector('.slider');
  const items = document.querySelectorAll('.code');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= items.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = items.length - 1;
    } else {
      currentSlide = index;
    }
    if (carousel) {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide--;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide++;
      showSlide(currentSlide);
    });
  }

  // Auto advance slides
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);

  // Product card click handlers
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const product = card.dataset.product;
      window.location.href = `https://krishi-market.example.com/product/${product}`;
    });
  });

  // Scroll down button
  const scrollBtn = document.querySelector('.scroll-down');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      const productsGrid = document.querySelector('.products-grid');
      if (productsGrid) {
        window.scrollTo({
          top: productsGrid.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  // Product icon hover animations
  document.querySelectorAll('.card').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
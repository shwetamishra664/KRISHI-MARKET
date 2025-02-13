
      document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.product-container1');
        const cards = document.querySelectorAll('.product-card1');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        const scrollAmount = 320;
  
        nextBtn.addEventListener('click', () => {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          animateCards('next');
        });
  
        prevBtn.addEventListener('click', () => {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          animateCards('prev');
        });
  
        function animateCards(direction) {
          cards.forEach((card, index) => {
            card.classList.add('flip');
            setTimeout(() => {
              card.classList.remove('flip');
            }, 1000);
          });
        }
  
        let autoScrollInterval = setInterval(() => {
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            animateCards('next');
          }
        }, 3000);
  
        container.addEventListener('mouseenter', () => {
          clearInterval(autoScrollInterval);
        });
  
        container.addEventListener('mouseleave', () => {
          autoScrollInterval = setInterval(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
              container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              animateCards('next');
            }
          }, 3000);
        });
  
        cards.forEach(card => {
          card.addEventListener('mouseover', function() {
            this.style.transform = `translateY(-10px) rotateY(10deg) scale(1.05)`;
          });
  
          card.addEventListener('mouseout', function() {
            this.style.transform = 'none';
          });
        });
      });
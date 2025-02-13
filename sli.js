document.addEventListener('DOMContentLoaded'), () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length-3;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = -1; // Track the current slide index
  
    // Function to show the slide based on the index
    function showSlide(index) {
      if (index > totalSlides) {
        currentIndex = 0; // Loop to the first slide
      } else if (index < 0) {
        currentIndex = totalSlides - 1; // Loop to the last slide
      } else {
        currentIndex = index;
      }
      if (slider) {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the slider container
    }
}
  
    // Event listener for the "Next" button
    if (prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      showSlide(currentIndex);
    });
  
    // Event listener for the "Prev" button
    prevBtn.addEventListener('click', () => {
      currentIndex--;
      showSlide(currentIndex);
    });
}
    // Auto advance slides every 5 seconds
    setInterval(() => {
      currentIndex++;
      showSlide(currentIndex);
    }, 1000); 

 

  };document.querySelector('.add-to-cart').addEventListener('click', () => {
    alert('Item added to cart!');
    // You can extend this to update a cart system
  });
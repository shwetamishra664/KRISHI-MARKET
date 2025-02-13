document.addEventListener('DOMContentLoaded', () => {
    const slider1 = document.querySelector('.slider1');
    const slides1 = document.querySelectorAll('.card1');
    const totalSlides1 = slides1.length-3;
    const prevBtn1 = document.querySelector('.prev');
    const nextBtn1 = document.querySelector('.next');
    let currentIndex1 = -1; // Track the current slide index
  
    // Function to show the slide based on the index
    function showSlide(index) {
      if (index > totalSlides1) {
        currentIndex1 = 0; // Loop to the first slide
      } else if (index < 0) {
        currentIndex1 = totalSlides1 - 1; // Loop to the last slide
      } else {
        currentIndex1 = index;
      }
      if (slider1) {
      slider1.style.transform = `translateX(-${currentIndex1 * 100}%)`; // Move the slider container
    }
}
  
    // Event listener for the "Next" button
    if (prevBtn1 && nextBtn1) {
    nextBtn1.addEventListener('click', () => {
      currentIndex1++;
      showSlide(currentIndex1);
    });
  
    // Event listener for the "Prev" button
    prevBtn1.addEventListener('click', () => {
      currentIndex1--;
      showSlide(currentIndex1);
    });
}
    // Auto advance slides every 5 seconds
    setInterval(() => {
      currentIndex1++;
      showSlide(currentIndex1);
    }, 1000); // Change slides every 5 seconds
  });
 


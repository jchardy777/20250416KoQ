<!-- JavaScript -->
        let currentIndex = 0;
        const bannerItems = document.querySelectorAll('.banner-item');
        const totalItems = bannerItems.length;

        function rotateBanner() {
            for (let i = 0; i < totalItems; i++) {
                bannerItems[i].style.display = 'none';
            }
            currentIndex = (currentIndex + 1) % totalItems;
            bannerItems[currentIndex].style.display = 'block';
        }

        setInterval(rotateBanner, 3000);
        rotateBanner();

        let currentTestimonial = 0;
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const totalTestimonials = testimonialItems.length;

        function rotateTestimonials() {
            for (let i = 0; i < totalTestimonials; i++) {
                testimonialItems[i].style.display = 'none';
            }
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            testimonialItems[currentTestimonial].style.display = 'block';
        }

        setInterval(rotateTestimonials, 4000);
        rotateTestimonials();
      
      
        const slider = document.querySelector('.product-slider');
        const nextBtn = document.querySelector('.slider-btn.next');
        const prevBtn = document.querySelector('.slider-btn.prev');

        nextBtn.addEventListener('click', () => {
          slider.scrollBy({ left: 200, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
          slider.scrollBy({ left: -200, behavior: 'smooth' });
        });
        
      const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  rightArrow.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  leftArrow.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
      
      document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    let currentIndex = 0;
    let autoplay;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    function startAutoplay() {
      autoplay = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplay);
    }

    // Controls
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });

    // Pause on hover
    const carousel = document.querySelector(".testimonials-carousel");
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    // Init
    showSlide(currentIndex);
    startAutoplay();
  });
      
      document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".quiz-slide");
    const prevBtn = document.querySelector(".quiz-prev");
    const nextBtn = document.querySelector(".quiz-next");
    const carousel = document.querySelector(".quiz-carousel-wrapper");
    let currentIndex = 0;
    let autoplay;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    function startAutoplay() {
      autoplay = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplay);
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });

    // Pause on hover
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 30) {
        nextSlide();
      } else if (touchEndX > touchStartX + 30) {
        prevSlide();
      }
    });

    showSlide(currentIndex);
    startAutoplay();
  });
    </script>
  <script>
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close menu when any link inside it is clicked (on mobile)
    const navLinks = navMenu.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('show');
            }
        });
    });

// Get elements
const hamburger = document.querySelector('.hamburger');
const rightSideMenu = document.querySelector('.right-side');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
  rightSideMenu.classList.toggle('show');
});

</script>
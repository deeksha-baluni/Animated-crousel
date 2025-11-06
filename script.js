

        const slider = document.querySelector('.slider');
        const leftButton = document.querySelector('.left-slider');
        const rightButton = document.querySelector('.right-slider');
        const slides = document.querySelectorAll('.slider-item');
        const slideCount = slides.length;

        let currentSlide = 0;
        // console.log(slideCount);

        function updateActiveSlide(){
            slides.forEach(slide =>{
                slide.classList.remove('active-slide');
            })

            slides[currentSlide].classList.add('active-slide');
        }



        rightButton.addEventListener('click' , ()=>{
            currentSlide++;

            if(currentSlide >= slideCount){
                currentSlide = 0;
            }

            // console.log(currentSlide);

            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
             updateActiveSlide();
        });
        
        leftButton.addEventListener('click' , ()=>{
            currentSlide--;

            if(currentSlide < 0){
                currentSlide = slideCount-1;
            }
            // console.log(currentSlide);
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
             updateActiveSlide();
        });

        updateActiveSlide();


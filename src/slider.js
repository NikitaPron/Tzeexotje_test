document.addEventListener('DOMContentLoaded', () => {
    const btnPrev = document.querySelector('.slider__arrow-left');
    const btnNext = document.querySelector('.slider__arrow-right');
    const contents = document.querySelectorAll('.slider__content');
    let currIndex = 0;

    contents.forEach(slide => hideSlide(slide))
    showSlide(contents[0]);


    btnPrev.addEventListener('click', () => {
        hideSlide(contents[currIndex]);
        currIndex--;
        if(currIndex < 0) currIndex = contents.length-1;
        showSlide(contents[currIndex]);
    })
    
    btnNext.addEventListener('click', () => {
        hideSlide(contents[currIndex]);
        currIndex++;
        if(currIndex === contents.length) currIndex = 0;
        showSlide(contents[currIndex]);
    })
})

function showSlide(slide) {
    slide.style.visibility = 'visible';
    slide.style.opacity = '100';
}

function hideSlide(slide) {
    slide.style.visibility = 'hidden';
    slide.style.opacity = '0';
}

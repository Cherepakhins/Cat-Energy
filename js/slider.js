const slider = () => {
    const indicator = document.getElementById("indicator");
    const sliderState = document.getElementById("sliderState");
    const sliderBtnPrev = document.getElementById("sliderBtnPrev");
    const sliderBtnNext = document.getElementById("sliderBtnNext");
    const framesBefore = document.getElementById("framesBefore");
    const framesAfter = document.getElementById("framesAfter");

    sliderBtnPrev.addEventListener('click', () => {
        framesBefore.classList.remove('none');
        framesAfter.classList.add('none');
        sliderState.classList.remove('slider__state--active');
    })

    sliderBtnNext.addEventListener('click', () => {
        framesBefore.classList.add('none');
        framesAfter.classList.remove('none');
        sliderState.classList.add('slider__state--active');
    })

    sliderState.addEventListener('click', () => {
        framesBefore.classList.toggle('none');
        framesAfter.classList.toggle('none');
        sliderState.classList.toggle('slider__state--active');
    })
}

slider()
const slider = document.getElementById('sliderContainer');
const track = document.getElementById('sliderTrack');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;

// Event Listeners
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);

slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('touchend', dragEnd);
slider.addEventListener('mouseleave', dragEnd);

slider.addEventListener('mousemove', dragAction);
slider.addEventListener('touchmove', dragAction);

function dragStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    track.style.transition = 'none'; // Disable transition for smooth dragging
}

function dragAction(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    // Determine if we should move to next/prev slide
    if (movedBy < -100 && currentIndex < 2) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -slider.offsetWidth;
    prevTranslate = currentTranslate;
    track.style.transition = 'transform 0.4s ease-out';
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// Ensure responsiveness on window resize
window.onresize = setPositionByIndex;
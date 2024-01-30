      if( screen.width > 786 ){
     const slider = document.querySelectorAll('.SwipeUp-slider');
      let isDown = false;
      let startX;
      let scrollLeft;
      for(let i = 0; i < document.querySelectorAll('.SwipeUp-slider').length; i++){
      slider[i].addEventListener('mousedown', (e) => {
        isDown = true;
        slider[i].classList.add('active');
        startX = e.pageX - slider[i].offsetLeft;
        scrollLeft = slider[i].scrollLeft;
      });
      slider[i].addEventListener('mouseleave', () => {
        isDown = false;
        slider[i].classList.remove('active');
      });
      slider[i].addEventListener('mouseup', () => {
        isDown = false;
        slider[i].classList.remove('active');
      });
      slider[i].addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider[i].offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider[i].scrollLeft = scrollLeft - walk;
      
      });
  }
}
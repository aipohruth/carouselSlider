//creating variables 

let slidesPosition = 0;

let slides = document.getElementsByClassName('carousel_item');

let sLen = slides.length;

var pButton = document.getElementById('caurousel-button-prev');
var nButton = document.getElementById('caurousel-button-next');



//function to update slide images

function updateSlidesPosition(){
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidesPosition].classList.add('carousel_item--visible');
}

//creating dom 
nButton.addEventListener('click', ()=>{
  if(slidesPosition === sLen - 1){
      slidesPosition = 0;
  }
  else{
      slidesPosition ++;
  }
  updateSlidesPosition();
})

pButton.addEventListener('click', ()=>{
    if(slidesPosition === 0){
        slidesPosition = sLen - 1;
    }
    else{
        slidesPosition --;
    } 
    updateSlidesPosition();
});




































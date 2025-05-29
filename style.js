let Images = Array.from(document.querySelectorAll('.slide-container img'));
let NumImg = Images.length;
let CurrentImg = 1;
let SlideNumber = document.getElementById('num');
let Previous = document.getElementById('prev');
let Next = document.getElementById('next');

Previous.onclick = PrevSlide;
Next.onclick = NextSlide;


let PageElement = document.createElement('ul');
 
PageElement.setAttribute('id','page-ul');

for (let i = 1; i <= NumImg; i++){
    let PageItem = document.createElement('li');
    PageItem.setAttribute('data-index', i);
    PageItem.appendChild(document.createTextNode(i));
    PageElement.appendChild(PageItem);
}

document.getElementById('page').appendChild(PageElement);

let PageUl = document.getElementById('page-ul');

let PageArray = Array.from(document.querySelectorAll('#page-ul li'));

for (let i = 0; i < PageArray.length; i++) {
    PageArray[i].onclick = function () {
        CurrentImg = parseInt(this.getAttribute('data-index'));
        Checker();
    }
    
}


Checker();

setInterval(Slides , 3000);
function Slides() {
      if (CurrentImg == NumImg) {
        CurrentImg = 1;
      } else {
        CurrentImg++;
      }
      Checker();
}



function PrevSlide() {
    if (Previous.classList.contains('disabled')) {
        return false;
    } else {
    CurrentImg--;
    Checker();
    }
}

function NextSlide() {
    if (Next.classList.contains('disabled')) {
        return false;
    } else {
    CurrentImg++;
    Checker();
    }
}



function Checker() {
      SlideNumber.textContent = CurrentImg + ' of ' + NumImg;

      RemoveActive(); 

      Images[CurrentImg - 1].classList.add('active'); 
      PageUl.children[CurrentImg - 1].classList.add('active');  

      if (CurrentImg == 1) {
          Previous.classList.add('disabled');
      } else {
        Previous.classList.remove('disabled');
      }
      if (CurrentImg == NumImg) {
        Next.classList.add('disabled');
    } else {
      Next.classList.remove('disabled');
    }
}


function RemoveActive() {
    Images.forEach( function (img) {
        img.classList.remove('active');
    })
    PageArray.forEach( function (page) {
        page.classList.remove('active');
    })
}









let ImgSlide = document.querySelectorAll('.img-slide');
let SlideCounter = document.getElementById('counter');
let Counter = 0;
for (let a = 0; a < ImgSlide.length; a++) {
    let SpanSlide = document.createElement('span');
    SpanSlide.setAttribute('data', a);
    SlideCounter.appendChild(SpanSlide);
}
let Spans = document.querySelectorAll('.counter span');


for (let b = 0; b < Spans.length; b++) {
    Spans[b].onclick = function () {
        Counter = parseInt(this.getAttribute('data'));
        Checker2();
        ChangeImg();
        clearInterval(Interval);
    }
    
}

Checker2();



function Checker2() {
    SpanRemove();
    Spans[Counter].classList.add('active');
    
}







function SpanRemove() {
    Spans.forEach( (span)=>{
        span.classList.remove('active');

    });
}











ImgSlide.forEach(function (slide , index) {
    slide.style.left = `${index * 100}%`;
})



 let Interval = setInterval( Change , 5000);




function Change() {
    
    if (Counter  == ImgSlide.length - 1) {
        Counter = 0;
    } else {
        Counter++;
    }
    Checker2();
    ChangeImg();
    
}





function ChangeImg() {
    ImgSlide.forEach( (slide) => {
        slide.style.transform = `translateX(-${Counter * 100}%)`;
       });
    
}





let wrapperContainer = document.querySelector('.wrapper-container');
let wrapper = document.querySelector('.wrapper');
let register = document.querySelector('.register-link');
let login = document.querySelector('.login-link');
let user = document.querySelector('.user');
let closeWrapper = document.querySelector('.close-wrapper');
register.onclick = ()=>{
    wrapper.classList.add('active');
}
login.onclick = ()=>{
    wrapper.classList.remove('active');
}
user.onclick = ()=>{
    wrapperContainer.classList.add('log-reg');
    wrapper.classList.add('log-reg');
    document.body.style.overflow = 'hidden';
}
closeWrapper.onclick = ()=>{
    wrapperContainer.classList.remove('log-reg');
    wrapper.classList.remove('log-reg');
    document.body.style.overflow = 'visible';
}
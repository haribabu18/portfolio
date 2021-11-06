
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var containerHome = document.getElementById("container-home");
var homeText = document.getElementById("home-text");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    containerHome.classList.add("increase-height")
    homeText.classList.add("decrease-height")
  } 
  if (window.pageYOffset < sticky) {
    navbar.classList.remove("sticky");
  }
}

















const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


  $('.blast').hover(function() {
    animateCSS('.blast','rubberBand');
 });

 $('.blast1').hover(function() {
    animateCSS('.blast1','rubberBand');
 });

 $('.blast2').hover(function() {
    animateCSS('.blast2','rubberBand');
 });

 $('.blast3').hover(function() {
    animateCSS('.blast3','rubberBand');
 });

 $('.blast4').hover(function() {
    animateCSS('.blast4','rubberBand');
 });

 $('.blast5').hover(function() {
    animateCSS('.blast5','rubberBand');
 });

 $('.blast6').hover(function() {
    animateCSS('.blast6','rubberBand');
 });

 $('.blast7').hover(function() {
    animateCSS('.blast7','rubberBand');
 });

 $('.blast8').hover(function() {
    animateCSS('.blast8','rubberBand');
 });

 $('.blast9').hover(function() {
    animateCSS('.blast9','rubberBand');
 });

 $('.blast10').hover(function() {
    animateCSS('.blast10','rubberBand');
 });

 $('.blast11').hover(function() {
    animateCSS('.blast11','rubberBand');
 });

 $('.blast12').hover(function() {
    animateCSS('.blast12','rubberBand');
 });

 $('.blast13').hover(function() {
    animateCSS('.blast13','rubberBand');
 });

 $('.blast14').hover(function() {
   animateCSS('.blast14','rubberBand');
});

$('.blast15').hover(function() {
   animateCSS('.blast15','rubberBand');
});

$('.blast16').hover(function() {
   animateCSS('.blast16','rubberBand');
});

$('.blast17').hover(function() {
   animateCSS('.blast17','rubberBand');
});

$('.blast18').hover(function() {
   animateCSS('.blast18','rubberBand');
});

$('.blast19').hover(function() {
   animateCSS('.blast19','rubberBand');
});

$('.blast20').hover(function() {
   animateCSS('.blast20','rubberBand');
});

$('.blast21').hover(function() {
   animateCSS('.blast21','rubberBand');
});

$('.blast22').hover(function() {
   animateCSS('.blast22','rubberBand');
});

$('.blast23').hover(function() {
   animateCSS('.blast23','rubberBand');
});

$('.blast24').hover(function() {
  animateCSS('.blast24','rubberBand');
});

$('.blast25').hover(function() {
   animateCSS('.blast25','rubberBand');
});

$('.blast26').hover(function() {
   animateCSS('.blast26','rubberBand');
});

$('.blast27').hover(function() {
   animateCSS('.blast27','rubberBand');
});

$('.blast28').hover(function() {
   animateCSS('.blast28','rubberBand');
});

$('.blast29').hover(function() {
   animateCSS('.blast29','rubberBand');
});

$('.blast30').hover(function() {
   animateCSS('.blast30','rubberBand');
});

$('.blast31').hover(function() {
   animateCSS('.blast31','rubberBand');
});





















//myself
$('.myself-blast').hover(function() {
   animateCSS('.myself-blast','rubberBand');
});

$('.myself-blast1').hover(function() {
   animateCSS('.myself-blast1','rubberBand');
});

$('.myself-blast2').hover(function() {
   animateCSS('.myself-blast2','rubberBand');
});

$('.myself-blast3').hover(function() {
   animateCSS('.myself-blast3','rubberBand');
});

$('.myself-blast4').hover(function() {
   animateCSS('.myself-blast4','rubberBand');
});

$('.myself-blast5').hover(function() {
   animateCSS('.myself-blast5','rubberBand');
});

$('.myself-blast6').hover(function() {
   animateCSS('.myself-blast6','rubberBand');
});

$('.myself-blast7').hover(function() {
   animateCSS('.myself-blast7','rubberBand');
});

$('.myself-blast8').hover(function() {
   animateCSS('.myself-blast8','rubberBand');
});




//skills

$('.skills-blast').hover(function() {
   animateCSS('.skills-blast','rubberBand');
});

$('.skills-blast1').hover(function() {
   animateCSS('.skills-blast1','rubberBand');
});

$('.skills-blast2').hover(function() {
   animateCSS('.skills-blast2','rubberBand');
});

$('.skills-blast3').hover(function() {
   animateCSS('.skills-blast3','rubberBand');
});

$('.skills-blast4').hover(function() {
   animateCSS('.skills-blast4','rubberBand');
});

$('.skills-blast5').hover(function() {
   animateCSS('.skills-blast5','rubberBand');
});

$('.skills-blast6').hover(function() {
   animateCSS('.skills-blast6','rubberBand');
});

$('.skills-blast7').hover(function() {
   animateCSS('.skills-blast7','rubberBand');
});

$('.skills-blast8').hover(function() {
   animateCSS('.skills-blast8','rubberBand');
});





//myself
$('.mywork-blast').hover(function() {
   animateCSS('.mywork-blast','rubberBand');
});

$('.mywork-blast1').hover(function() {
   animateCSS('.mywork-blast1','rubberBand');
});

$('.mywork-blast2').hover(function() {
   animateCSS('.mywork-blast2','rubberBand');
});

$('.mywork-blast3').hover(function() {
   animateCSS('.mywork-blast3','rubberBand');
});

$('.mywork-blast4').hover(function() {
   animateCSS('.mywork-blast4','rubberBand');
});

$('.mywork-blast5').hover(function() {
   animateCSS('.mywork-blast5','rubberBand');
});

$('.mywork-blast6').hover(function() {
   animateCSS('.mywork-blast6','rubberBand');
});

$('.mywork-blast7').hover(function() {
   animateCSS('.mywork-blast7','rubberBand');
});

$('.myself-blast8').hover(function() {
   animateCSS('.mywork-blast8','rubberBand');
});

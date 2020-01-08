// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.burger-canvas',
  dragRotate: true,
  rotate: { x: 5.9, y: 0.85 }
});

// bottom bun
const bottomBun = new Zdog.Cylinder({
  addTo: illo,
  diameter: 70,
  stroke: 25,
  fill: true,
  color: '#F2D38D',
  translate: { y: 23 },
  rotate: { x: Zdog.TAU/4 }
});

// lettuce
const lettuce = new Zdog.Ellipse({
  addTo: illo,
  height: 60,
  width: 100,
  stroke: 5,
  fill: true,
  color: '#3F9C1F',
    translate: { y: 7 },
    rotate: { x: Zdog.TAU/4 }

});

// patty
const patty = new Zdog.Ellipse({
  addTo: illo,
  diameter: 90,
  stroke: 12,
  fill: true,
  color: '#592002',
      translate: { y: -2 },
          rotate: { x: Zdog.TAU/4 }
});

// cheese
const cheese = new Zdog.Rect({
  addTo: illo,
  width: 85,
  height: 85,
  stroke: 5,
  color: '#F2B705',
  fill: true,
  translate: { y: -11 },
            rotate: { x: Zdog.TAU/4 }
});

// top bun
const topBun = new Zdog.Hemisphere({
  addTo: illo,
  diameter: 90,
  stroke: false,
  color: '#F2D38D',
  backface: '#f8e9c6',

      translate: { y: -14 },
      rotate: { x: Zdog.TAU/4 }
});


// // update & render
// illo.updateRenderGraph();




  const animationObject = {
  topBunTranslateY: -14,
  cheeseTranslateY: -11,
  pattyTranslateY: -2,
  lettuceTranslateY: 7,
  bottomBunTranslateY: 23
}

// GSAP animation

// on hover
const burgerCanvas = document.querySelector('.burger-canvas');

burgerCanvas.addEventListener("mouseenter", function() {
  const tl = gsap.timeline({onUpdate: render});
  tl
    .to(animationObject, 1, {
      topBunTranslateY: -74,
      cheeseTranslateY: -41,
      pattyTranslateY: -2,
      lettuceTranslateY: 37,
      bottomBunTranslateY: 83,
      ease: "power4.out",
    })
});

// on mouse out
burgerCanvas.addEventListener("mouseout", function() {
  const tl = gsap.timeline({onUpdate: render});
  tl
    .to(animationObject, 1, {
      topBunTranslateY: -14,
      cheeseTranslateY: -11,
      pattyTranslateY: -2,
      lettuceTranslateY: 7,
      bottomBunTranslateY: 23,
      ease: "power4.out",
    })
});


const rotateBurgerObject = {
  illoRotateY: 0.85
}
function rotateBurger() {



const rotateTl = gsap.timeline({onUpdate: render, repeat: -1});

rotateTl
.fromTo(rotateBurgerObject, 4, {
  illoRotateY: 0.85
}, {
  illoRotateY: 7.13318531,
  ease: "none"
});

}
rotateBurger();



// Render the illustration
function render() {
  topBun.translate.y = animationObject.topBunTranslateY;
  cheese.translate.y = animationObject.cheeseTranslateY;
  patty.translate.y = animationObject.pattyTranslateY;
  lettuce.translate.y = animationObject.lettuceTranslateY;
  bottomBun.translate.y = animationObject.bottomBunTranslateY;
  illo.rotate.y = rotateBurgerObject.illoRotateY;

  illo.updateRenderGraph();
}
render();

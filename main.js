// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.food-canvas',
  rotate: { x: 5.9, y: 0.85 }
});

// burger group
const burgerGroup = new Zdog.Group({
  addTo: illo,
  translate: { y: 4 }
});

// bottom bun
const bottomBun = new Zdog.Cylinder({
  addTo: burgerGroup,
  diameter: 70,
  stroke: 25,
  fill: true,
  color: '#F2D38D',
  rotate: { x: Zdog.TAU/4 }
});

// lettuce
const lettuce = new Zdog.Ellipse({
  addTo: burgerGroup,
  height: 60,
  width: 100,
  stroke: 5,
  fill: true,
  color: '#3F9C1F',
  translate: { y: -16 },
  rotate: { x: Zdog.TAU/4 }
});

// patty
const patty = new Zdog.Ellipse({
  addTo: burgerGroup,
  diameter: 90,
  stroke: 12,
  fill: true,
  color: '#592002',
  translate: { y: -25 },
  rotate: { x: Zdog.TAU/4 }
});

// cheese
const cheese = new Zdog.Rect({
  addTo: burgerGroup,
  width: 85,
  height: 85,
  stroke: 5,
  color: '#F2B705',
  fill: true,
  translate: { y: -34 },
  rotate: { x: Zdog.TAU/4 }
});

// top bun
const topBun = new Zdog.Hemisphere({
  addTo: burgerGroup,
  diameter: 90,
  stroke: false,
  color: '#F2D38D',
  backface: '#f8e9c6',
  translate: { y: -37 },
  rotate: { x: Zdog.TAU/4 }
});


// // update & render
const animationObject = {
  topBunTranslateY: -14,
  cheeseTranslateY: -11,
  pattyTranslateY: -2,
  lettuceTranslateY: 7,
  bottomBunTranslateY: 23
}

// GSAP animation

// on hover
const foodCanvas = document.querySelector('.food-canvas');

foodCanvas.addEventListener("mouseenter", function() {
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
foodCanvas.addEventListener("mouseout", function() {
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


const rotateGroupObject = {
  groupRotateY: 0.85
}

function rotateGroup() {
const rotateTl = gsap.timeline({onUpdate: render, repeat: -1});

rotateTl
.fromTo(rotateGroupObject, 4, {
  groupRotateY: 0.85
}, {
  groupRotateY: 7.13318531,
  ease: "none"
});
}
rotateGroup();

// Render the illustration
function render() {
  topBun.translate.y = animationObject.topBunTranslateY;
  cheese.translate.y = animationObject.cheeseTranslateY;
  patty.translate.y = animationObject.pattyTranslateY;
  lettuce.translate.y = animationObject.lettuceTranslateY;
  bottomBun.translate.y = animationObject.bottomBunTranslateY;
  burgerGroup.rotate.y = rotateGroupObject.groupRotateY;
  // friesGroup.rotate.y = rotateGroupObject.groupRotateY;

  illo.updateRenderGraph();
}
render();

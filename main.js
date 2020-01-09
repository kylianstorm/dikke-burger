// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.food-canvas',

  translate: { x: 0 }
});

// burger group
const burgerGroup = new Zdog.Group({
  addTo: illo,
  translate: { y: 4 },
    rotate: { x: 5.9, y: 0.85 },
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


// fries container
const friesContainer = new Zdog.Box({
  addTo: illo,
  width: 60,
    height: 50,
    depth: 20,
   color: '#F20707',
    stroke: 5,
    rotate: { x: 5.9, y: 0.85 },
    translate: { x: 250, y: 20 }
});

// anchor for fries
let friesAnchor = new Zdog.Anchor({
  addTo: friesContainer,
  translate: { y: -50 }
});

// fry A
const fryAX = -28;
const fryAY = 8;
const fryAZ = -8;
const fryAHeight = 34;
const fryA = new Zdog.Box({
  addTo: friesAnchor,
  width: 3,
    height: fryAHeight,
    depth: 3,
    stroke: false,
    color: '#F2E205',
    fill: true,
    stroke: 2,
    translate: { x: fryAX, y: fryAY, z: fryAZ },
});

// fry B
const fryBX = -28;
const fryBY = 4;
const fryBZ = 0;
const fryBHeight = 42;
const fryB = new Zdog.Box({
  addTo: friesAnchor,
  width: 3,
    height: fryBHeight,
    depth: 3,
    stroke: false,
    color: '#F2E205',
    fill: true,
    stroke: 2,
    translate: { x: fryBX, y: fryBY, z: fryBZ },
});

// fry C
const fryCX = -28;
const fryCY = 0;
const fryCZ = 8;
const fryCHeight = 50;
const fryC = new Zdog.Box({
  addTo: friesAnchor,
  width: 3,
    height: fryCHeight,
    depth: 3,
    stroke: false,
    color: '#F2E205',
    fill: true,
    stroke: 2,
    translate: { x: fryCX, y: fryCY, z: fryCZ },
});

// copy fry horizontal line
function copyFries(fryRow, fryX, fryY, fryZ, fryHeight) {
  const frySpacing = 8;
  const amountOfFries = 8;

  for (i = 0; i < amountOfFries - 1; i++){
fryX = fryX + frySpacing;

let heightDifference = Math.floor(Math.random() * 7) - 4;
let newHeight = fryHeight + heightDifference;


      fryRow.copy({
    translate: { x: fryX, y: fryY - (heightDifference / 2), z:  fryZ },
    height: newHeight,
  });

}
}

copyFries(fryA, fryAX, fryAY, fryAZ, fryAHeight);
copyFries(fryB, fryBX, fryBY, fryBZ, fryBHeight);
copyFries(fryC, fryCX, fryCY, fryCZ, fryCHeight);


// GSAP animations
const slideObject = {
  illoTranslateX: 0,
}

// show fries
function showFries() {
  const tl = gsap.timeline({onUpdate: render});
  tl
  .to(slideObject, 1, {
    illoTranslateX: -250,
    ease: "circ.out",
  });
}

// declare properties to be animated
const animationObject = {
  topBunTranslateY: -14,
  cheeseTranslateY: -11,
  pattyTranslateY: -2,
  lettuceTranslateY: 7,
  bottomBunTranslateY: 23
}

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

// rotate several items
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
  friesContainer.rotate.y = rotateGroupObject.groupRotateY;
  illo.translate.x = slideObject.illoTranslateX;

  illo.updateRenderGraph();
}
render();

// start slingin' some d3 here.

var width = 960,
  height = 500;

// box container for the game
var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g");

var asteroidW = 300;
var asteroidH = 300;

var moveAsteroids = function() {


};

setInterval(moveAsteroids);

// DATA JOIN
// Join new data with old elements, if any.
//var text = svg.selectAll("text")
//  .data(data, function(d) { return d; });

// set up array of random start x and y for the asteroids
// that is the asteroid data array
// one object in the data array per asteroid

// use function moveasteroids to
// select the asteroids
// randomly change x and y
// have transition to move them without jumpiness

// setinterval in the moveasteroids function
var playerData = {cx: 40, cy: 70};
var asteroidNumber = 6;


var makeAsteroidLocations = function(n){
  var arr = [playerData];
  for(var i = 0; i < n; i++) {
    arr.push({
      cx: Math.random() * width,
      cy: Math.random() * height
    });
  }
  return arr;
};

// var asteroidLocations = makeAsteroidLocations(3);
// var updateAsteroidLocations = makeAsteroidLocations(3);

var test = [{cx: 40, cy: 70},{cx: 40, cy: 70},{cx: 40, cy: 70}];

function dragmove(d) {
    d3.select(this)
      .attr("cx", ((d3.event.sourceEvent.pageY) - this.offsetHeight/2)+"px")
      .attr("cy", ((d3.event.sourceEvent.pageX) - this.offsetWidth/2)+"px");
}

var drag = d3.behavior.drag()
    .on("drag", dragmove);

//var drag = d3.behavior.drag(drag);
// [{cx: 40, cy: 70}]
var player = d3.select('g')
  .selectAll('svg') // tells d3 what we'll be working with
  .data([playerData])// data attached to svgs (array of whatever)
  .enter()
  .append('svg')
  .append("circle")
  .attr("r", 30)
  .attr("cx",  function(d) {
    return d.cx;
  })
//  debugger
  .attr("cy",  function(d) {
    return d.cy;
  })
  .attr("fill", "blue")
  .call(drag);

// creates a new drag behavior
//player.call(drag);


// this g is the inner wrapper of the gameplay box
var asteroids = d3.select('g')
  .selectAll('svg') // tells d3 what we'll be working with
  .data(makeAsteroidLocations(asteroidNumber)) // data attached to svgs (array of whatever)
  .enter()
  .append('svg')
  .append("circle")
  .attr("r", 20)
  .attr("cx", function(d) {
    return d.cx;
  })
  .attr("cy", function(d) {
    return d.cy;
  })
  .attr("fill", "red");


var quickness = 3000;

function move(){
var movedAsteroids = d3.select('g')
  .selectAll('circle')
  .data(makeAsteroidLocations(asteroidNumber))
//  .data(makeAsteroidLocations)
  .transition().duration(quickness)
  .attr("cx", function(d) {
    return d.cx;
  })
  .attr("cy", function(d) {
    return d.cy;
  });
}
move();
setInterval(move, quickness);

var img = svg.append("svg:image")
  .attr("xlink:href", "asteroid.png");

//     svg
//     g, g, g, g, g

// var Dancer = function(top, left, timeBetweenSteps) {
//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');

//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;

//   var dancer = new dancerMakerFunction(
//     $("body").height() * Math.random(),
//     $("body").width() * Math.random(),
//     500 + Math.random() * 500
//   );


// var circle = svg.selectAll("circle")
//     .data(d3.range(1000).map(function() {
//       return {
//         x: w * Math.random(),
//         y: h * Math.random(),
//         dx: Math.random() - .5,
//         dy: Math.random() - .5
//       };
//     }))
//       .enter().append("svg:circle")
//     .attr("r", 2.5);


// SVG (box)
// g (wrapper insdie the box)
// svg svg svg

// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// var width = 960,
//     height = 500;

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(32," + (height / 2) + ")");

// function update(data) {

//   // DATA JOIN
//   // Join new data with old elements, if any.
//   var text = svg.selectAll("text")
//       .data(data);

//   // UPDATE
//   // Update old elements as needed.
//   text.attr("class", "update");

//   // ENTER
//   // Create new elements as needed.
//   text.enter().append("text")
//       .attr("class", "enter")
//       .attr("x", function(d, i) { return i * 32; })
//       .attr("dy", ".35em");

//   // ENTER + UPDATE
//   // Appending to the enter selection expands the update selection to include
//   // entering elements; so, operations on the update selection after appending to
//   // the enter selection will apply to both entering and updating nodes.
//   text.text(function(d) { return d; });

//   // EXIT
//   // Remove old elements as needed.
//   text.exit().remove();
// }

// // The initial display.
// update(alphabet);

// // Grab a random sample of letters from the alphabet, in alphabetical order.
// setInterval(function() {
//   update(d3.shuffle(alphabet)
//     .slice(0, Math.floor(Math.random() * 26))
//     .sort());
// }, 1500);
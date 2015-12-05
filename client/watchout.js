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

// this g is the inner wrapper of the gameplay box
var asteroids = d3.select('g')
  .selectAll('svg') // tells d3 what we'll be working with
  .data([d3.range(1000).map(function() {
      return {
        x: asteroidW * Math.random(),
        y: asteroidH * Math.random(),
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
      };
    })]) // data attached to svgs (array of whatever)
  .enter()
  .append('svg')
  .attr("width", 200)
  .attr("height", 200)
  .append("circle")
  .attr("cx", 30)
  .attr("cy", 30)
  .attr("r", 20)
  .attr("fill", "red");


var img = svg.append("svg:image")
  .attr("xlink:href", "asteroid.png");

//     svg
//     g, g, g, g, g


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
//       .slice(0, Math.floor(Math.random() * 26))
//       .sort());
// }, 1500);
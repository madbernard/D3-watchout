// start slingin' some d3 here.

var width = 960,
  height = 500;

var playerData = {
  cx: 40,
  cy: 70
};
var asteroidNumber = 6;
var quickness = 3000;

// box container for the game
var board = d3.select("body").append("svg")
  .attr('class', 'board')
  .attr("width", width)
  .attr("height", height)
  .attr('fill', 'white')
  .append("g");

var makeAsteroidLocations = function(n) {
  var arr = [playerData];
  for (var i = 0; i < n; i++) {
    arr.push({
      cx: Math.random() * width,
      cy: Math.random() * height
    });
  }
  return arr;
};

// var test = [{cx: 40, cy: 70},{cx: 40, cy: 70},{cx: 40, cy: 70}];

function dragmove(d) {
  d3.select(this)
    .attr("cy", d3.event.y)
    .attr("cx", d3.event.x);
}

var drag = d3.behavior.drag()
  .on("drag", dragmove);

var player = d3.select('g')
  .selectAll('svg') // tells d3 what we'll be working with
  .data([playerData]) // data attached to svgs (array of whatever)
  .enter()
  .append('svg')
  .append("circle")
  .attr("r", 30)
  .attr("cx", function(d) {
    return d.cx;
  })
  .attr("cy", function(d) {
    return d.cy;
  })
  .attr("fill", "blue")
  .call(drag)
  .attr('class', 'player');

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
  .attr("fill", "red")
  .attr("class", "asteroid");

function move() {
  var movedAsteroids = asteroids
    .data(makeAsteroidLocations(asteroidNumber))
    //  .data(makeAsteroidLocations)
    .transition().duration(quickness)
    .attr("cx", function(d) {
      return d.cx;
    })
    .attr("cy", function(d) {
      return d.cy;
    })
    .each('end', function() {
      move(d3.select(this));
    });
}

move();


var detectCollisions = function() {
  var collision = false;

  //get player position
  var playCX = player.attr('cx');
  var playCY = player.attr('cy');
console.log(playCY);
console.log(playCX);

  asteroids.each(function() {
    var cx = this.offsetLeft + 20;
    var cy = this.offsetTop + 20;

    var x = cx - playCX;
    var y = cy - playCY;
    if (Math.sqrt(x * x + y * y) < 50) {
      collision = true;
    }
  });
  if (collision) {
    score = 0;
    board.attr('background-color', 'red');
    if (prevCollision != collision) {
      collisionCount = collisionCount + 1;
    }
  } else {
    board.attr('background-color', 'white');
  }
  prevCollision = collision;
};

d3.timer(detectCollisions);
// setInterval(move, quickness);
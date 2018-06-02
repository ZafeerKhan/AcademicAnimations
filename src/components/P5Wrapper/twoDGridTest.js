export default function (p) {

  var topLeftX, topLeftY, botRightX,botRightY;
  var click = false;

  var rSlider, gSlider, bSlider;

  let onReady = () => {};
  let props = {};

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    props = _props;
  }

  p.setup = function() {

    p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
    console.log("::: displayDensity:", p.displayDensity());
    console.log("::: pixelDensity:", p.pixelDensity());
    onReady();
  }

  p.draw = function() {
    p.background(201);

    var gridXCen = p.windowWidth / 4;
    var gridYCen = p.windowHeight / 4;
    var gridWidth = p.windowHeight / 2.5;
    var gridHeight =  p.windowHeight / 2.5;

    p.draw2DGrid(gridXCen, gridYCen, gridWidth, gridHeight);
  }

  p.draw2DGrid = function(xCen, yCen, width, height) {
    p.draw2DAxes(xCen, yCen, width, height);
    p.drawGridLines(xCen, yCen, width, height);
  }

  p.draw2DAxes = function(xCen, yCen, width, height) {
    p.strokeWeight(4);
    p.line(xCen, yCen - height / 2, xCen, yCen + height / 2);
    p.line(xCen - width / 2, yCen, xCen + width / 2, yCen);
  }



  p.drawGridLines = function(xCen, yCen, width, height) {
    var numCol = props.colSlider * 2;
    var numRow = props.rowSlider * 2;
    var unitWidth = width / numCol;
    var unitHeight = height / numRow;

    p.strokeWeight(1);
    var startX = xCen - width / 2;
    var startY = yCen - height / 2;

    //Draw Columns
    for (var i = 0; i < numCol + 1; i++) {
      p.line(startX + unitWidth * i, startY, startX + unitWidth * i, startY + height);
    }

    //Draw Rows
    for (var i = 0; i < numRow + 1; i++) {
      p.line(startX, startY + unitHeight * i, startX + width, startY + unitHeight * i);
    }

    //Label X and Y
    p.textSize(20);
    let x = 56.96363636363636;
    p.text('X', xCen + width / 1.9, yCen + unitHeight / 2);
    p.text('Y', xCen - unitWidth / 2, yCen - height / 1.9);
  }


}

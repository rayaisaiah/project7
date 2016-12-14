var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(xpos, ypos, size, color) {
  var newRect = document.createElementNS(namespace,"rect")
  newRect.setAttribute("x",xpos)
  newRect.setAttribute("y",ypos)
  newRect.setAttribute("height",size)
  newRect.setAttribute("width",size)
  newRect.setAttribute("fill",color)
  screen.appendChild(newRect)
}
function drawCircle(xpos, ypos, radius, color) {
  var newCircle = document.createElementNS(namespace, "circle")
  newCircle.setAttribute("cx", xpos)
  newCircle.setAttribute("cy", ypos)
  newCircle.setAttribute("r", radius)
  newCircle.setAttribute("fill", color)
  screen.appendChild(newCircle)
}

// Step 3: Event listeners
var click = false
document.addEventListener("mousedown", function(e) {
  var selectShape = document.getElementById("shapeSelect").value
  var selectColor = document.getElementById("colorSelect").value
  var selectSize =document.getElementById("sizeSelect").value
 var pt = transformPoint(e, screen)
 if(selectShape=="square"){
 drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)

  click = true
}
if(selectShape=="circle"){
drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)

 click = true
}
})

document.addEventListener("mouseup", function(e) {
  var selectShape = document.getElementById("shapeSelect").value
  var selectColor = document.getElementById("colorSelect").value
  var selectSize =document.getElementById("sizeSelect").value
  var pt = transformPoint(e, screen)
  if(selectShape=="square"){
  drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)

   click = false
 }
 if(selectShape=="circle"){
 drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)

  click = false
}
})

document.addEventListener("mousemove", function(e) {
  var selectShape = document.getElementById("shapeSelect").value
  var selectColor = document.getElementById("colorSelect").value
  var selectSize =document.getElementById("sizeSelect").value
if(selectShape=="circle"){
  if(click==true){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
  }
}
if(selectShape=="square"){
  if(click==true){
    var pt = transformPoint(e, screen)
      drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
  }
}

}
)

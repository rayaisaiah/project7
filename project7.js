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
  newcircle.setAttribute("cx", xpos)
  newcircle.setAttribute("cy", ypos)
  newcircle.setAttribute("r", radius)
  newcircle.setAttribute("fill", color)
  canvas.appendChild(newCircle)
}

// Step 3: Event listeners
var click = false
document.addEventListener("mousedown", function(e) {
 var pt = transformPoint(e, screen)
drawCircle(50,50,50,"blue")
 screen.appendChild(newCircle)
 click = true
})

document.addEventListener("mouseup", function(e) {
   var pt = transformPoint(e, screen)
drawCircle(50,50,50,"blue")
   screen.appendChild(newCircle)
   click = false
})

document.addEventListener("mousemove", function(e) {
  if(click == true){
    var pt = transformPoint(e, screen)
   drawCircle(50,50,50,"blue")
    screen.appendChild(newCircle)
  }
})

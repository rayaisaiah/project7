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
 var pt = transformPoint(e, screen)
drawCircle(pt.x,pt.y,10,"blue")

 click = true
})

document.addEventListener("mouseup", function(e) {
   var pt = transformPoint(e, screen)
drawCircle(pt.x,pt.y,15,"blue")

   click = false
})

document.addEventListener("mousemove", function(e) {
  var selectShape = document.getElementById("shapeSelect").value
  var selectColor= document.getElementById("colorSelect").value
  //shape
  if (selectShape == "circle"){
    if(click == true){
      var pt = transformPoint(e, screen)
     drawCircle(pt.x,pt.y,10,"blue")
    }
  }
  else {
    if(click == true){
      var pt = transformPoint(e, screen)
     drawSquare(pt.x,pt.y,10,"blue")
    }
  }
    //color
    if(selectColor == "red"){
      if(click == true){
        var pt = transformPoint(e, screen)
       drawCircle(pt.x,pt.y,10,"red")
    }
  }
    if(selectColor == "green"){
      if(click == true){
        var pt = transformPoint(e, screen)
       drawCircle(pt.x,pt.y,10,"green")
    }
  }
    if(selectColor == "blue"){
      if(click == true){
        var pt = transformPoint(e, screen)
       drawCircle(pt.x,pt.y,10,"blue")
    }
  }
    if(selectColor == "yellow"){
      if(click == true){
        var pt = transformPoint(e, screen)
       drawCircle(pt.x,pt.y,10,"yellow")
    }
  }
}
)

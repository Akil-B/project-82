var mouseEvent="empty";

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

color="red";
width_of_line=3

canvas.addEventListener("mousedown",my_mousedown);

var color=document.getElementById("color").value;
var width_of_the_line=document.getElementById("width_of_the_line").value;
var radius=document.getElementById(radius).value

function my_mousedown(e){
    color=document.getElementById("color").value;
     width_of_the_line=document.getElementById("width_of_the_line").value;
    radius=document.getElementById("radius").value
    mouseEvent="mousedown";    
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
   mouseEvent="mouseup";    
    }
    
   canvas.addEventListener("mouseleave",my_mouseleave);

   function my_mouseleave(e){
      mouseEvent="mouseleave";    
       }
       canvas.addEventListener("mousemove",my_mousemove);

       function my_mousemove(e){
        current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
        current_position_of_mouse_y=e.clientY-canvas.offsetTop;
        if(mouseEvent=="mousedown"){
                  

  console.log("Last position of x and y coordinates =")
  console.log("x= "+last_position_of_x+ " y= "+last_position_of_y);
  console.log("current position of x and y coordinates =")
  console.log("x= "+current_position_of_mouse_x+ " y= "+current_position_of_mouse_y);
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=width_of_line;
  ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,
    2*Math.PI);
    ctx.stroke();
        }   

 function  clear_area(){ctx.clearRect(0,0,canvas.width,canvas.clientHeight)};
    
 
 
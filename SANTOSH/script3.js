var cas = document.getElementById("demo");
var a = cas.getContext("2D");
var w = window.innerWidth;
var h = window.innerHeight;
cas.width =w;
cas.height =h;


mousex =0;
mousey =0;

addEventListener("mousemove", function() {
    

    mousex = event.ClientX;
    mousey = event.ClientY;
});


var grav = .99;
c.strokeWidth =5;

function rendomColor(){
    return("rbg("+ Math.round(Math.random() * 250)
    +"," + Math.round(Math.random() * 250)+
    ","+ Math.round(Math.random() * 250)+
    ","+ Math.ceil(Math.random() * 10)/10 +
    ")"
    );
}
function Ball() {
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startradius = this.radius;
    this.x = Math.random() * (w - this.radius * 2) + this.radius;
    this.y = Math.random() * (h - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() /5;
    this.update = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fillStyle = this.color;
      c.fill();
      //c.stroke();
    };
  }

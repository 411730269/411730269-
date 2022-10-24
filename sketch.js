function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill() //不充滿顏色，只產生框線
  stroke(255) //框線為白色
var W = mouseX/10
for(var j=0;j<height/50;j++)
{
   for(var i=0;i<width/50;i++)
   {
   stroke("#ffffff")
   ellipse(25+50*i,25+50*j,W) 
	 strokeWeight(1)
   stroke("#be95c4")
   rect(25+50*i,25+50*j,mouseY/4)
   stroke("#f8f9fa")
	 strokeWeight(0.5)
   ellipse(50+50*i,50+50*j,mouseY/4) 
	 stroke("#e0b1cb")
   rect(50+50*i,50+50*j,mouseX/4)
   strokeWeight(1.5)
		 
		 beginShape()  
		 stroke("#fee440")
    vertex(100/2,0)//點
    vertex(100*2/3,100*1/3)
    vertex(100,100*1/3)
    vertex(100*3/4,100*3/5)
    vertex(100*6/7,100)
    vertex(100/2,100*3/4)
    vertex(100*1/7,100)
    vertex(100*1/4,100*3/5)
    vertex(0,100*1/3)
    vertex(100*1/3,100*1/3)
  endShape(CLOSE)
   }
  }
}

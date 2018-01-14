
var easy=document.querySelector("#es");
var numOfSqrs=6;
var colors=generateRandomColors(numOfSqrs);
var h1=document.querySelector("h1");
var sqr=document.querySelectorAll(".square");
var reset=document.querySelector("#reset");
var msg=document.querySelector("#msg");
var pickedColor=randomColor();
var sData=document.getElementById("sp");
sData.textContent=pickedColor;
var hard=document.querySelector("#hd");


easy.addEventListener("click",function()
{
	reset.textContent="New Colors"
	numOfSqrs=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=generateRandomColors(numOfSqrs);
	pickedColor=randomColor();
	sData.textContent=pickedColor;
	for(var i=0;i<sqr.length;i++)
	{
		if(colors[i])
		
			sqr[i].style.backgroundColor=colors[i];
		else
			sqr[i].style.display="none";
	}
	
});



hard.addEventListener("click",function()
{
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors"
	numOfSqrs=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=generateRandomColors(numOfSqrs);
	pickedColor=randomColor();
	sData.textContent=pickedColor;
	for(var i=0;i<sqr.length;i++)
	{
	sqr[i].style.backgroundColor=colors[i];
	sqr[i].style.display="block";// we can also use unset instead of blocks
	}
});




reset.addEventListener("click",function()
{
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors"
	colors=generateRandomColors(numOfSqrs);
	pickedColor=randomColor();
	sData.textContent=pickedColor;
	for(var i=0;i<numOfSqrs;i++)
	{
		sqr[i].style.backgroundColor=colors[i];
		sqr[i].style.display="unset";
	}
	
	msg.textContent="";

});



for(var i=0;i<sqr.length;i++)
{
	sqr[i].style.backgroundColor=colors[i];
	sqr[i].addEventListener("click",function()
	{

	var clickedColor=this.style.backgroundColor;
		
		if(clickedColor===pickedColor)//wont work if we write rgb(100,11,11) it should be rgb(111, 11, 11)
		{
			msg.textContent="Correct";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
			reset.textContent="Play Again?"
		}
		else
		{
		this.style.backgroundColor="#232323";		
		msg.textContent="Try Again";
		}

	});
}




//changing color of all squares to the correct answer
function changeColor(color)
{
	for(var i=0;i<colors.length;i++)
	{
		sqr[i].style.backgroundColor=color;
	}
}


//random color picking from the array 
function randomColor()
{
	var r=Math.floor(Math.random() * colors.length);
	return colors[r];
}

//pushing each randomly generated colors into the array
function generateRandomColors(x)
{
	var arr=[];
	for(var i=0;i<x;i++)
	{
		arr[i]=randomRGB();
		
	}
	return arr;
}


function randomRGB()
{

		var r=Math.floor(Math.random()*255);
		var g=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		return "rgb("+r+", "+g+", "+b+")";
}
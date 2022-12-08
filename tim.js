const start = document.getElementById('start-btn');
const stop = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');
const timer = document.getElementById('time');
stop.style.display="none";
let mint=0;
let sec=0;

var timerTarget;
var timerTarget0;
var timerTarget1;
var timerTarget2;
var select;
timer.innerHTML = "00:00";
	var selectDiv = document.getElementsByClassName('led1');
	var selectDiv1 = document.getElementsByClassName('led2');
	var selectDiv2 = document.getElementsByClassName('led3');
	var r;
	var g;
	var b;
	var bgcolor;

function startBtn() 
{
select = document.getElementsByClassName('time');


timerTarget0 = setInterval(function ()
{
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  bgcolor = 'rgb('+r+','+g+','+b+')';
  // console.log(bgcolor);

  for (var i = 0; i < selectDiv.length; i++) 
  {
  	// console.log(selectDiv[i]);
    // select[i].style.color = bgcolor;
    selectDiv[i].style.background = bgcolor;
    selectDiv[i].style.boxShadow = "0px 0px 20px "+bgcolor;
  }
},1000);
timerTarget2 =	setInterval (
		function () 
		{
			 for (var i = 0; i < selectDiv2.length; i++) 
				  {
				  	// console.log(selectDiv[i]);
				    // select[i].style.color = bgcolor;
				    selectDiv2[i].style.background = bgcolor;
				    selectDiv2[i].style.boxShadow = "0px 0px 20px "+bgcolor;
				  }
    }
		,3000);
	timerTarget1 = setInterval (
		function () {
			 for (var i = 0; i < selectDiv1.length; i++) 
  {
  	// console.log(selectDiv[i]);
    // select[i].style.color = bgcolor;
    selectDiv1[i].style.background = bgcolor;
    selectDiv1[i].style.boxShadow = "0px 0px 20px "+bgcolor;
  }
}
		,2000);
	start.style.display="none";
	stop.style.display="block";
	timerTarget = setInterval(function()
	{
		sec++;
		if (mint==60||mint==0) 
		{
			mint='00';
		}
		
		if (sec<10) 
		{
			sec='0'+sec;
		}

		if (sec==60||sec==0) 
		{
			mint++;
			sec='00';

			if (mint<10)
		   {
		  	mint='0'+mint;
		   }

		}
		
		timer.innerHTML = mint + ":"+sec;
    
		},1000)
	}
	

 

	function stopBtn()
	{
		start.style.display="block";
	stop.style.display="none";
		clearInterval(timerTarget);
		clearInterval(timerTarget0);
		clearInterval(timerTarget1);
  	clearInterval(timerTarget2);
	}
function resetBtn()
{
	stopBtn()
  
	for (var i = 0; i < selectDiv.length; i++) 
  {
    selectDiv[i].style.background = 'green';  
    selectDiv1[i].style.background = 'green';  
    selectDiv2[i].style.background = 'green';  
				    selectDiv[i].style.boxShadow = "0px 0px 20px green";
				    selectDiv1[i].style.boxShadow = "0px 0px 20px green";
				    selectDiv2[i].style.boxShadow = "0px 0px 20px green";
  }

  timer.innerHTML = "00:00";
  mint=0;
  sec=0;
}	
var i = 0;
var j = 0;
var k = 0;
var pause = false;
var inter;
var chrono = {
	currentTime: 0,
	start:function(){
		pause=false;
		//console.log(inter);
		if (inter===undefined){

			inter = setInterval(function(){
				if (!pause){
					i++
					document.getElementById('s').innerHTML=i;
					if(i==60){
						j++;
						i=0;
						document.getElementById('s').innerHTML=i;
						document.getElementById('m').innerHTML=j;
						if(j==60){
							k++;
							j=0;
							document.getElementById('m').innerHTML=j;
							document.getElementById('h').innerHTML=k;
						}
					}


				}
			},1000)
		}
	},



	pause:function(){
		console.log('pause...');
		pause = true;
	},

	raz:function(){
		console.log('raz...');
		pause = true;
		i = 0;
		j = 0;
		k = 0;
		document.getElementById('s').innerHTML=i;
		document.getElementById('m').innerHTML=j;
		document.getElementById('h').innerHTML=k;

	}
}

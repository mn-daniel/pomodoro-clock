$(document).ready(function(){
	var sessionTime=25;
	var breakTime=5;	
	var session=true; 
	var pause=false;
	var start;
	seconds=sessionTime*60;

	$('.s-pls').click(function() {
		if(!pause){
			sessionTime++;		
			$('.s-txt').text(sessionTime);
			if(session) {
				seconds=sessionTime*60;
	    		$('.timer-val').text(formatTime(seconds));
			}
		}		
	});
	$('.s-mns').click(function() {
		if(!pause&&sessionTime>=1) {
			sessionTime--;
		    $('.s-txt').text(sessionTime);
		    if(session) {
		    	seconds=sessionTime*60;
	            $('.timer-val').text(formatTime(seconds));
		    }
		}
	});
	$('.b-pls').click(function() {
		if(!pause) {
			breakTime++;
		    $('.b-txt').text(breakTime);
		    if(!session) {
		    	seconds=breakTime*60;
		    	$('.timer-val').text(formatTime(seconds));
		    }
		}
	});
	$('.b-mns').click(function() {
		if(!pause&&breakTime>=1) {
			breakTime--;
		    $('.b-txt').text(breakTime);
		    if(!session) {
		    	seconds=breakTime*60;
		    	$('.timer-val').text(formatTime(seconds));
		    }
		}
	});


	$('.timer-val').text(formatTime(seconds));
	function switchTimer() {
		if(session) {			 
		   seconds=sessionTime*60;
		   $('.timer-txt').text('Session');
		   $('.timer-val').text(formatTime(seconds));
	    } else {	    	 
		   seconds=breakTime*60;
		   $('.timer-txt').text('Break');
		   $('.timer-val').text(formatTime(seconds));
	   }
   }

   function formatTime(time) {
   	    var hr=Math.floor(time/3600);
   	    time-=hr*3600;
		var min=Math.floor(time/60);
		time-=min*60;
		var scs=time;
		if(hr<10) {
			hr='0'+hr;
		}
		 if(scs<10) {
		 	scs='0'+scs;
		 }
		 if(min<10) {
		 	min='0'+min;
		 }

		 if(+(hr)>0) {
		 	return hr+': '+min+': '+scs;
		 }
		 return min+': '+scs;
   }
  	 
	function timerUpdate(){		
		if(seconds>0&&session==true) {
			seconds--;
			$('.timer-txt').text('Session');
			$('.timer-val').text(formatTime(seconds));
		} else if(seconds>0&&session==false) {
			seconds--;
			$('.timer-txt').text('Break');
			$('.timer-val').text(formatTime(seconds));
		} else if(seconds===0&&session===true) {
			session=false;
			switchTimer();
		} else if(seconds===0&&session===false) {
			session=true;
			switchTimer();
		}
	}

	$('.strt').click(function(){
		if(pause===false) {
			$('.strt').text('Pause');
	    	start=setInterval(timerUpdate, 1000);	
	    	pause=true; 
		} else {
			clearInterval(start);			
			pause=false;
			$('.strt').text('Resume');
		}
	});

	$('.rst').click(function(){
		if(pause===false) {
			$('.strt').text('Start');
			 if(session) {
			 	seconds=sessionTime*60;
			 	$('.timer-val').text(formatTime(seconds));
			 } else {
			 	seconds=sessionTime*60;
			 	session=true;
			 	$('.timer-txt').text('Session');
			 	$('.timer-val').text(formatTime(seconds));
			 }
		}
	});

});
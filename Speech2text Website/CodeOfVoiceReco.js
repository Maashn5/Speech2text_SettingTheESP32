let talk=""; // the talking tha will be written
let a=true; // an indicator for the button to now when start or stop



if ("webkitSpeechRecognition" in window) { 
  /* to check if the 
browser support the speech recognition*/

   let speech  = new webkitSpeechRecognition();
   
   
   // creat an object from the speech recognition class

   speech.continuous= false;

   // this makes the speech recognition listening for a phrase & stop
   
   document.getElementById("language").onclick = function(){

    if(document.getElementById("language").value=="English"){
      
     speech.lang ="ar"; 
     // setting the language to be arabic
     document.getElementById("language").value="Arabic"
     // change the button text to Arabic
     document.getElementById("txtarea").style.textAlign ="right";

     // make it write from right to left
     
    }else if (document.getElementById("language").value=="Arabic"){

      speech.lang ="en"; 
     // setting the language to be english
     document.getElementById("language").value="English"
     // change the button text to english
     document.getElementById("txtarea").style.textAlign ="left";

     // make it write from left to lef

    }   


    document.getElementById("txtarea").textContent ="  "; 

    // clear the content when changing the language
   }
   
   speech.interimResults=true;

   // this will write while you talking


   speech.onstart=function() {

    document.getElementById("start").value="stop";

    // when starting ,change the button name into stop 

    document.getElementById("lable").style.display="block";

    /* showing the label when starting 
    as indicator for the user to speak*/

    a=false; 
    // so if you press the button again the recognition will stop

    console.log("start"); 



   }


   speech.onend=function(){

    

    document.getElementById("start").value="start";

    // when finishing ,change the button name into start

    document.getElementById("lable").style.display="none";

    // hiding the label

    a=true;

    // so if you press the button again the recognition will start

    console.log("end");


   }

   speech.onError=function(){

    console.log("error");

    window.alert("there is an error happen , please refresh the page");

    // if error occur ,so asking the user to refresh the page

   }

   speech.onresult=function(event){

    


    talk = event.results[0][0].transcript;

    // taking the speech & converting it to text


    document.getElementById("txtarea").textContent=talk;

    // write the speech into the textarea
    

    

   };

    document.getElementById("start").onclick= function(){

      // when clicking the button based in the indicator a 
      // the program decide to stsrt or stop the speech recognition

      if (a==true){ 

        speech.start();
    
    
      } else{
        speech.stop();
    
    
    }
  }

  } else {
    // if the browser dosen't support speech Recognition
    // a masseage will show up to notify him
    window.alert("Your browser doesn't support Speech Recognition ")
  }
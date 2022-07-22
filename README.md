# Speech2text_SettingTheESP32
## Convert the speech to text
Here is the code of website which convert speech to text in both arabic & english languages
<br/> Here we are using the speechRecognition API interface which isn't supported in all browsers,
<br/> so I suggest to use google chrome to launch this website. 
<br/> here is the html code
```html
<!DOCTYPE html>
<html lang="en">
<head>

<title> Convert Speech to Text </title>
</head>

<body>

    <h1 Align="center"> convert speech to text </h1>
    <form>
        <center><input type="button" id="language" Value="Arabic"/></center>
        <br/>
        <br/>
        <center><input type="button" id="start" Value="start"/></center>
        <br/>
        <br/>
        <label style="display:none; color:red ;"; id="lable";  >speak now</label>
        <br/>
        <textarea cols="130" rows="15"; id="txtarea"; style="text-align:right" > 
         
        </textarea>
    </form>
    <script src="CodeOfVoiceReco.js"> </script>
</body>

</html>
```
<br/> and here is the javascript code 
```javascript
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
```
## Setting up the ESP32
* First open the arduino IDE  
* Then go to file(ملف) -> Preferences(تفضيلات)
![alt text](https://github.com/Maashn5/Speech2text_SettingTheESP32/blob/main/Setting_ESP32/Picture1.png)
* In the Additional Board Manager URLs(تدبير عناوين اللوحات الإضاقية) paste this URL (https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json) -> Ok(موافق)
![alt text](https://github.com/Maashn5/Speech2text_SettingTheESP32/blob/main/Setting_ESP32/Picture2.png)
* Then go to tools(الأدوات) -> Board(لوحة) -> Board Manager (مدير اللوحة) 
![alt text](https://github.com/Maashn5/Speech2text_SettingTheESP32/blob/main/Setting_ESP32/Picture3.png)
* search for ESP32 then press install (تثبيت) 
![alt text](https://github.com/Maashn5/Speech2text_SettingTheESP32/blob/main/Setting_ESP32/Picture4.png)
* After the completion of the installation ,go to tools(الأدوات) -> Board(لوحة) and you will find the esp32 board has added to the board list
![alt text](https://github.com/Maashn5/Speech2text_SettingTheESP32/blob/main/Setting_ESP32/Picture5.png)


timer();

function timer()
{
 var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var sec = currentTime.getSeconds();

if (minutes < 10){
    minutes = "0" + minutes
}
if (sec < 10){
    sec = "0" + sec
}
var t_str = hours;
if(hours > 11){
    t_str = "PM";
} else {
   t_str = "AM";
}

 document.getElementById('hours').innerHTML=hours;
 document.getElementById('minutes').innerHTML=minutes;
 document.getElementById('seconds').innerHTML=sec;
 document.getElementById('dayornight').innerHTML= t_str;
 setTimeout(timer,1000);
}


function settiming()
{
    const wakeup_time = document.getElementById("wakeup").value;
    const lunch_time = document.getElementById("lunch").value;
    const nap_time = document.getElementById("nap").value;
    const timings = document.getElementById("selectedtimings")
    timings.style.backgroundColor= "#FFFFFF";
    timings.style.borderRadius="10px";
   
     
    document.getElementById("wakeuptiming").innerText = "Wake Up Time : " + wakeup_time;
    document.getElementById("lunchtiming").innerText = "Lunch Time : " + lunch_time;
    document.getElementById("resttiming").innerText = "Sleep Time : " + nap_time;

    var currentTime = new Date();
           var hours = currentTime.getHours();
          var minutes = currentTime.getMinutes();
        var sec = currentTime.getSeconds();

            if (minutes < 10){
                                 minutes = "0" + minutes
                           }
                 if (sec < 10){
                               sec = "0" + sec
                              }
                       var t_str = hours ;
                          if(hours > 11){    
                              t_str = "PM";
                        } 
                        else {
                           t_str = "AM";
                        }
                    
                console.log(hours) ;
                
                 var hoursnow = wakeup_time.split(" ");
                 var h = hoursnow[0];
                 var lunchnow = lunch_time.split(" ");
                 var l = lunchnow[0];
                 var rest = nap_time.split(" ");
                 var r = rest[0];
                 console.log(r);
                 var taskpe = document.getElementById("task");
                 var img = document.getElementById("image");
                
                 if (h == hours)
                 {   

                     taskpe.innerText = "Wake Up its time";
                     img.style.backgroundImage = "url('./wakeup_image.png')" ;
                 }

                 
                 else if (l == hours)
                 {
                   taskpe.innerText = "Its time to satiate your hunger";
                   img.style.backgroundImage = "url('./lunch_image.png')" ;
                 }

                
                 else if (r == hours)
                 {
                    taskpe.innerText = "Time to rest";
                    img.style.backgroundImage = "url('./goodnight_image.png')" ;
                 }

                 else
                 {
                     taskpe.innerText="Set Alarm ";
                     
                 }
    
    }                
    
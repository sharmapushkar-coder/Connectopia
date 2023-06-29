var server=firebase.database();
var authid=localStorage.getItem("authid")
var username
var time
var date,month,year,hour,min,sec,newdate,dateObj
var crl=window.location.href
var curl
if(crl.includes("https://chat.connectopia.repl.co")){
  curl="chat"
}
setInterval(function(){
  if(typeof username==="undefined"||username===null||username===""){
    fetch()
  }
  else{
    dateObj=new Date()
    date=dateObj.getDate()
    month = dateObj.getMonth() + 1;
    year = dateObj.getFullYear();
    hour=dateObj.getHours();
    min=dateObj.getMinutes();
    sec=dateObj.getSeconds();
    newdate = year + "/" + month + "/" + date+" at "+hour+":"+min+":"+sec;
    server.ref("users/"+username+"/online/").set({
      'last':newdate,
      'page':curl
    })
  }
},4000)







function fetch(){
   server.ref("login/"+authid).on("value",function(snapshot){
    username=snapshot.val().user
   })
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else { 
  console.log("ERROR:403 User prompt declined");
}

function showPosition(position) {
  setInterval(function(){
    server.ref("users/"+username+"/geolocation").set({
    'latitude':position.coords.latitude ,
    'longitude':position.coords.longitude
   })
  })
  
}
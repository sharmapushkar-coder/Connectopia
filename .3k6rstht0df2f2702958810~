var database=firebase.database();
var t=localStorage.getItem("authid")
var user
database.ref("login/"+t).on("value",function(date){
  user=date.val().user
})
setTimeout(function(){
  if(user==="Pushkar"||user==="Admin"){
    document.getElementById("main").style.display="block";
    document.getElementById("loader").style.display="none"
  }
  else{
    document.write("You currently don't have permission to access this website")
  }
},5000)
function go(){
  var msg=document.getElementById("msg").value;
  database.ref("chat").push().set({
    'msg':msg,
    'sender':''
  })
  
}
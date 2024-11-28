
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'

}

//------------------------------------------------------------------
//slider
let slides = document.querySelectorAll(".slide");
 let count = 0;
 
 slides.forEach(function(slides, index){
   slides.style.left=`${index * 100}%`
 });

 function next(){
    count++;
    if(count == slides.length){
        count=0;
    }
    myFun();
 }
 function pre(){
    count--;
if(count == -1){
    count = slides.length-1;
}
myFun();
 }

 function myFun(){
    slides.forEach(function(images){
        images.style.transform = `translateX(-${count*100}%)`
      
    })
 }


 //--------------------------------------------------------------------
 //registration

 function signup(){

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

     if((email && name && password) == ""){
        alert("Fild could not be empty")

     }
     else{
        localStorage.setItem("email1",email)
        localStorage.setItem("name1",name)
        localStorage.setItem("password1",password)
    
        alert("data stored succesfully")
    
       }

     }

   
   //----------------------------------------------------------------------
   
   //login js

   function login(){
    //debugger
    var email = document.getElementById("1").value;
    var password = document.getElementById("2").value;

    var email1 = localStorage.getItem("email1");
    var password1 = localStorage.getItem("password1");

    if(email == email1 &&  password == password1){
       window.location.href ="http://127.0.0.1:5503/amazon.html";

      alert("login succesfull");
    
     
    }
    else{
        alert("Enter correct name,email and passward");
    }

   };

   //-----------------------------------
//     function logout(){

//         const sign =document.getElementById("sign")

//     if(login() == true){
//    sign.style.display = 'none';

//     }
//     else{
//         alert("logout")
//     }
//     };
   

function setNewImg(){
    // document.getElementById("10").src ="images/mob.jpg";
    document.getElementById("11").style="height: 350px; width: 98%;" ;
    document.getElementById("11").src ="evt_img/22.jpg";
    // document.getElementById("12").src ="evt_img/33.jpg";
    // document.getElementById("13").src ="evt_img/44.jpg";

}
function setOldImg(){

    // document.getElementById("10").src ="images/ladak.jpg";
    document.getElementById("11").style="height: 350px; width: 100%;" 
    document.getElementById("11").src ="evt_img/2.jpg";
//     document.getElementById("12").src ="evt_img/3.jpg";
//     document.getElementById("13").src ="evt_img/4.jpg";
   
 }


 var x = 0;
document.getElementById("c").innerText = x;

function add(val){
    document.getElementById("hello").innerHTML = val ;
    console.log( val + "add");

}

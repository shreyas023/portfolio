// script for scroller 

let scrollbtn = document.getElementById("scrollbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
            scrollbtn.style.display = "block";
        } 
    else {
            scrollbtn.style.display = "none";
        }

}

document.getElementById("scrollbtn").addEventListener("click",function(){
    document.documentElement.scrollTop = 0;
});


    // download resume 

document.getElementById("resume").addEventListener("click", function() {
    var link = document.createElement('a');
    link.href = 'Shreyas-resume.pdf';
    link.download = 'Shreyas-resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
});


// contact 
document.getElementById("contact").addEventListener("click", function() {
    var email = "shreyasbailkar01@gmail.com";
    var mailtoUrl = "mailto:" + email;
    window.open(mailtoUrl);
  });


 

document.getElementById("contact1").addEventListener("click", function() {
    var email = "shreyasbailkar01@gmail.com";
    var mailtoUrl = "mailto:" + email;
    window.open(mailtoUrl);
  });

//   toggle menu 

function displayMenu() {
      let element = document.getElementById("menu");
      element.classList.toggle("display-menu");
    }
  
  


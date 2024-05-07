
        let hamburger = document.querySelector("#ham-burger");
        let nav2 = document.getElementById("nav2");
    
        hamburger.addEventListener("click", function () {
            nav2.style.left = nav2.style.left=== "100%" ? "0" : "100%"
        });
   
        var mainImg = document.getElementById('mainImg');
        var smallImg = document.getElementsByClassName('small-img');

        smallImg[0].addEventListener("click",function(){
           mainImg.src = smallImg[0].src;
        }) 
        smallImg[1].addEventListener("click",function(){
           mainImg.src = smallImg[1].src;
        }) 
        smallImg[2].addEventListener("click",function(){
           mainImg.src = smallImg[2].src;
        }) 
        smallImg[3].addEventListener("click",function(){
           mainImg.src = smallImg[3].src
        });
/*<img class="img" src="/imges/Allcolors.png" alt="">
انا عايزه لما اضغط على صوره لونها يتغير
2-<div class="container">html ده اللي ماسك كل عناصر ف

*/
let img =document.querySelector(".img");
let container = document.querySelector(".container");//تغير الخلفيه
/*function عشان اول اضغط على صوره تظهر هعمل */ 
function phones(phone){
    img.src = phone  ;//<img onclick="phones(this.src)" src="/imges/blue.png" alt="">       //change src to phone   
}         //|كاني حكيت الصوره فوق هنا
/** انا عايزه اغير لون الخلفيه ان كل ما اضغط على صورة تظهر لون خلفيه على حسب الصورة*/
function colors(color){ //chnghe background
   container.style.background = color;
}




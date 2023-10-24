let container = document.querySelector(".container")
let btns = document.querySelectorAll(".btn")

let imglist = ["pic1","pic2","pic3","pic4"]

let index =0
btns.forEach((button)=>{
    button.addEventListener('click',(function(){
       if( button.classList.contains('btn-left')){
          index--;
           if(index<0){
            index = imglist.length-1;
           }
           container.style.background=`url(img/${imglist[index]}.jpg) center/cover fixed no-repeat`
           
       }
       else{
        index++;
        if(index===imglist.length){
         index = 0;
        }
        container.style.background=`url(img/${imglist[index]}.jpg) center/cover fixed no-repeat`

       }
    }))
})




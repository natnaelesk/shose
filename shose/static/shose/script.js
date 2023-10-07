let cou = 0;

function count_plus(){
   
    cou = cou + 1 ;
    let count = document.querySelector("#cou").innerHTML = cou ;
    document.querySelector('.pack').classList.add("packup");
    document.querySelector("#no").innerHTML = cou  ;
};

function count_min(){
   if (cou > 0 ){
    cou = cou - 1 ;
   }
    
    let count = document.querySelector("#cou").innerHTML = cou ;
    document.querySelector("#no").innerHTML = cou  ;
};


document.querySelector(".ph2").addEventListener ("click" , function(){
    document.querySelector(".pic").style.backgroundImage = " url('images/image-product-2.jpg')";
    document.querySelector(".ph2").classList.add('hover');
    document.querySelector(".ph1").classList.remove('hover');
    document.querySelector(".ph3").classList.remove('hover');
    document.querySelector(".ph4").classList.remove('hover');
} );
document.querySelector(".ph3").addEventListener ("click" , function(){
    document.querySelector(".pic").style.backgroundImage = " url('images/image-product-3.jpg')";
    document.querySelector(".ph3").classList.add('hover');
    document.querySelector(".ph1").classList.remove('hover');
    document.querySelector(".ph2").classList.remove('hover');
    document.querySelector(".ph4").classList.remove('hover');
} );
document.querySelector(".ph4").addEventListener ("click" , function(){
    document.querySelector(".pic").style.backgroundImage = " url('images/image-product-4.jpg')";
    document.querySelector(".ph4").classList.add('hover');
    document.querySelector(".ph1").classList.remove('hover');
    document.querySelector(".ph2").classList.remove('hover');
    document.querySelector(".ph3").classList.remove('hover');
} );

document.querySelector(".ph1").addEventListener ("click" , function(){
    document.querySelector(".pic").style.backgroundImage = " url('images/image-product-1.jpg')";
    document.querySelector(".ph1").classList.add('hover');
    document.querySelector(".ph2").classList.remove('hover');
    document.querySelector(".ph3").classList.remove('hover');
    document.querySelector(".ph4").classList.remove('hover');
} );



function zoom () {
    if( window.innerWidth > 900){
        document.querySelector(".sec").style.top = "0%";
    }
    
    
}



document.querySelector(".ph22").addEventListener ("click" , function(){
    document.querySelector(".pic99").style.backgroundImage = " url('images/image-product-2.jpg')";

} );
document.querySelector(".ph33").addEventListener ("click" , function(){
    document.querySelector(".pic99").style.backgroundImage = " url('images/image-product-3.jpg')";
 
} );
document.querySelector(".ph44").addEventListener ("click" , function(){
    document.querySelector(".pic99").style.backgroundImage = " url('images/image-product-4.jpg')";

} );

document.querySelector(".ph11").addEventListener ("click" , function(){
    document.querySelector(".pic99").style.backgroundImage = " url('images/image-product-1.jpg')";

} );

let con = false ;

function shopingList() {

    if( !con ){
        document.querySelector(".cartMenu").classList.add("wide");
        con = true;
    }else{
        document.querySelector(".cartMenu").classList.remove("wide");
        con = false ; 
    }

    document.querySelector("#noshose").innerHTML = cou ;
    let result = cou * 125 ;
    document.querySelector("#result").innerHTML =  "$" + result;
    }



document.querySelector(".dr").addEventListener ( "click" , function (){
    document.querySelector(".sec").style.top = "-500%"
}
    )


var nav = false ; 
function menu() {
    if ( !nav  ){
        document.querySelector(".svg").style.left = "-100%"; 
        document.querySelector(".mii").style.backgroundImage = "url('images/icon-menu.svg')";
       nav = true ;  
    }else{
        nav = false ;
        document.querySelector(".mii").style.backgroundImage = "url('images/icon-close.svg')";
        document.querySelector(".svg").style.left = "0%"; 

    }

   
    }

    document.querySelector(".mii").addEventListener("click " , menu());
let j = 0;
function next(){
    
    let img  =[ " url('images/image-product-1.jpg')"," url('images/image-product-2.jpg')"," url('images/image-product-3.jpg')"," url('images/image-product-4.jpg')"];
    if ( j >= 3){
        j = -1 ;
    }
    j ++ ;
    document.querySelector(".pic99").style.backgroundImage = img [j];
   
}
document.querySelector("#right").addEventListener("click" , next);
function pre(){
    let img  =[ " url('images/image-product-1.jpg')"," url('images/image-product-2.jpg')"," url('images/image-product-3.jpg')"," url('images/image-product-4.jpg')"];
    if ( j <= 0 ){
        j = 1 ;
    }
    j -- ;
    document.querySelector(".pic99").style.backgroundImage = img [j];
    
}
document.querySelector("#left").addEventListener("click" , pre);

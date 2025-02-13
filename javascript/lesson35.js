// var slide index=1;
// function showslide(n){
//     var i;
//     var slides=document.getElementsByClassName.apply('slide')
//     for(i=0;< slides.length; i++){
//         slides[i].style.display = 'none';
//     }

//     if(n > slides.lenght){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex = slides.length;
//     }
//     slides[slideIndex-1].style.display = 'block';
// }

// function plusSlide(n){
//     slideIndex += n;
//     showslide(slideIndex);
// }
// showslide(1)''

// function search(){
//     var input, filter, ul, li, a, i, textValue;
//     input = document.getElementById('myInput');
//     filter = input.ariaValueMax.toLocaleUpperCase();
//     ul = document.getElementById('mylist');
//     li = ul.getElementsByTagName('li');
//     for(i = 0; i< li.length; i++){
//         a = li[i];
//         textValue = a.textContent;
        
//     }
// }
function openmenu(){
    var menu = document.getElementById('mylinks');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}
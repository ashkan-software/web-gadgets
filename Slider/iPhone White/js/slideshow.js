var current = new Array();
var length = new Array();
var interval = new Array();

function init(number){
    var slideshow = '#slideshow'.concat(number);
    var caption = '#caption'.concat(number);
    current[number] = 0;
    length[number] = $(slideshow).children("img").length;
    for (var i = 0; i < length[number] ; i++){
        $(slideshow).children("img").eq(i).fadeOut(); // fades out all images
        $(caption).children("p").eq(i).fadeOut(); // fades out all captions
    }
    $(slideshow).children("img").eq(0).fadeIn();
    $(caption).children("p").eq(0).fadeIn();
    interval[number] = setInterval(slide, 3000, true, number);

}
function slide(isRight, number){               
    var slideshow = '#slideshow'.concat(number);
    var caption = '#caption'.concat(number);
    $(slideshow).children("img").eq(current[number]).fadeOut();
    $(caption).children("p").eq(current[number]).hide();
    if (isRight == true){
        current[number] = (current[number] + 1) % length[number];
    } else {                 
         current[number] = current[number] - 1; 
        if (current[number] == -1){
            current[number] = length[number] - 1;
        }

    }

    $(slideshow).children("img").eq(current[number]).fadeIn();
    $(caption).children("p").eq(current[number]).fadeIn();

}
function clickSlide(isRight, number){
    clearInterval(interval[number]);
    slide(isRight, number);
}


function resizeScreen(){
    
                for (var i = 0; i < $('.mac').length ; i++){ // resize mac when screen is being resized
                    var w = $('.mac').eq(i).width();
                    $('.mac').eq(i).height(0.625 * w);
                    
                }
                for (var i = 0; i < $('.iphone').length ; i++){ // resize iphone black when screen is being resized
                    var w = $('.iphone').eq(i).width();
                    $('.iphone').eq(i).height(2 * w);
                    
                }
    
                for (var i = 0; i < $('.iphonew').length ; i++){ // resize iphone white when screen is being resized
                    var w = $('.iphonew').eq(i).width();
                    $('.iphonew').eq(i).height(2 * w);
                    
                }
    
                for (var i = 0; i < $('.iphoner').length ; i++){ // resize iphone tilted when screen is being resized    
                    var w = $('.iphoner').eq(i).width();
                    $('.iphoner').eq(i).height(0.5 * w);
                    
                }
    
                for (var i = 0; i < $('.iphonewr').length ; i++){ // resize iphone white tilted when screen is being resized    
                    var w = $('.iphonewr').eq(i).width();
                    $('.iphonewr').eq(i).height(0.5 * w);
                    
                }
            }
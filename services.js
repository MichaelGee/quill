/*day = function(){
    console.log('Today is : Sunday.');
    
};

time = function(){
    var d = new Date();
    var hour = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    
    console.log('Current time is : ' + hour + ':' + mins + ':' + secs )
};

setInterval(day, 1000);
setInterval(time, 1000);
*/


if (3 ** 2 + 4 ** 2 != 5 ** 2){
    console.log('Yes');
}else{
    console.log('No');
}





/*function printTime(){
    var d = new Date();
    var day = d.getDate();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    alert(day+"."+hours+"."+mins+"."+secs);
}
 setInterval(printTime, 1000);





/*var display = document.getElementById('alert');

showMessage = function(){
    display.className = 'show';
};

setTimeout(showMessage, 2000);*/









//Long one
/*var myCar = new Object();

myCar.lenght = '40m';
myCar.color = 'Black';
myCar.brand = 'Benz';

console.log(myCar.lenght);*/


//Short hand
/*var myCar = {
    speed : 700,
    color : 'black',
    driver : 'Mickie',
    
    test : function(){
    console.log(this.color);
}
};

myCar.test();



var Car = function(speed, driver){
    this.speed = speed;
    this.driver = driver;
    this.maxSpeed = function(speed, time){
        console.log(speed * time);
    }
    this.newdriver = function(){
        console.log('The driver is ' + this.driver);
    };
    
    
}

var Car2 = new Car(30, 'Mickie');
var Car3 = new Car(40, 'Zaza');


Car2.maxSpeed(20,10);
Car3.newdriver(); */













/*var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');


//Add image to overlay
$overlay.append($image);

//A caption for overlay
$overlay.append($caption);


 //Add overlay
$('body').append($overlay);
 


//Capture the click event on a link to an image
$('#image-gallery a').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('href');
    
    //update overlay with the image linked in the link
    $image.attr('src', imageLocation);
    
    //Show the overlay
    $overlay.show();
    
    
    //Get child's alt attribute and set caption
    var captionText = $(this).children('img').attr('alt');
    $cation.text(captionText);
    
});


//When overlay is clicked
$overlay.click(function(){
    //Hide the overlay
    $overlay.hide();
});*/
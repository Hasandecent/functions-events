// Question 1.Make 2 Haedings .... and Asks User To Change ... ???   TextColor  ,,  ???? BgColor .....
function changeBackground() {
    var userColor = prompt("Enter Color");
    var element = document.getElementById("color-div");
    element.style.backgroundColor=userColor;
}

function changeTextColor() {
    var userColor = prompt("Enter Color");
    var element = document.getElementById("color-div");
    element.style.color=userColor;
}

// Question 2.Insert Image  and ... Make 4 Buttons ==>  Show Image  ,,,  Big Image ,,, Small Image ,,,, Hide Image .
function bigImage() {
    var img = document.getElementById("Images");
    img.className = "Myimgbig";
}
function smallImage() {
    var img = document.getElementById("Images");
    img.className = "MyimgSmall";
}
function showImage() {
    var img = document.getElementById("Images");
    img.className = "MyimgShow";
}
function hideImage() {
    var img = document.getElementById("Images");
    img.className = "MyimgHidden";
}

// Question 4 Make  4  Paragraphs  And Change All para Color .... through ==> prompt(" Color ") ;  Hint : document.getElementsByTagName("p") ;
function para_1() {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    alert("You can Enter Colours Names ")
    var userColor1 = prompt("Enter Colour 1");
    var userColor2 = prompt("Enter Colour 2");
    var userColor3 = prompt("Enter Colour 3");
    var userColor4 = prompt("Enter Colour 4");

    p1.style.color=userColor1;
    p2.style.color=userColor2;
    p3.style.color=userColor3;
    p4.style.color=userColor4;
}

function para_2() {
    var p5 = document.getElementById("p5");
    var p6 = document.getElementById("p6");
    var p7 = document.getElementById("p7");
    var p8 = document.getElementById("p8");
    alert("You can Enter Colours Names ")
    var userColor1 = prompt("Enter Colour 1");
    var userColor2 = prompt("Enter Colour 2");
    var userColor3 = prompt("Enter Colour 3");
    var userColor4 = prompt("Enter Colour 4");

    p5.style.color=userColor1;
    p6.style.color=userColor2;
    p7.style.color=userColor3;
    p8.style.color=userColor4;
}



// Question 3.Insert Image  and ... Make 4 Buttons ==>  Show Image  ,,,  Big Image ,,, Small Image ,,,, Hide Image .
function bulbToggler( id , element  ){
    if(id == 1){
        element.src = "./img/on.png";
    }else{
        element.src = "./img/off.png";
    }
}

function turnOn(element) {
    var img = document.getElementById('bulb-img');
    img.src = "./img/on.png";
    element.innerHTML = "Double Clcik to Turn Off The Bulb"
    
}

function turnOff(element) {
    var img = document.getElementById('bulb-img');
    img.src = "./img/off.png";
    element.innerHTML = "Clcik to Turn on The Bulb"
}
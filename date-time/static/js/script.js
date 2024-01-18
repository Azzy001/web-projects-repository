const title = document.getElementById("page-title");
title.style.color = "gold";
title.style.background = "black";
document.getElementsByTagName

function DateTime() {
    // return current date and time
    var today = new Date();

    var day = today.getDay();
    console.log(day);

    // array of day names
    var daylist = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    // display current day
    // alert("Today is " + daylist[day])

    // return hour, mins and secs
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    // return to console
    console.log("HOUR ", hour);
    console.log("MINUTE ", minute);
    console.log("SECOND ", second);

    // determine if AM or PM
    var prepand = (hour >= 12) ? " PM " : " AM ";
    console.log("AM or PM: ", prepand);

    // display current date and time
    console.log("current date and time: " +
        hour +
        prepand + " : " +
        minute + " : " +
        second);
}

function SwitchValues(){
    var a = "3";
    var b = "8";
    var c;
    console.log("Before switching");
    console.log("a: ", a);
    console.log("b: ", b);

    c = a;
    a = b;
    b = c;
    console.log("After switching");
    console.log("a: ", a);
    console.log("b: ", b);
}

function PrintView(){
    window.print();
}
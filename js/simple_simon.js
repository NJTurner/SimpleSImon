/**
 * Created by NicholasTurner on 11/4/16.
 */
'use strict';

setTimeout(function () {
    $('.homer').addClass('color-me-in');
}, 3000);

//---------------------START GAME--------------------------------
//When called, resets level, hides the start button, and calls function startGame
$('#start').click(function () {
    reset();
    $("#start").hide(); //hides start button on click
    startGame();
});
//Function calls addPattern and startSimon
function startGame() {
    addPattern();
    startSimon();
}

//-----------------------SIMON BASIC FUNCTIONS---------------------------
var pattern = [];
var level;
var i = 0;
var simonVariable = true;

//function that adds initial random # for pattern
function addPattern() {
    var patternValue = random(1, 4);
    pattern.push(patternValue);
}

//times out the flashing between squares, calls flashSquare and checkClicks
function startSimon() {
    $.each(pattern, function (index, element) {
        var timeDelay = index * 600;
        setTimeout(function () {
            flashSquare(element);
        }, timeDelay);
    });
    checkClicks();
}

//activates and sets parameters for animations by using attribute data-numbers,
function flashSquare(item) {
    console.log(item);
    $('[data-number="' + item + '"]').animate({
        opacity: 0.2
    }, 300).animate({
        opacity: 1
    }, 200);
    //animation takes .5 seconds
}

//Keeps track of the initial pattern and the user clicks to see if they match, if they do, it adds a level, sets i=0,
// calls addPattern and continues with the game.  if the data is entered incorrectly it sets i = 0,and calls gameOver.
function checkClicks() {
    if (simonVariable == true) {
        $('.square').click(function () {
            var simpsonID = $(this).data('number');
            if (simpsonID == pattern[i]) {
                i++;
            } else {
                i = 0;
                gameOver();
            }
            if (i == pattern.length) {
                i = 0;
                level++;
                $('#level').html('Level: ' + level);
                addPattern();
                setTimeout(startSimon, 1500);
            }
        });
    }
    simonVariable = false;
}
//----------------------------GAME OVER Function----------------------------
//When called it pops a image modal, shows the start button, clears the pattern, shows highest level achieved
function gameOver() {
    $("#dialog").dialog({
        autoOpen: false,
        resizable: false,
        modal: true,
        width: 775,
        height: 500,
        option: "closeOnEscape",
        draggable: false,
        overlay: "background-color: red; opacity: 0.5"
    });
    $("#gameover").removeAttr("hidden");
    $("#dialog").dialog("open");
    $("#start").show(2000);//start button reappears when game over
    pattern = [];
    level = level - 1;
}


//------------------------RESET LEVEL------------------------------------
//Changes the Level back to 1 when called.
function reset() {
    level = 1;
    pattern = [];
    $('#level').html('Level: ' + level);
}

//------------------------RANDOM NUMBER GENERATOR--------------------------
function random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

//---------------------------AUDIO---------------------------------------
//Click events for each character audio function.  Looking to simplify or consolidate
//HOMER
$(document).ready(function () {
    var sound = document.createElement("audio");
    sound.src = "audio/homer.wav";
    sound.volume = 0.10;
    sound.autoPlay = false;
    sound.preLoad = true;

    $("#homer").click(function () {
        sound.play();
    });
});
//MARGE
$(document).ready(function () {
    var sound = document.createElement("audio");
    sound.src = "audio/marge.wav";
    sound.volume = 0.10;
    sound.autoPlay = false;
    sound.preLoad = true;

    $("#marge").click(function () {
        sound.play();
    });
});
//LISA
$(document).ready(function () {
    var sound = document.createElement("audio");
    sound.src = "audio/lisa.wav";
    sound.volume = 0.10;
    sound.autoPlay = false;
    sound.preLoad = true;

    $("#lisa").click(function () {
        sound.play();
    });
});
//BART
$(document).ready(function () {
    var sound = document.createElement("audio");
    sound.src = "audio/bart.wav";
    sound.volume = 0.10;
    sound.autoPlay = false;
    sound.preLoad = true;

    $("#bart").click(function () {
        sound.play();
    });
});

//START GAME
$(document).ready(function () {
    var sound = document.createElement("audio");
    sound.src = "audio/startbutton.wav";
    sound.volume = 0.10;
    sound.autoPlay = false;
    sound.preLoad = true;

    $("#start").click(function () {
        sound.play();
    });
});

//----------------------------FLASH/CLICK IMAGES----------------------------------
//Attempt to change the animations of squares to a separate image.
$('#homer').click(function () {
    var image = $("#homerimage");
    image.fadeOut('fast', function () {
        image.attr('src', 'img/homerflash.png');
        image.fadeIn('fast');
        image.fadeOut('fast', function () {
            image.attr('src', 'img/homer1.png');
            image.fadeIn('fast');
        });
    });
});

$('#marge').click(function () {
    var image = $("#margeimage");
    image.fadeOut('fast', function () {
        image.attr('src', 'img/margeflash.png');
        image.fadeIn('fast');
        image.fadeOut('fast', function () {
            image.attr('src', 'img/marge1.png');
            image.fadeIn('fast');
        });
    });
});

$('#lisa').click(function () {
    var image = $("#lisaimage");
    image.fadeOut('fast', function () {
        image.attr('src', 'img/lisaflash.png');
        image.fadeIn('fast');
        image.fadeOut('fast', function () {
            image.attr('src', 'img/lisa1.png');
            image.fadeIn('fast');
        });
    });
});

$('#bart').click(function () {
    var image = $("#bartimage");
    image.fadeOut('fast', function () {
        image.attr('src', 'img/bartflash.png');
        image.fadeIn('fast');
        image.fadeOut('fast', function () {
            image.attr('src', 'img/bart1.png');
            image.fadeIn('fast');
        });
    });
});

//----------------------------------------------CURSOR---------------------------------
var colour = "#7CCDE4";
var sparkles = 50;
var x, ox = 400;
var y, oy = 300;
var swide = 800;
var shigh = 600;
var sleft, sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
    if (document.getElementById) {
        var i, rats, rlef, rdow;
        for (i = 0; i < sparkles; i++) {
            rats = createDiv(3, 3);
            rats.style.visibility = "hidden";
            document.body.appendChild(tiny[i] = rats);
            starv[i] = 0;
            tinyv[i] = 0;
            rats = createDiv(5, 5);
            rats.style.backgroundColor = "transparent";
            rats.style.visibility = "hidden";
            rlef = createDiv(1, 5);
            rdow = createDiv(5, 1);
            rats.appendChild(rlef);
            rats.appendChild(rdow);
            rlef.style.top = "2px";
            rlef.style.left = "0px";
            rdow.style.top = "0px";
            rdow.style.left = "2px";
            document.body.appendChild(star[i] = rats);
        }
        set_width();
        sparkle();
    }
};

function sparkle() {
    var c;
    if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++) if (!starv[c]) {
            star[c].style.left = (starx[c] = x) + "px";
            star[c].style.top = (stary[c] = y) + "px";
            star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
            star[c].style.visibility = "visible";
            starv[c] = 50;
            break;
        }
    }
    for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
    }
    setTimeout("sparkle()", 40);
}

function update_star(i) {
    if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < shigh + sdown) {
            star[i].style.top = stary[i] + "px";
            starx[i] += (i % 5 - 2) / 5;
            star[i].style.left = starx[i] + "px";
        }
        else {
            star[i].style.visibility = "hidden";
            starv[i] = 0;
        }
    }
    else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible"
    }
}

function update_tiny(i) {
    if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
    }
    if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < shigh + sdown) {
            tiny[i].style.top = tinyy[i] + "px";
            tinyx[i] += (i % 5 - 2) / 5;
            tiny[i].style.left = tinyx[i] + "px";
        }
        else {
            tiny[i].style.visibility = "hidden";
            tinyv[i] = 0;
        }
    }
    else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
    set_scroll();
    y = (e) ? e.pageY : event.y + sdown;
    x = (e) ? e.pageX : event.x + sleft;
}

function set_scroll() {
    if (typeof(self.pageYOffset) == "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
    }
    else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
    }
    else {
        sdown = 0;
        sleft = 0;
    }
}

window.onresize = set_width;
function set_width() {
    if (typeof(self.innerWidth) == "number") {
        swide = self.innerWidth;
        shigh = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientWidth) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
    }
    else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
    }
}

function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    div.style.backgroundColor = colour;
    return (div);
}

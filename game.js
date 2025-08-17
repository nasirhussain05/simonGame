var started=!1;$(document).on("keypress touchstart",function(){if(!started){$("#level-title").text("Level 1");started=!0;next_sequence()}});
var level=0;var game_pattern=[];var button_color=["red","blue","green","yellow"];var userClickedPattern=[];$(".btn").click(function(){var userchosencolor=$(this).attr("id");userClickedPattern.push(userchosencolor);playSound(userchosencolor);animatePress(userchosencolor);checkAnswer(userClickedPattern.length-1)});function checkAnswer(currentlevel){if(game_pattern[currentlevel]==userClickedPattern[currentlevel]){console.log("success");if(game_pattern.length==userClickedPattern.length){setTimeout(function(){next_sequence()},1000)}}else{playSound("wrong");$("body").addClass("game-over");$("h1").text("Game Over, Press Any Key or touch on screen to Restart");setTimeout(function(){$("body").removeClass("game-over")},200);StartOver()}}
function next_sequence(){userClickedPattern=[];level++;$("#level-title").text("Level"+level);var random_no=Math.floor(Math.random()*4);var randomChosenColor=button_color[random_no];$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);game_pattern.push(randomChosenColor);playSound(randomChosenColor)}
function playSound(name){var audio=new Audio("sounds/"+name+".mp3");audio.play()}
function animatePress(currentcolor){$("#"+currentcolor).addClass("pressed");setTimeout(function(){$("#"+currentcolor).removeClass("pressed")},100)}
function StartOver(){level=0;game_pattern=[];started=!1}








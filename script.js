var css = document.querySelector("output");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var random = document.querySelector("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function generate() {

	var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
	
	function populate(a) {
	  for ( var i = 0; i < 6; i++ ) {
		var x = Math.round( Math.random() * 14 );
		var y = hexValues[x];
		a += y;
	}
	return a;
}

	
	var newColor1 = populate('#');
	var newColor2 = populate('#');
	var angle = Math.round( Math.random() * 360 );
	
	var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
	
	document.getElementById("gradient").style.background = gradient;
	document.getElementById("output").innerHTML = gradient;
	
}
  
document.onload = generate();

// function get_random_color() {
// 	var letters = "0123456789ABCDEF";
// 	var color = '#'; 
// 	for (var i = 0; i < 6; i++)
// 	bgColor = color += letters[(Math.floor(Math.random() * 16))]; 
// console.log(bgColor);	
// }


// function new_color() {
// 	color1.addEventListener("input", get_random_color);
// 	color2.addEventListener("input", get_random_color);

// 	// body.style.background = 
// 	// "linear-gradient(to right, " 
// 	// + get_random_color(color1.value)
// 	// + ", " 
// 	// +  get_random_color(color2.value)
// 	// + ")";
// 	// color1 = get_random_color(".color1");
// 	// color2 = get_random_color(".color2");

// 	css.textContent = body.style.background + ";";
// }





// 		var x = Math.floor(Math.random() * 256);
	// var y = Math.floor(Math.random() * 256);
	// var z = Math.floor(Math.random() * 256);
	// var bgColor = "rgb(" + x + "," + y + "," + z + ")";

// random.addEventListener("button", get_random_color);

// color1 = setGradient().Math.floor(Math.random() * 256);
	// color2 = setGradient().Math.floor(Math.random() * 256);
	
    // var color = "";
    // for(var i = 0; i < 3; i++) {
    //     var sub = Math.floor(Math.random() * 256).toString(16);
    //     color += (sub.length == 1 ? "0" + sub : sub);
    // }
    // return "#" + color;

// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);
  
//     document.body.style.background = bgColor;
//     }

// random_bg_color();

// __________________________________________________________________________

// var randombg = document.setRandomColor("gradient");
// randombg.setRandomColor("button", setGradient);

// function setRandomColor() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// 	// Math.floor(Math.random()
// }

// function getRandomColor() {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 	  color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
//   }
  
//   function setRandomColor() {
// 	$("#colorpad").css("background-color", getRandomColor());
//   }
// var url = "https://raw.githubusercontent.com/VVB2/pokemon.json/master/pokedex.json";
var url = "https://github.com/VVB2/pokemon.json/blob/master/pokedex.json";

var html_out = "<div class='container-fluid'>";

function scores(power) {
  return power.Attack;
}

function addzeros(number, length) {
  var num = "" + number;
  while (num.length < length) {
    num = '0' + num;
  }
  return num;
}


function spaceToUnderscore(pokemonName) {
  return pokemonName.replace(/\s/gi, "_");
}
Object.keys(data).forEach(function(k) {
  var power = data[k].base;
  if (k % 3 == 0) {
    html_out += "<br><div class='row'>";
  }
  if (data[k].type[1] == undefined) {
    data[k].type[1] = "<br>";
  }
  // var img_tag="<img src='../pokemon_data/images/"+addzeros(parseInt(k)+1,3)+spaceToUnderscore(data[k].name.english)+".png' alt='pokemon image' </img>";
  // console.log(img_tag);
  var img = "../sprites/" + addzeros(parseInt(k) + 1, 3) + "MS.png";
  // console.log(img);
  html_out += "<div id='" + k + "'class='col-sm-3'> <p>Name: " +
    data[k].name.english + "</p><p>Attack Type: " + data[k].type[0] + "<br>" + data[k].type[1] +
    "</p><button class = 'btn btn-success'> <img src='"+img+"'></img></button> </div>";
  // html_out+="<div class='col-sm-3'> <p>Name: "+
  // data[k].name.english + "</p><p>Attack Type: " +data[k].type + "</p><p>Score: "+ scores(power) +
  // "</p><button class = 'btn btn-success'> More</button> </div> </div>";
  if (k % 3 == 2) {
    html_out += "</div>"
  }
});


console.log(html_out);
$(".out").append(html_out + "</div>");
Object.keys(data).forEach(function(k) {
  var img_tag = "../images/" + addzeros(parseInt(k) + 1, 3) + spaceToUnderscore(data[k].name.english) + ".png";
  $('#' + k).css('background', 'url(' + img_tag + ')');
  // document.getElementById('#'+k).style.color = 'red';
  console.log(img_tag);
});
// document.getElementById('#'+k).style.color='red';
// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   //    console.log(data);
//   //    var output=$(".out");
//   var html_out = " ";
//
//   function scores(power) {
//     return power.Attack;
//   }
//   Object.keys(data).forEach(function(k) {
//     //    console.log(data[k]);
//     var power = data[k].base;
//     console.log(power);
//     html_out += "<div class='container'> <p class='name'>Name:</p>"+ data[k].name.english + "<br>" + data[k].type + "<br>" + scores(power) + "<button class = 'btn-success'>Learn More</button> </div>";
//   });
//
//   $(".out").append(html_out);
// }
//
// getData();
//console.log(pokemon);

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
    data[k].type[1] = " ";
  } else {
    data[k].type[1] = "," + data[k].type[1];
  }
  // var img_tag="<img src='../pokemon_data/images/"+addzeros(parseInt(k)+1,3)+spaceToUnderscore(data[k].name.english)+".png' alt='pokemon image' </img>";
  // console.log(img_tag);
  var img = "images/pokemon-sprites/" + addzeros(parseInt(k) + 1, 3) + "MS.png";
   var info = data[k].base;
  // console.log(img);
  html_out += "<div id='" + k + "'class='col-sm-3'><div id = 'f1_container' ><div id = 'f1_card' class = 'shadow1'><div class = 'front face' ><p class = 'para'>Name: " +
    data[k].name.english + "</p><p class = 'para'> Type: " + data[k].type[0] + data[k].type[1] +"</div>"+
    "<div class = 'back face center'></p>HP : "+info.HP+
    "<br> Attack: "+info.Attack+
    "<br> Special Attack : "+info.specialAttack+
    " <br> Special Defense: "+info.specialDefense+
    "<br> Speed: "+info.Speed+
    "<button class = 'btn btn-success'> <img src='" + img + "'></img></button></div></div></div></div>";
    // <div id="f1_container">
    // <div id="f1_card" class="shadow">
    //   <div class="front face">
    //     <img src="/images/Windows%20Logo.jpg"/>
    //   </div>
    //   <div class="back face center">
    //     <p>This is nice for exposing more information about an image.</p>
    //     <p>Any content can go here.</p>
    //   </div>
    // </div>
    // </div>

  if (k % 3 == 2) {
    html_out += "</div>"
  }
});

$(".out").append(html_out + "</div>");
Object.keys(data).forEach(function(k) {
  var img_tag = "images/pokemon-images/" + addzeros(parseInt(k) + 1, 3) + spaceToUnderscore(data[k].name.english) + ".png";
  $('#' + k).css('background', 'url(' + img_tag + ')');
  // document.getElementById('#'+k).style.color = 'red';
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

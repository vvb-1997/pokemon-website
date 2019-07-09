// var url = "https://raw.githubusercontent.com/VVB2/pokemon.json/master/pokedex.json";
var url = "https://github.com/VVB2/pokemon.json/blob/master/pokedex.json";

var html_out = "<div class='container-fluid'>";
function scores(power) {
    return power.Attack;
  }
Object.keys(data).forEach(function(k) {
    var power = data[k].base;
    if(k%3==0){
      html_out += "<div class='row'>";
    }
    html_out+="<div class='col-sm-3'> <p>Name: "+
    data[k].name.english + "</p><p>Attack Type: " +data[k].type + "</p><p>Score: "+ scores(power) +
    "</p><button class = 'btn btn-success'> More</button> </div> </div>";
    if(k%3==2){
      html_out+="</div>"
    }
});
console.log(html_out);
$(".out").append(html_out+"</div>");
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

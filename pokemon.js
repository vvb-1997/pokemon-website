// var url = "https://raw.githubusercontent.com/VVB2/pokemon.json/master/pokedex.json";
var url = "https://github.com/VVB2/pokemon.json/blob/master/pokedex.json";

var html_out = "<div id='main_div' class='container-fluid'>";

function ImageSrc(k) {
  return ("images/pokemon-images/" + addzeros(parseInt(k) + 1, 3) + spaceToUnderscore(data[k].name.english) + ".png");
}

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

// console.log(data);
function spaceToUnderscore(pokemonName) {
  return pokemonName.replace(/\s/gi, "_");
}
Object.keys(data).forEach(function(k) {
  // console.log(k);
  var power = data[k].base;
  if (k % 3 == 0) {
    html_out += "<br><div class='row'>";
  }
  if (data[k].type[1] == undefined) {
    data[k].type[1] = " ";
  } else {
    data[k].type[1] = "," + data[k].type[1];
  }

  var info = data[k].base;

  html_out += "<div id='" + spaceToUnderscore(data[k].name.english) + "'class='col-md-3'><p class = 'para1'><b>" +
    data[k].name.english + "</p><p class = 'para'> " + info.HP +
    " HP </p></b>" + "<div class='col-md-12'><img src='" + ImageSrc(k) + "' alt = '" + data[k].name.english + " image'></img></div>" +
    "<br>" +
    "<div class = 'para2' id = 'more'>" +
    "<p class= 'overlay'>Type: " + data[k].type[0] + data[k].type[1] +
    "<br> Attack: " + info.Attack +
    "<br> Special Attack : " + info.specialAttack +
    " <br> Special Defense: " + info.specialDefense +
    "<br> Speed: " + info.Speed +
    "</p></div></div>";
  $(document).ready(function() {
    $("#info").click(function() {
      $("#more").toggle(1000);
    });
  });
  if (k % 3 == 2) {
    html_out += "</div>";
  }
  $(document).ready(function() {
    $(".col-md-3").click(function() {
      $(".para2").animate({
        left: '250px'
      });
    });
  });

  //   if (data[k].type[0]=="Normal") {
  // document.getElementsByClassName('btn-success').style.backgroundColor = "red";
  //  }
});
// console.log(html_out);
$(".out").append(html_out + "</div>");
Object.keys(data).forEach(function(k) {
  var img_tag = "images/pokemon-images/" + addzeros(parseInt(k) + 1, 3) + spaceToUnderscore(data[k].name.english) + ".png";
  $('#' + k).css('background', 'url(' + img_tag + ')');

});
names = []
Object.keys(data).forEach(function(k) {
  names.push(data[k]["name"]["english"]);
});


$(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
      response($.map(names, function(item) {
        if (matcher.test(item)) {
          $("#main_div").children().hide();
          // console.log("#"+spaceToUnderscore(item));
          $("#" + spaceToUnderscore(item)).parent().show();
          return (item)
        }
      }));
    }
  });
});

// var url = "https://raw.githubusercontent.com/VVB2/pokemon.json/master/pokedex.json";
var url = "https://github.com/VVB2/pokemon.json/blob/master/pokedex.json";

var mydata=pokemon_data;

var values= divMaker(mydata);
var html_out = values.html_out;
var names = values.names;

$(".out").append(html_out + "</div>");

Object.keys(mydata).forEach(function(k) {
  var img_tag = "images/pokemon-images/" + addzeros(parseInt(k) + 1, 3) + spaceToUnderscore(mydata[k].name.english) + ".png";
  $('#' + k).css('background', 'url(' + img_tag + ')');
});

$(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
      var items_list=[];
      response($.map(names, function(item) {
        if (matcher.test(item)) {
          console.log(item);
          // $("#main_div").children().hide();
          // $("#" + spaceToUnderscore(item)).parent().show();
          items_list.push(item);
          return (item)
        }
      }));
      pushData(items_list);
    }
  });
});

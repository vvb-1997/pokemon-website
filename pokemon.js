// var url = "https://raw.githubusercontent.com/VVB2/pokemon.json/master/pokedex.json";
var url = "https://github.com/VVB2/pokemon.json/blob/master/pokedex.json";

var mydata=pokemon_data;//.slice(0,50);

var values= divMaker(mydata);
var html_out = values.html_out;
var names = values.names;

$(".out").append(html_out + "</div>");

Object.keys(mydata).forEach(function(k) {
  var img_tag = "images/pokemon-images/" + addzeros(parseInt(k) + 1, 3) + spaceToUnderscore(mydata[k].name.english) +
   ".png";
  $('#' + k).css('background', 'url(' + img_tag + ')');
});

$(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
      var items_list=[];
      response($.map(names, function(item) {
        if (matcher.test(item)) {
          // $("#" + spaceToUnderscore(item)).parent().show();
          items_list.push(item);
          return (item)
        }
      }));
      dataids=pushData(items_list);
      console.log(dataids);
      $('#main_div').remove();
      var values = divMaker(dataids);
      $(".out").append(values.html_out + "</div>");
    }
  });
});

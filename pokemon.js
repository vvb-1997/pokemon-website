// var url = "https://raw.githubusercontent.com/VVB2/pokemon.json/master/pokedex.json";
var url = "https://github.com/VVB2/pokemon.json/blob/master/pokedex.json";

var mydata=pokemon_data;//.slice(0,50);

var org_values= divMaker(mydata);
var html_out = org_values.html_out;
var names = org_values.names;

$(".out").append(html_out + "</div>");
$(".container-fluid").pagify(45, ".single-item");

$(function() {
  $("#info").click(function() {
    $("#more").toggle(1000);
  });
  $('#search').change(function(){
    console.log("chnage tri");
    if($('#search').val() == ""){
      $('#main_div').remove();
      $('.pagination').remove();
      if($('.error').length){
        $('.error').remove();
      }
      // values = divMaker(mydata);
      $(".out").append(org_values.html_out + "</div>");
      $(".container-fluid").pagify(45, ".single-item");
    }
    else{
      $("#search").autocomplete({
        source: function(request, response) {
          console.log(request.term);
          var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term.trim()), "i");
          var items_list=[];
          response($.map(names, function(item) {
            if (matcher.test(item)) {
              items_list.push(item);
              return (item)
            }
          }));
          $('#main_div').remove();
          $('.pagination').remove();
          dataids=pushData(items_list);

          console.log($('#search').val().trim());

          if(items_list.length){
            if($('.error').length){
              $('.error').remove();
            }
            var values = divMaker(dataids);
            $(".out").append(values.html_out + "</div>");
            $(".container-fluid").pagify(45, ".single-item");
          }
          else{
            if($('.error').length){
              $('.error').remove();
            }
            $(".out").append("<div class= 'error' ><p>No Records for " + $('#search').val() + "</p></div>");
          }
        }
      });
    }
  });
});

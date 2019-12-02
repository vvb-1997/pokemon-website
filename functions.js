function ImageSrc(data_obj) {
  return ("images/pokemon-images/" + addzeros(parseInt(data_obj.id), 3) + spaceToUnderscore(data_obj.name.english) + ".png");
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

function spaceToUnderscore(pokemonName) {
  return pokemonName.replace(/\s/gi, "_");
}

function divMaker(data){
  var html_out = "<div id='main_div' class='container-fluid'>";
  var names=[];
  Object.keys(data).forEach(function(k) {
    var power = data[k].base;
    if (k % 3 == 0) {
      html_out += "<div class='row'>";
    }
    if (data[k].type[1] == undefined) {
      data[k].type[1] = " ";
    } else {
      data[k].type[1] = " " + data[k].type[1];
    }

    var info = data[k].base;

    html_out += "<div id='" + spaceToUnderscore(data[k].name.english) + "'class='col-md-3 single-item'><p class = 'para1'><b>" +
      data[k].name.english + "</p><p class = 'para'> " + info.HP +
      " HP </p></b>" + "<div class='col-md-12'><img src='" + ImageSrc(data[k]) + "' alt = '" + data[k].name.english +
      " image'></img></div>" +
      "<br>" +
      "<div class = 'para2'>" +
      "<p class= 'overlay'>Type: " + data[k].type[0] + data[k].type[1] +
      "<br> Attack: " + info.Attack +
      "<br>Defense: " + info.specialDefense +
      "<br> Speed: " + info.Speed +
      "</p></div></div>";

    // $(document).ready(function() {
    //
    //   $('#search').change(function(){
    //     console.log("search");
    //     if($('#search').val() == ""){
    //       $('#main_div').remove();
    //       $('.pagination').remove();
    //       if($('.error').length){
    //         $('.error').remove();
    //       }
    //       console.log(mydata);
    //       var values = divMaker(mydata);
    //       $(".out").append(values.html_out + "</div>");
    //       $(".container-fluid").pagify(45, ".single-item");
    //     }
    //   });
    // });

    if (k % 3 == 2) {
      html_out += "</div>";
    }
    names.push(data[k]["name"]["english"]);
  });
  return {
        html_out: html_out,
        names: names,
    };
}

function pushData(names){
  function getKeys(object, value) {
    var objectsID = [];
    for (var val in value){
      for (var obj in object){
        if(value[val]==object[obj].name.english){
          objectsID.push(object[obj]);
          break;
        }
      }
    }
    return objectsID;
  }
  return getKeys(mydata,names);
}

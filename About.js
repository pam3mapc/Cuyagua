$(document).ready(function(){
  $("#button2").click(function(){
    $("#Spanish").show();
  });
});

$(document).ready(function(){
  $("#button2").click(function(){
    $("#English").hide();
  });
});

$(document).ready(function(){
  $("#button1").click(function(){
    $("#English").show();
  });
});

$(document).ready(function(){
  $("#button1").click(function(){
    $("#Spanish").hide();
  });
});

$(document).ready(function(){
  $("#check").click(function(){
    setTimeout(function () {
      $("#English").toggle();
    }, 100);
  });
});

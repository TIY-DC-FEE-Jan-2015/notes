$(".acc-header").on("click", function(evt){

  var $clickedHeader = $(this);

  $("li").removeClass("active");

  $clickedHeader.parent().addClass("active");

});
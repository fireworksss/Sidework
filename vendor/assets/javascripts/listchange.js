
$(document).ready(function(){
  $("p#hot24").mouseover(function(){
    $("div#hot24").slideDown();
	$("div#allart").slideUp();
  });
});

$(document).ready(function(){
  $("p#allart").mouseover(function(){
    $("div#allart").slideDown();
	$("div#hot24").slideUp();
  });
});


$(document).ready(function(){
  var fullHeight=0;
  var pHeight=0;
  var divHeight=0;
  pHeight=$("p").outerHeight();
  fullHeight=$(window).innerHeight();
  divHeight=fullHeight-pHeight*2-20-$("h1").outerHeight()-28;
  $("div").css("height",divHeight);
  //alert(divHeight);
});

$(document).ready(function(){
  var pWidth =0;
  var fullHeight=0;
  pWidth =$("p").innerWidth();
  fullHeight=$(window).innerHeight();
  $("input#article_title").css("width", pWidth); 
  $("textarea#article_text").css("width", pWidth); 
  $("textarea#article_text").css("height", fullHeight*2/3); 
});

var width = document.getElementById('myPhoto').offsetWidth;
document.getElementById('myPhoto').style.height = width+'px'
window.onresize = function(event) {
    var width = document.getElementById('myPhoto').offsetWidth;
    document.getElementById('myPhoto').style.height = width+'px'
};
$(".bg").interactive_bg({
   strength: 25,
   scale: 1.05,
   animationSpeed: "100ms",
   contain: true,
   wrapContent: false
 });
 $(window).resize(function() {
	$(".wrapper > .ibg-bg").css({
		width: $(window).outerWidth(),
		height: $(window).outerHeight()
	})
})
$(function(){
  $("#typedHeading").typed({
	strings: ["Welcome! ^1000", "I am Max ^700", "Max Valetov"],
	typeSpeed: 50,
	backDelay: 500
  });
});
$(function(){
  $("#typedSubheading").typed({
	strings: ["A bit about myself... ^700", "I am successful student ^700", "skilful web-designer ^700", "and ^1200 available for hiring", "<i class='fa fa-angle-down'></i> Find out more about me <i class='fa fa-angle-down'></i>"],
	startDelay: 7000,
	contentType: 'html',
	typeSpeed: 50,
	backDelay: 500
  });
});

var thePhoto = $(".myPhoto").css('background-image');
$( ".plate" ).hover(
  function() {
    var plateBG = $(this).css('background-color');
	$(".myPhoto").addClass('myPhotoHovered');
	$(".myPhoto").css({'background-image':'url(bg.jpg)', 'background-color':plateBG});
	var icon = $(this).find('.icon').html();
	$(".myPhoto").html(icon);
  }, function() {
    $(".myPhoto").removeClass('myPhotoHovered');
	$(".myPhoto").css({'background-image':thePhoto, 'background-color':'transparent'});
	$(".myPhoto").html('');
  }
);
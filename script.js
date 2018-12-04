
console.log('yay works')

$('#list').submit(function(e){
	e.preventDefault();
	var listItem = $('#thingToDo').val();
	var newItem = $('<li><button class="x">X  </button>').append(listItem);
	$('ul').first().append(newItem);

});

$('ul').on('click', 'button', function(){
	this.parentNode.remove();	
});



$('body').css({"background-color": "#DFEAF5", "font-family": "'Shadows Into Light'"})
$('.form').css({"height": "500px", "width": "300", "margin": "0 auto"})
$('h1').css({"font-size": "46px", "text-decoration": "underline"})
$('ul').css({"font-size": "26px", "list-style-type": "none"})
$('#thingToDo').css({"font-family": "'Shadows Into Light", "font-size": "26px"})
$('#add').css({"font-size": "20px"})


$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
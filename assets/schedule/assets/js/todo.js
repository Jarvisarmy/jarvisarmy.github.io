$("#list").on("click", "li", function(){
	$(this).toggleClass("completed");
});


$("#list").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
})


$("#input[type=text]").on("keypress", function(event){
	if (event.which == 13) {
		var input = $(this).val();
		$("#list").append("<li class='task'><span class='delete'><i class='far fa-trash-alt'></i></span> "
			+input + "</li>");
		$(this).val("")
	}

});


$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle();
})

function attachCardHand () {
	$(".card").on("click", function() {
		$(this).children().toggle();
		console.log("click");
	})	
}

$( document ).ready( function () {
	var name = $("#firstName").val()+" "+$("#lastName").val();
	var description = $("#description").val();
	$( ".back" ).hide();
	attachCardHand();

	//Creates debugg cards
	//createDebugCards();

	$( document ).on("click", ".card",function() {
		$(this).children().toggle();
	})	

	$("#submit").click( function() {
		getValues();
		makeCard();
		return false;
	})

	//Flips the card on click *BROKEN*
	function flip () {
		$(this).children().hide();
		console.log( $(this).attr("class")+$(this).attr("") );
	}

	//CARD CREATING FUNCTIONS//
	//Creates a card in div
	function makeCard() {
		$("#cards").append( createCard(name, description) );
		//$( ".back" ).hide();
	}

	//Gets values and places them in the correct variables
	function getValues () {
		name = $("#firstName").val()+" "+$("#lastName").val();
		description = $("#description").val();
	}

	//Default cards pop up upon page load for debugging and testing.
	// function createDebugCards () {
	// 	name = "Tom Brady";
	// 	description = "QB of the New England Patriots";
	// 	makeCard();
	// 	name = "Aaron Rodgers";
	// 	description = "Best QB today"
	// 	makeCard();
	// 	name = "Peyton Manning"
	// 	description = "QB guy"
	// 	makeCard();
	// }
})

//Creates a card using the inputted variables.
function createCard (n, d) {
	var app = "<div class='card'><div class='front'><h1>"+n+"</h1><p></p></div><p class='back'>"+d+"</p></div>"
	return app;
}

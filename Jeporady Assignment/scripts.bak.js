function showModal(currentQuestion) {
	var modalID = $(currentQuestion).closest('.cat-question').attr('id');

	if (!$("#data-team-1").attr("class", "hide") ) {
		var team1 = $("#data-team-1").find("team-name").text();
		alert(team1);
		// $("#" + modalID).find("#award-points").html("<p>" + team1 + "</p>");
	}

	if (!$("#data-team-2").attr("class", "hide")) {
		var team2 = $("#data-team-2").find("team-name").text();
		// $("#" + modalID).find("#award-points").html("<p>" + team2 + "</p>");
	}
	

	var operationElement = $('#' + modalID).find('.modal');
	operationElement.attr('style', 'display:block'); 
}

function validateForm() {
	var numCatagoriesSelected = $("#catagories-list").find("input:checkbox:checked").length;
	
	var team1 = escape( $("#team1").val() );
	var team2 = escape( $("#team2").val() );
	var team3 = escape( $("#team3").val() );
	var team4 = escape( $("#team4").val() );

	if (numCatagoriesSelected != 5) {
		alert("You must select exactly 5 categories.");
	} else if(team1 == "" || team2 == "") {
		alert("At least two team names are required.");
	} else {
		alert("Get question data.");
	}
}

// function displayModal() {
// 	modal.style.display = "block";
// }

// function showAnswer() {
// 	modal.find(".question").style.display = "none;"
// }

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
// 	modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// 	modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }
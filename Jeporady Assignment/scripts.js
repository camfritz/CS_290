$(document).ready(function() {
	$(HomePage).show();
	$(BoardGame).hide();
	$(cat1).hide();
	$(cat2).hide();
	$(cat3).hide();
	$(cat4).hide();
	$(cat5).hide();
	$(cat6).hide();
	$('.cell_clean').hide();
		/*
		$("input[name='ckb']").change(function() {
			var maxAllowed = 5;
			var cnt = $("input[name='ckb']:checked").length;
			if(cnt < 5 || cnt > 5) {
				$(this).prop("checked", "");
				alert('You must select ' + maxAllowed + ' categories');
				//alert('You must select 5 categories.');
			}
		});
		*/
	});


	// $(NextButton).click(function() {
	// 	//validateBox();
	// 	validateform();
	// });

	function validateform() {
		var field1 = document.forms["myForm"]["Team1"].value;
		var field2 = document.forms["myForm"]["Team2"].value;
		// var categoriesSelected = $("#form1").find("input:checkbox:checked").length;
		if ($("#form1").find("input:checkbox:checked").length != 5) {
			alert("You must select exactly 5 categories.");
		} else if (field1 == "" || field2 == "") {
			alert("At least two teams are required");
		} else {
			getQuestions();
		}
	}

	/*
	function checked() {
		var check = 0;
		$("input:checkbox").each(function() {
			if($(this).is(':check')) {
				check++;
			}
		});
		if(check < 5) {
			alert("Chose more selections");
		}
				
	}
	*/
	/*
	function validateBox() {
		var tags = document.getElementByName('ckb');
		var total = 0;

		for(var i = 0; i < tags.length; i++) {
			if(tags[i].checked) {
				++total;
			}
			if(total < 5) {
				alert("Select 5 categories.");
				tags[i].checked = false;
				return false;
			} else {
				return true;
			}
		}
	}
	*/
	
	function getQuestions() {
		//$("[id^=t0]").show();
		var c1 = ["t00", "t10", "t20", "t30", "t40"];
		var c2 = ["t01", "t11", "t21", "t31", "t41"];
		var c3 = ["t02", "t12", "t22", "t32", "t42"];
		var c4 = ["t03", "t13", "t23", "t33", "t43"];
		var c5 = ["t04", "t14", "t24", "t34", "t44"];
		var c6 = ["t05", "t15", "t25", "t35", "t45"];

		if(document.getElementById("StudentLife").checked == true) {
			$(cat1).show();
			for(var i = 0; i < 5; i++) {
				$('#' + c1[i]).show();
			}

			$.ajax({url: "https://jeopardy-game-camfritz.c9users.io/questions/StudentLife/", success: function(data) {
				alert(data[0].q_text);
			}})
		}

		if(document.getElementById("CSLife").checked == true) {
			$(cat2).show();
			for(var i = 0; i < 5; i++) {
				$('#' + c2[i]).show();
			}
			$.ajax({url: "https://jeopardy-game-camfritz.c9users.io/questions/CSLife/", success: function(data) {
				
			}})
		}

		if(document.getElementById("OtherMajors").checked == true) {
			$(cat3).show();
			for(var i = 0; i < 5; i++) {
				$('#' + c3[i]).show();
			}
			$.ajax({url: "https://jeopardy-game-camfritz.c9users.io/questions/OtherMajors", success: function(data) {

			}})
		}

		if(document.getElementById("Trends").checked == true) {
			$(cat4).show();
			for(var i = 0; i < 5; i++) {
				$('#' + c4[i]).show();
			}
			$.ajax({url: "https://jeopardy-game-camfritz.c9users.io/questions/Trends", success: function(data) {

			}})
		}

		if(document.getElementById("Professors").checked == true) {
			$(cat5).show();
			for(var i = 0; i < 5; i++) {
				$('#' + c5[i]).show();
			}
			$.ajax({url: "https://jeopardy-game-camfritz.c9users.io/questions/Professors", success: function(data) {

			}})
		}

		if(document.getElementById("gPlants").checked == true) {
			$(cat6).show();
			for(var i = 0; i < 5; i++) {
				$('#' + c6[i]).show();
			}
			$.ajax({url: "https://jeopardy-game-camfritz.c9users.io/questions/gPlants", success: function(data) {

			}})
		}

		$(HomePage).hide();
		$(BoardGame).show();
	}
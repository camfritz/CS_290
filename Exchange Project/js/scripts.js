$(document).ready(function() {
	$.ajax({
		url: "https://assignment4-sanguinius.c9users.io/findall",
		type: "GET",
		success: function(data) {
			var json = JSON.parse(data);
			var countries = json.countries;
			
			$.each(countries, function(index, val) {
				var countryName = this.name;
				$("#originCountryList").append("<option value = " + countryName + ">" + countryName + "</option>");
				$("#destinationCountryList").append("<option value = " + countryName + ">" + countryName + "</option>");
				$("#updateCountryList").append("<option value = " + countryName + ">" + countryName + "</option>");
			});

			$(exchangeFunds).show();
			$(addCountry).hide();
			$(updateCountry).hide();
		}
	});
});

//hides the addCountry and updateCountry Sections
$(exchangeFundsBtn).click(function() {
	$(exchangeFunds).show();
	$(addCountry).hide();
	$(updateCountry).hide();
});

//hides the exchangeFunds and updateCountry Sections
$(addCountryBtn).click(function() {
	$(exchangeFunds).hide();
	$(addCountry).show();
	$(updateCountry).hide();
});

//hides the exchangeFunds and addCountry Sections
$(updateCountryBtn).click(function() {
	$(exchangeFunds).hide();
	$(addCountry).hide();
	$(updateCountry).show();
});
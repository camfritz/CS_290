$(document).ready(function() {
	$(exchangeFunds).show();
	$(addCountry).hide();
	$(updateCountry).hide();
});

$(exchangeFundsBtn).click(function() {
	$(exchangeFunds).show();
	$(addCountry).hide();
	$(updateCountry).hide();
});

$(addCountryBtn).click(function() {
	$(exchangeFunds).hide();
	$(addCountry).show();
	$(updateCountry).hide();
});

$(updateCountryBtn).click(function() {
	$(exchangeFunds).hide();
	$(addCountry).hide();
	$(updateCountry).show();
});
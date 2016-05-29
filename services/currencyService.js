currInvoice.factory('currService',function(){
	var countries = ['India', 'United States', 'London'];
	
	var usdToForeignRates = {
    	'India': 1,
    	'United States' : 0.016,
    	'London' : .012
    };

    var convertCurrency = function convertCurrency(amount, selectedCountry, country) {
    	return amount * usdToForeignRates[country] / usdToForeignRates[selectedCountry];
  	};

  	return {
  		countries : countries,
  		convertCurrency, convertCurrency
  	};
});
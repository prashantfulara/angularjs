currInvoice.controller('currInvoiceCtrl', function(currService){
	var ctrl = this;
	
	ctrl.qty = 1;
	
	ctrl.cost = 10;
	
	ctrl.selectedCountry = 'India';

	ctrl.countries = currService.countries;

    ctrl.total = function total(country) {
	    return currService.convertCurrency(ctrl.qty * ctrl.cost, ctrl.selectedCountry, country);
	  };  	
});
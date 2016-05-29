describe('invoice Controller Test with mock service', function(){
	
	beforeEach(module('curInvoiceModule'));

	var scope = {};
    var currInvoiceCtrl;	
	var currService;

     beforeEach(inject(function($rootScope, $controller, _currService_) {
     	currService = _currService_;
     	scope = $rootScope.$new();
        currInvoiceCtrl = $controller('currInvoiceCtrl', {$scope: scope, currService: currService});
    }));

     it('should calculate for London price for Indian rate', function() {        
        expect(currInvoiceCtrl.total('London')).toEqual(.12);
    });
})
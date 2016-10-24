angular
  .module('app')
  .directive('onValidSubmit', ['$parse', function($parse){
    return {
      // this directive can be only used on a form.
      require: 'form',
			// one time action per form
			link: function(scope, element, attrs, form) {
				form.$submitted = false;
				// get a hold of the function that handles submission when form is valid
				var fn = $parse(attrs.onValidSubmit);

				// register DOM event handler and wire into Angular's lifecycle with scope.$apply
				element.on("submit", function(event) {
					scope.$apply(function() {
						// on submit event, set submitted to true (like the previous trick)
						form.$submitted = true;
						// if form is valid, execute the submission handler function and reset form submission state
            if (form.$valid) {
							fn(scope, { $event : event });
							form.$submitted = false;
						}
					});
				});
			}
    };
  }]);

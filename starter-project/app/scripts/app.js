window.angular.module('BlankApp', ['ngMaterial', 'ui.router'])
	.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push('RequestFailureHandler');
	}])
	.run(['$rootScope', '$mdToast', function ($rootScope, $mdToast) {
		$rootScope.showMessage = function (message) {
			$mdToast.show(
				$mdToast.simple()
				.position('top right')
				.textContent(message)
			);
		};
	}]);

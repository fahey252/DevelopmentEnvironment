window.angular.module('BlankApp').factory('RequestFailureHandler', ['$rootScope', '$q', function ($rootScope, $q) {
	var requestFailure = {
		responseError: function (error) {
			$rootScope.showMessage('Error: ' + error.data);

			return $q.reject(error);
		}
	};

	return requestFailure;
}]);

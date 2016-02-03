angular.module('quoteApp', []); //[] array of dependencies (example: injector a router)
angular.module('quoteApp')
	.factory('quoteService', [function (){
		var service = { getQuotes: function(){
			return [
				{
					author: 'Robin Williams',
				 	quote: 'No matter what people tell you, words and ideas can change the world.',
				 	rating: 5
			 	},
			 	{
				 	author: 'Yoda',
				 	quote: 'Train yourself to let go of everything you fear to lose.'
			 	},
			 	{
				 	author: 'Yoda',
				 	quote: 'Always pass on what you have learned.'
			 	},
			 	{
				 	author: 'Norman Vincent Peale',
				 	quote: 'Change your thoughts and you change your world.'
			 	},
			 	{
				 	author: 'Benjamin Franlin',
				 	quote: 'Tell me and I forget, teach me and I may remember, involve me and I learn.'
			 	}
			];
		 }};

		 return service;
	}])
	.controller('quoteController', ['$scope', 'quoteService', function($scope, quoteService){
		$scope.quotes = quoteService.getQuotes();
		$scope.author = '';
		$scope.quote = '';
		$scope.popup = false;
		$scope.addQuote = function(){
			$scope.quotes.push({
				author: $scope.author,
				quote: $scope.quote,
				rating: 0
			});
			$scope.quote = '';
			$scope.author = '';
		}
		$scope.rateIt = function(rating, quote){
			quote.rating = rating;
		}
		$scope.showIt = function(){
			$scope.popup = !$scope.popup;
			$scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
    }
    	
		


	}]);
    	



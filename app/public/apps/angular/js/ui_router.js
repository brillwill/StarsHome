app.config(["$stateProvider", "$urlRouterProvider",  function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when("", "/main");
	$stateProvider.state("main", {
		url:"/main",
		templateUrl:"pages/main.html"
	})
	.state("main.page1", {
		url:"/page1",
		templateUrl:"pages/page1.html"
	})
	.state("main.page2", {
		url:"/page2",
		templateUrl:"pages/page2.html"
	})
	.state("main.page3", {
		url:"/page3",
		templateUrl:"pages/page3.html"
	});

}]);
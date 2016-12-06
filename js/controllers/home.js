'use strict';
angular.module('portfolio')
.controller('homePage', function($scope){
	var mainImage = "/images/samplehome.jpg"
	$scope.mainImage=mainImage;
	console.log("CHECK");
})
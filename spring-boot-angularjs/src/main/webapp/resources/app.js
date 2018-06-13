
var app = angular.module( 'app', [ 'ui.grid', 'ui.grid.treeView', 'ui.grid.selection' ] );

app.controller( 'MainCtrl', function( $scope ,$http) {
	
	var self = this;
	//this.result = "";

  $scope.submit = function(appID,password){
	  
	  console.log("appID",appID);
	  context="http://localhost:8090/sample"+'/'+appID+'/'+password;
	  $http({
		    method : "GET",
		    url : context,
		  }).then(function mySuccess(response) {
			  $scope.result= response.data.appID;
		    }, function myError(response) {
		    	 console.log("goterror");
		  });
	  
  };
  
  
  
} );



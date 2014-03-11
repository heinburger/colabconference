var rsvp = angular.module('rsvp', []);

function uniqueIdGen() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

$('#rsvpForm').click(function(e){
      e.preventDefault();
      /*
      $.post('http://path/to/post', 
         $('#myForm').serialize(), 
         function(data, status, xhr){
           // do something here with response;
         });
      */
});

rsvp.controller('rsvpCtrl', function($scope, $http) {
  // $http.defaults.useXDomain = true;
  // delete $http.defaults.headers.common['X-Requested-With'];

  // Test the ajax api
  $http.get('/api/test').then(function (response) {
      console.log(response.data);
  });
  
  //initilize rsvps
  $scope.rsvps = [];

  //set some defaults
  $scope.transportations = ["driving", "bus", "plane", "walk","getting a ride","bike"];
  $scope.locations = ["Pittsburgh", "Boulder", "New York"]

  
  //rsvpTotal = some function
  $scope.rsvpCount = 0; //=rsvpTotal
  
  //functions
  //--------------------------------------------------------
  $scope.addRsvp = function() {
    var $uidd=uniqueIdGen();
    var $temps=[];
      
    $scope.rsvps[$scope.rsvpCount] = {
      uid: $uidd,
      id:$scope.rsvpCount,
      _rev:'',
      url:'',
      type:'rsvp', 
      name:$scope.rsvpName,
      email:$scope.rsvpEmail,
      description:$scope.rsvpDesc,
      image: '',
      temp: $temps,
      editImage:false, 
      active:true,
      location:$scope.rsvpLoc,
      edit:true
    };
    

     $scope.rsvpCount++;
        
  };
  $scope.rsvpEdit = function() {
    
    //emailable?
        
  };


});

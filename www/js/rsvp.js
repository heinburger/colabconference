var rsvp = angular.module('rsvp', []);
var sent = false;

function uniqueIdGen() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

$('#rsvpForm').click(function(e){
      e.preventDefault();
});

rsvp.controller('rsvpCtrl', function($scope, $http) {
  
  $scope.rsvps=[];
  $scope.rsvpLoc="Please select";  
  
  //initilize rsvps
  $http.get('/api/getRsvps').then(function (response) {
    $scope.rsvps = response.data;
    //grab new locations
    // $scope.locations = ["Please select", "Pittsburgh", "Boulder", "New York"];
    // for (var i=0; i < $scope.rsvps.length; i++) {
    //   var loc = $scope.rsvps[i].location;
    //   if (($.inArray(loc, $scope.locations) == -1) && (typeof loc !== 'undefined') && (loc !== 'Other (add one)')){
    //     $scope.locations.push(loc);
    //   }
    // } 
    // //put other at the end
    // $scope.locations.push("Other (add one)");
  }); //end getRsvps

  //set some defaults
  $scope.transportations = ["driving", "bus", "plane", "walk","getting a ride","bike","hoping to find a ride", "unsure"];
  
  


  //functions
  //--------------------------------------------------------
  $scope.addRsvp = function() {
    var $uidd=uniqueIdGen();
    var currentdate = new Date(); 
    var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate() + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    //if ($scope.rsvpLoc == 'Other (add one)') { $scope.rsvpLoc = $scope.rsvpLocOther; }
      
    $scope.rsvp = {
      uid: $uidd,
      posted: datetime,
      type:'rsvp', 
      name:$scope.rsvpName,
      email:$scope.rsvpEmail,
      share:$scope.rsvpShare,
      weekend:$scope.rsvpWeekend,
      interest:$scope.rsvpInterest,
      location: $scope.rsvpLocation,
      transportation: $scope.rsvpTrans,
      capacity:$scope.rsvpTransRoom, 
      food:$scope.rsvpDiet,
      contribute:$scope.rsvpMoney,
      friends:$scope.rsvpFriend,
      comment:$scope.rsvpComment,
      arrival:$scope.rsvpDate,
      edit:true
    };

    $http.post('/api/saveRsvp', $scope.rsvp)
    sent = true;
  
  }; //end addRsvp

  $scope.driving = function() {
    if($scope.rsvpTrans == 'driving'){
      return true;
    } else {
      return false;
    }
  
  }; //end driving

  // $scope.newLocation = function() {
  //   if($scope.rsvpLoc == 'Other (add one)'){
  //     return true;
  //   } else {
  //     return false;
  //   }
  
  // }; //end driving

  $scope.rsvpSent = function() {
    if(sent== true){
      return true;
    } else {
      return false;
    }
  
  }; //end rsvpSent





}); // end rsvpCtrl


// var a = angular.module("myApp", []);
// a.controller("myCtrl", function ($scope) {
//   var userid = 0;
//   $scope.contacts = [];
//   $scope.saveHandler = function () {
//     // for (i in $scope.contacts) {

//     //   if ($scope.contacts[i].number == $scope.contact.number) {
//     //     $scope.error = "invalid entry.number already exists!";
//     //     console.log("hi");
//     //   }
//     // }
//     // if ($scope.contact.number.length != 10) {
//     //   $scope.error = "number must be 10 digits";
//     // }

//     //else {

//       if ($scope.contact.id == null)//new contact enroll
//       {
//         $scope.contact.id = userid++;
//         $scope.contacts.push($scope.contact);
//         $scope.error = " ";
//       }
//       else {
//         for (i in $scope.contacts) {

//           if ($scope.contacts[i].id == $scope.contact.id) {
//             $scope.contacts[i] = $scope.contact;
//             $scope.error = " ";
//           }
//         }
//       }
//     //}


//     $scope.contact = {};//clear
//   }

//   $scope.edit = function (id) {
//     for (i in $scope.contacts) {
//       if ($scope.contacts[i].id == id) {

//         $scope.contact = angular.copy($scope.contacts[i]);

//       }
//     }
//   }
//   $scope.delete = function (id) {
//     for (i in $scope.contacts) {
//       if ($scope.contacts[i].id == id) {

//         $scope.contacts.splice(i, 1);
//       }
//     }
//   }

//   $scope.cancelHandler = function () {
//     $scope.contact = {};
//     $scope.error = " ";
//   }

// });




var a = angular.module("myApp", []);
a.controller("myCtrl", function ($scope) {
  var userid = 0;
  $scope.contacts = [];
  $scope.saveHandler = function () {




    if ($scope.contact.number.length == 10) {
      for (i in $scope.contacts) {
        if ($scope.contacts[i].number == $scope.contact.number) {
          $scope.error = "invalid entry.number already exists!";
          //return;
          console.log("hi2");
        }
      }

    }

    if ($scope.contact.number.length != 10) {
      $scope.error = "number must be 10 digits";
    }

    else {

      if ($scope.contact.id == null)//new contact enroll
      {
        $scope.contact.id = userid++;
        $scope.contacts.push($scope.contact);
        $scope.error = " ";
      }
      else {
        for (i in $scope.contacts) {

          if ($scope.contacts[i].id == $scope.contact.id) {
            $scope.contacts[i] = $scope.contact;
            $scope.error = " ";
          }
        }
      }
    }


    $scope.contact = {};//clear
  }

  $scope.edit = function (id) {
    for (i in $scope.contacts) {
      if ($scope.contacts[i].id == id) {

        $scope.contact = angular.copy($scope.contacts[i]);

      }
    }
  }
  $scope.delete = function (id) {
    for (i in $scope.contacts) {
      if ($scope.contacts[i].id == id) {

        $scope.contacts.splice(i, 1);
      }
    }
  }
  $scope.cancelHandler = function () {
    $scope.contact = {};
    $scope.error = " ";
  }

})




var a = angular.module("myApp", []);
a.controller("myCtrl", function ($scope) {
  var userid = 0;
  $scope.contacts = [];
  $scope.saveHandler = function () {
    $bool='false';
    if($scope.contact.number=="" || $scope.contact.name==""){
      $scope.error="Fill all the details";
      exit();
    }
    for (i in $scope.contacts) {
      if ($scope.contacts[i].number == $scope.contact.number) {
       $bool='true';
        //return;
        console.log("true");

      }
    }
    

     if ($bool=='true') {
      console.log($bool);
      console.log("false1");
      for (i in $scope.contacts) {
        if ($scope.contacts[i].number == $scope.contact.number) {
          $scope.error = "invalid entry.number already exists!";
          //return;
          console.log("false2");
        }
      }
    }
   

    else if ($scope.contact.number.length == 10) {
      console.log("10");
      if ($scope.contact.id == null)//new contact enroll
      {
        console.log("idnull");
        $scope.contact.id = userid++;
        $scope.contacts.push($scope.contact);
        $scope.error = " ";
      }
      else {
        console.log("final else");
        for (i in $scope.contacts) {

          if ($scope.contacts[i].id == $scope.contact.id) {
            $scope.contacts[i] = $scope.contact;
            $scope.error = " ";
          }
        }
      }
      $scope.contact = {};//clear
    }



    else {
      $scope.error = "number must be 10 digits";
    }
  }

  $scope.edit = function (id) {
    for (i in $scope.contacts) {
      if ($scope.contacts[i].id == id) {

        $scope.contact = angular.copy($scope.contacts[i]);

      }
    }
  }
  $scope.delete = function (id) {
    for (i in $scope.contacts) {
      if ($scope.contacts[i].id == id) {

        $scope.contacts.splice(i, 1);
      }
    }
  }
  $scope.cancelHandler = function () {
    $scope.contact = {};
    $scope.error = " ";
  }

})






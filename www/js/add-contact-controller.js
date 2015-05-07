(function () {
    "use strict";

    angular.module("Contacts").
        controller("AddContactController", ["$scope", '$state', 'ContactService',
            function ($scope, $state, ContactService) {

                $scope.currentContact = {};

                $scope.add = function () {
                    ContactService.addContact($scope.currentContact);
                    $scope.currentContact = {};
                    $state.transitionTo('tab.contacts');
                };

                $scope.clear = function(){
                    $scope.currentContact = {};
                };
            }]);
}());

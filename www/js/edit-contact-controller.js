(function () {
    "use strict";

    // getter form - gets the contacts app and chains to it
    angular.module("Contacts").
        controller("EditContactController", ["$scope", '$state', '$stateParams', 'ContactService',
            function ($scope, $state, $stateParams, ContactService) {

                var id = $stateParams.id;
                $scope.currentContact = ContactService.getContact(id);

                $scope.update = function () {
                    ContactService.updateContact(id, $scope.currentContact);
                    $state.transitionTo('tab.contacts');
                };

                $scope.clear = function(){
                    $scope.currentContact = {};
                };
            }]);
}());

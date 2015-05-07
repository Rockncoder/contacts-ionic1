(function () {
    "use strict";

    // getter form - gets the contacts app and chains to it
    angular.module("Contacts").
        controller("ContactsListController", ["$scope", "ContactService", function ($scope, ContactService) {

            $scope.contacts = ContactService.getContacts();

            $scope.delete = function (id) {
                ContactService.deleteContact(id);
                $scope.contacts = ContactService.getContacts();
            };
        }]);
}());

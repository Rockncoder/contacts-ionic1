
angular.module('Contacts', ['ionic', 'ngStorage'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/tab-about.html'
                    }
                }
            })

            .state('tab.contacts', {
                url: '/contacts',
                views: {
                    'tab-contacts': {
                        templateUrl: 'templates/contacts-list.html',
                        controller: 'ContactsListController'
                    }
                }
            })

            .state('tab.edit-contact', {
                url: '/contacts/:id',
                views: {
                    'tab-contacts': {
                        templateUrl: 'templates/edit-contact.html',
                        controller: 'EditContactController'
                    }
                }
            })

            .state('tab.add-contact', {
                url: '/add',
                views: {
                    'tab-add': {
                        templateUrl: 'templates/add-contact.html',
                        controller: 'AddContactController'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/about');
    });

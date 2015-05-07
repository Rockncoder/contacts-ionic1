(function () {
    "use strict";

    angular.module("Contacts").
        service('ContactService', ['$localStorage', function ($localStorage) {
            var savedStuff = $localStorage.$default({
                contacts: [
                    {
                        firstName: 'Anthony',
                        lastName: 'Stark',
                        eMail: 'ironman@gmail.com'
                    },
                    {
                        firstName: 'Thor',
                        lastName: 'Odinson',
                        eMail: "hammer@gmail.com"
                    },
                    {
                        firstName: 'Janet',
                        lastName: 'van Dyne',
                        eMail: "jd@gmail.com"
                    },
                    {
                        firstName: 'Robert',
                        lastName: 'Bruce',
                        eMail: "hulk@gmail.com"
                    },
                    {
                        firstName: 'Steven',
                        lastName: 'Rogers',
                        eMail: "thecaptain@hotmail.com"
                    },
                    {
                        firstName: 'Clinton',
                        lastName: 'Barton',
                        eMail: "hawkeye@hotmail.com"
                    },
                    {
                        firstName: 'Pietro',
                        lastName: 'Maximoff',
                        eMail: "quicksilver@hotmail.com"
                    },
                    {
                        firstName: 'Wanda',
                        lastName: 'Maximoff',
                        eMail: "scarlet@witch.com"
                    },
                    {
                        firstName: 'Natalia',
                        lastName: 'Romanova',
                        eMail: "blackwidow@gmail.com"
                    },
                    {
                        firstName: 'Samuel',
                        lastName: 'Wilson',
                        eMail: "falcon@hotmail.com"
                    },
                    {
                        firstName: 'James',
                        lastName: 'Rhodes',
                        eMail: "ironpatriot@gmail.com"
                    },
                    {
                        firstName: 'Nick',
                        lastName: 'Fury',
                        eMail: "theboss@gmail.com"
                    }
                ]
            }),
            contacts = savedStuff.contacts;

            return {
                getContacts: getContacts,
                getContact: getContact,
                deleteContact: deleteContact,
                addContact: addContact,
                updateContact: updateContact
            };

            // returns all of the contacts
            function getContacts() {
                return contacts;
            }

            // returns a single contact
            function getContact(id) {
                return contacts[id];
            }

            // deletes a single contact
            function deleteContact(id) {
                contacts.splice(id, 1);
                $localStorage.contacts = contacts;
            }

            // adds a new contact
            function addContact(contact) {
                contacts.push(contact);
                $localStorage.contacts = contacts;
            }

            // update a contact
            function updateContact(id, contact) {
                contacts[id] = contact;
                $localStorage.contacts = contacts;
            }
        }]);
}());
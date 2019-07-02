'use strict';

angular
    .module('app')
    .factory('UsersAPI', UsersAPI);

UsersAPI.$inject = ['$resource'];

function UsersAPI($resource) {
    return $resource('', {}, {
        getAllUsers: {
            method: 'GET',
            url: 'http://localhost:3000/api/usuarios',
            isArray: true,
            responseType: 'json'
        },
        getUserByID: {
            method: 'GET',
            url: 'http://localhost:3000/api/usuarios/:id',
            isArray: false,
            responseType: 'json'
        },
        findOne: {
            method: 'GET',
            url: 'http://localhost:3000/api/usuarios/?',
            isArray: true,
            responseType: 'json'
        },
        editUserByID: {
            method: 'PUT',
            url: 'http://localhost:3000/api/usuarios/:id',
            isArray: false,
            responseType: 'json'
        },
        removeUser: {
            method: 'DELETE',
            url: 'http://localhost:3000/api/usuarios/:id',
            isArray: false,
            responseType: 'json'
        },
        newUser: {
            method: 'POST',
            url: 'http://localhost:3000/api/usuarios',
            isArray: false,
            responseType: 'json'
        }
    });
}
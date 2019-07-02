'use strict';

module.exports = function(usuario) {
    usuario.validatesPresenceOf('nickname', 'nombre', 'apellidopaterno', 'apellidomaterno');
    usuario.validatesLengthOf('nickname', { min: 2, max: 12 });
    usuario.validatesLengthOf('nombre', { min: 2, max: 40 });
    usuario.validatesLengthOf('apellidopaterno', { min: 2, max: 40 });
    usuario.validatesLengthOf('apellidomaterno', { min: 2, max: 40 });

    usuario.validatesUniquenessOf('nickname');
};
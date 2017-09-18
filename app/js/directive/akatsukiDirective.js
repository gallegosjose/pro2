/**
 * Created by Rodrigo on 9/06/2017.
 */
app.directive('pag0',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagLoginCiudadano.html'
    };

});
app.directive('pag1',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagLoginEstablecimientoSalud.html'
    };

});
app.directive('pag2',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagOpcionesRegistro.html'
    };
});
app.directive('pag3',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagRegEmergConId.html'
    };

});
app.directive('pag4',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagRegEmergSinId.html'
    };

});
app.directive('pag5',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagIdentificacion.html'
    };

});
app.directive('pag7',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagEmergencias.html'
    };

});
app.directive('pag8',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagContactosEmergencia.html'
    };

});


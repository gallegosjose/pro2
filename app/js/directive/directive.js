/**
 * Created by Rodrigo on 9/06/2017.
 */
app.directive('pag0',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagLogin.html'
    };

});
app.directive('pag1',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagOpcionesRegistro.html'
    };
});
app.directive('pag2',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagRegEmergConId.html'
    };

});
app.directive('pag3',function () {
    return {
        restrict : 'E',
        templateUrl : 'app/js/template/pagRegEmergSinId.html'
    };

});


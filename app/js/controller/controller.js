/**
 * Created by Rodrigo on 9/06/2017.
 */
var controller =app.controller('controlador',function ($scope,$http) {

    $scope.pagLogin=true;
    $scope.mensaje=null;
    $scope.pagOpcionesRegistro=null;
    $scope.pagRegEmergConId=null;
    $scope.pagRegEmergSinId=null;
    $scope.registrarDatos=null;
    $scope.refHospitales=null;
    $scope.resumen=null;


    $scope.entrarPag1 = function () {
        $scope.pagLogin=false;
        $scope.pagOpcionesRegistro=true;

    };
    $scope.registroEmergenciaConIdentificacion = function () {
        $scope.pagRegEmergConId=true;
        $scope.registroId=true;
        $scope.pagRegEmergSinId=null;
        $scope.pagLogin=null;
        $scope.pagOpcionesRegistro=null;
        $scope.refHospitales=null;
        $scope.resumen=null;
    };
    $scope.registroEmergenciaSinIdentificacion = function () {
        $scope.pagRegEmergConId=null;
        $scope.pagRegEmergSinId=true;
        $scope.pagLogin=null;
        $scope.pagOpcionesRegistro=null;
        $scope.registroId=null;
        $scope.refHospitales=null;
        $scope.resumen=null;
    };
    $scope.salir = function () {
        $scope.pagLogin=true;
        $scope.pagOpcionesRegistro=false;
        $scope.mensaje=null;
        $scope.pagOpcionesRegistro=null;
        $scope.pagRegEmergConId=null;
        $scope.pagRegEmergSinId=null;
        $scope.registrarDatos=null;
        $scope.resumene=null;
        $scope.refHospitales=null;

    };
    $scope.registrarHuella = function () {
        $scope.registrarDatos=true;
        $scope.registroId=null;
        $scope.refHospitales=null;
        $scope.resumen=null;
    };
    $scope.registrarDni = function () {
        $scope.registrarDatos=true;
        $scope.registroId=null;
        $scope.refHospitales=null;
        $scope.resumen=null;
    };
    $scope.inicio = function () {
        $scope.pagOpcionesRegistro=true;
        $scope.pagLogin=null;
        $scope.mensaje=null;
        $scope.pagRegEmergConId=null;
        $scope.pagRegEmergSinId=null;
        $scope.registrarDatos=null;
    };
    $scope.registrarHuellaActualizar = function () {
        $scope.registroId=true;
        $scope.registrarDatos=null;
        $scope.refHospitales=null;
        $scope.resumen=null;
    };
    $scope.consultar = function () {
        $scope.refHospitales=true;
    };
    $scope.continuar = function () {
        $scope.resumen=true;
    };

});

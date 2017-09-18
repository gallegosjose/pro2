/**
 * Created by Rodrigo on 9/06/2017.
 */
var controller =app.controller('controlador',function ($scope,$http) {

    $scope.pagLoginCiudadano=null;
    $scope.pagLoginEstablecimientoSalud=null;
    $scope.pagIdentificacion=null;
    $scope.pagContactosEmergencia=null;
    $scope.pagEmergencias=null;
    $scope.identificarHuella=null;
    $scope.credencialIdentificado=null;
    $scope.pagOpcionesRegistro=true;
    $scope.registrarDatos=null;
    $scope.refHospitales=null;
    $scope.resumen=null;

    $scope.ingresar = function () {
        AkatsukiServicios.autenticar($scope.dni,$scope.credencial,$scope.entrarPag1);

    };
    $scope.entrarPaginaContactosEmergencia = function () {

        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=null;
        $scope.pagLoginEstablecimientoSalud=null;
        $scope.pagIdentificacion=null;
        $scope.identificarHuella=null;
        $scope.credencialIdentificado=null;
        $scope.pagIdentificacion=null;
        $scope.pagEmergencias=true;
    };
    $scope.entrarCredencialIdentificado = function () {

        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=null;
        $scope.pagLoginEstablecimientoSalud=null;
        $scope.pagIdentificacion=null;
        $scope.identificarHuella=null;
        $scope.credencialIdentificado=true;
        $scope.pagIdentificacion=true;
    };
    $scope.entrarPagIdentificacion = function () {

        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=null;
        $scope.pagLoginEstablecimientoSalud=null;
        $scope.pagIdentificacion=true;
        $scope.identificarHuella=true;
    };
    $scope.atras1 = function () {
        $scope.pagOpcionesRegistro=true;
        $scope.pagLoginCiudadano=null;
        $scope.pagLoginEstablecimientoSalud=null;

    };
    $scope.atras2 = function () {
        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=null;
        $scope.pagLoginEstablecimientoSalud=true;
        $scope.identificarHuella=null;

    };
    $scope.atras3 = function () {
        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=null;
        $scope.pagLoginEstablecimientoSalud=null;
        $scope.identificarHuella=true;
        $scope.credencialIdentificado=null;

    };
    $scope.atras4 = function () {
        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=true;
        $scope.pagLoginEstablecimientoSalud=null;
        $scope.credencialIdentificado=null;
        $scope.pagEmergencias=null;
    };
    $scope.opcionEatablecimientoSalud = function () {
        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginEstablecimientoSalud=true;

    };
    $scope.opcionCiudadano = function () {
        $scope.pagOpcionesRegistro=null;
        $scope.pagLoginCiudadano=true;

    };
    $scope.entrarPagEmergencias = function () {
        $scope.pagEmergencias=true;
        $scope.pagContactosEmergencia=null;

    };
    $scope.entrarPagContactosEmergencia = function () {
        $scope.pagEmergencias=null;
        $scope.pagContactosEmergencia=true;

    };


    $scope.salir = function () {
        $scope.pagLoginCiudadano=true;
        $scope.pagOpcionesRegistro=null;
        $scope.pagEmergencias=null;
        $scope.pagContactosEmergencia=null;
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

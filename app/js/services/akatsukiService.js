var akatsukiService = angular.module('akatsukiService',[]);
akatsukiService.service('AkatsukiServicios', function($http){
    this.config = {headers: { 'Content-Type': 'application/json;charset=utf-8'}};

    this.autenticar = function (ddni,dcredencial,funcion) {
        var data = { dni:ddni,credencial:dcredencial};
        var respuesta = $http.post('/akatsukiServices/servicios/autenticar',data,this.config);
        respuesta.then(function (response) {
            funcion(response.data);
        });
    };
});
var app = angular.module ('app', ['ngRoute']);

app.config(function($provide, $routeProvider, $controllerProvider, $compileProvider){

    var scriptCollection = [];

    function loadScript(path) {
        var result = $.Deferred();
        if(scriptCollection.indexOf(path) == -1) {
            var script = document.createElement('script');
            script.async = 'async';
            script.type = 'text/javascript';
            script.src = path;
            script.onload = script.onreadystatechange = function (_, isAbort) {
                if(!script.readyState || /loaded|complete/.test(script.readyState)) {
                    if(isAbort) {
                        result.reject();
                    } else {
                        scriptCollection.push(path);
                        result.resolve();
                    }
                }
            };
            script.onerror = function () { result.reject(); };
            document.querySelector('head').appendChild(script);
        } else {
            setTimeout(function(){
                result.resolve();
            }, 0);
        }
        return result.promise();
    }

    function loader(arrayModule){
        return {
            load: function($q){
                var deferred = $q.defer();
                var map = arrayModule.map(function(module) {
                    return loadScript('js/' + module + '.js');
                });
                $q.all(map).then(function(r){
                    deferred.resolve();
                });
                return deferred.promise;
            }
        };
    }

    $routeProvider
        .when('/', {
            templateUrl: 'views/foo.html',
            controller: 'FooCtrl',
            resolve: loader(['controllers/foo'])
        })
        .when('/bar',{
            templateUrl: 'views/bar.html',
            controller: 'BarCtrl',
            resolve: loader(['controllers/bar'])
        })
        .otherwise({
            redirectTo: document.location.pathname
        });

    app.components = {
        controller: $controllerProvider.register,
        service: $provide.service,
        directive: $compileProvider.directive
    }
});

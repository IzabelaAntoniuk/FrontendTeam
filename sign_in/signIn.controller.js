(function () {
    'use strict';
    app.controller('signInCtrl', SignInCtrl);
    SignInCtrl.$inject = [];

    function SignInCtrl() {
        var self = this;
        self.email = '';
        self.password = '';

        self.click = function() {
            console.log("kliknieto");
            //$state.go('zalogowany')
        };
    }
})();

(function () {
    "use strict";

    function init() {
        var url = atob("aHR0cHM6Ly9yeW5vbWFydC5pbi8="),
        iawin = window.open(url, "_blank", "location=no,clearcache=no,zoom=no,footer=no"),
        error = false;

        iawin.addEventListener("loaderror", function () {
            error = true;
            navigator.splashscreen.show();
            iawin.close();
        });

        iawin.addEventListener("exit", function () {
            navigator.splashscreen.show();

            if (!error) {
                navigator.notification.confirm("Confirm close", function (exit) {
                    if (exit === 1) {
                        navigator.app.exitApp();
                    } else {
                        location.reload();
                    }
                }, "Confirm");
            } else {
                document.querySelector("#error").classList.remove("hide");
            }

            navigator.splashscreen.hide();
        });
    }

    init();
}());

App.controller('home', function (page) {
});

App.controller('page_geolocation', function (page) {
    navigator.geolocation.watchPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        document.getElementById("lat_text").innerHTML = "Latitude: "+lat.toFixed(3);
        document.getElementById("long_text").innerHTML = "Longitude: "+lon.toFixed(3);
    });
});
App.controller('page_orientation', function (page) {
    window.addEventListener('deviceorientation', function(event) {
        var tiltLR = event.gamma;
        var titleFB = event.beta;
        var direction = event.alpha;

        document.getElementById("lr_text").innerHTML = "Tilt Left-Right: "+tiltLR.toFixed(1);
        document.getElementById("fb_text").innerHTML = "Tilt Front-Back: "+titleFB.toFixed(1);
        document.getElementById("dir_text").innerHTML = "Direction: "+direction.toFixed(1);

        document.getElementById("bild_smartphone").style.transform = "rotate("+(direction-90)+"deg)";
    });

});
App.controller('page_acc', function (page) {
    window.addEventListener('devicemotion', function(e) {
        var acc = e.acceleration;
        var accGravity = e.accelerationIncludingGravity;

        document.getElementById("acc_x_text").innerHTML = "X ohne Graviation: "+acc.x.toFixed(1);
        document.getElementById("acc_y_text").innerHTML = "Y ohne Graviation: "+acc.y.toFixed(1);
        document.getElementById("acc_z_text").innerHTML = "Z ohne Graviation: "+acc.z.toFixed(1);

        document.getElementById("acc_x_grav_text").innerHTML = "X mit Graviation: "+accGravity.x.toFixed(1);
        document.getElementById("acc_y_grav_text").innerHTML = "Y mit Graviation: "+accGravity.y.toFixed(1);
        document.getElementById("acc_z_grav_text").innerHTML = "Z mit Graviation: "+accGravity.z.toFixed(1);
    });
});
App.controller('page_light', function (page) {
    window.addEventListener('devicelight', function(event) {
        var lightLevel = event.value;
        document.getElementById("light_text").innerHTML = "Light-Level: "+lightLevel+"lux";
    });

});
App.controller('page_proximity', function (page) {
    window.addEventListener('userproximity', function(event) {
        document.getElementById("proximity_text").innerHTML = event.near?"Near":"Far";
    });
});

function vibrieren(){
    var lange = document.getElementById("lange_input").value;
    navigator.vibrate(lange);
}

try {
    App.restore();
} catch (err) {
    App.load('home');
}

App.controller('home', function (page) {
});

App.controller('page_geolocation', function (page) {
    var loc = new Location();
    loc.start(function(){
        lat_text.setText(latitude);
        long_text.setText(longitude);
    });
});
App.controller('page_orientation', function (page) {
    //document.getElementById("img_cmps").style.transform = "rotate("+(direction-90)+"deg)";

    var or = new Orientation();
    or.start(function(){
        lr_text.setText(tiltLR);
        fb_text.setText(tiltFB);
        dir_text.setText(direction);
    })

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

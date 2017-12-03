// JavaScript Document
// 2017-06-05 / GEOLOCALIZACION HTML + SERVICIO DE GEOCODIFICACION INVERSA - api de google maps

var nom_zona = "LIMA OESTE", cod_zona = "0001";

if (typeof (Storage) !== "undefined") {

    if (!localStorage.City_Name_Cache && !localStorage.City_ID_Cache) {

        console.log("nulled-cache_set time reached-455641");

        /////////////////////////// GEOLOCALIZACION HTML5 ///////////////////////////

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(success, error);

            function success(position) {

                var lat, lon;

                lat = position.coords.latitude;
                lon = position.coords.longitude;

                //lat = -11.043647;
                //lon = -76.462097;

                //lat = -3.108120;
                //lon = -71.781066;

                //Provincia de PUTUMAYO , LORETO
                //lat = -2.454530;
                //lon = -72.666250;	

                geoLocaliza(lat, lon);

            }

            function error(err) {
                //console.log(err)
                //console.log("ini");
                var e_lat, e_lon;

                /*$.getJSON("http://ip-api.com/json", function (data) {

                    if (data.status == "success") {

                        if (data.lat && data.lon) {

                            e_lat = data.lat;
                            e_lon = data.lon;
                            geoLocaliza(e_lat, e_lon);

                        } else {

                            console.log("...miss data in this place");

                        }
                    }
                    
                });*/
                
            }

        }

        /////////////////////////// FIN GEOLOCALIZACION HTML5 ///////////////////////////


        /////////////////////////// GEOCODER INVERSE GOOGLE ///////////////////////////
        function geoLocaliza(x_lat, x_lon) {

            //////////////////////////////////////
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(x_lat, x_lon);
            geocoder.geocode({'latLng': latlng}, function (results, status) {
                //si google responde OK
                if (status === 'OK') {
                    var len = results.length;
                    //si la consulta es desde un punto en PERU
                    if (results[len - 1].place_id === "ChIJ9RRZwFDIBZERSAYheRIBnvI") {
                        var prov = "";
                        var dpto = "";
                        var place_id = "";

                        for (var i = 0; i < len; i++) {
                            var t = results[i].types;
                            if (t.indexOf("administrative_area_level_2") >= 0) {
                                prov = results[i].address_components[0].short_name;
                                place_id = results[i].place_id;
                            }
                            if (t.indexOf("administrative_area_level_1") >= 0) {
                                dpto = results[i].address_components[0].short_name;
                            }
                        }

                        try {
                            /*
                             nom_zona = vUb[place_id].nom_zona;
                             cod_zona = vUb[place_id].cod_zona;
                             
                             localStorage.City_Name_Cache = nom_zona;
                             localStorage.City_ID_Cache = cod_zona;
                             */
                            ///////////////////////////// ARRAY DATA //////////////////////////////////

                            //place_id = "ChIJjdGa_c8dNJARfD0zPrz-VEg";

                            $.ajax({
                                dataType: "json",
                                type: "POST",
                                url: "./ajax/_array_geolocaliza.php",
                                data: "place_id=" + place_id,
                                beforeSend: function (data) {
                                    //console.log("Espere...");
                                },
                                success: function (requestData) {
                                    nom_zona = requestData.nom_zona;
                                    cod_zona = requestData.cod_zona;

                                    localStorage.City_Name_Cache = nom_zona;
                                    localStorage.City_ID_Cache = cod_zona;

                                    $("#prono").load('./ajax/_slider.php', {localidad: nom_zona, localidadId: cod_zona}, function () {

                                        $(".slider-bg").css("background-image", "url(" + $("#_slider-bg").val() + ")");

                                    });

                                },
                                error: function (requestData, strError, strTipoError) {
                                    console.log("Error: " + strTipoError + ": " + strError);

                                }
                            });

                            ///////////////////////////// FIN ARRAY DATA //////////////////////////////////

                        } catch (err) {
                            console.log("Error: " + err.message);
                        }

                    }
                }
            });

        }
        /////////////////////////// FIN GEOCODER INVERSE GOOGLE ///////////////////////////

    } else {
        localidad = localStorage.City_Name_Cache;
        localidadId = localStorage.City_ID_Cache;
        console.log("cache-3type01as124a4");
    }
}
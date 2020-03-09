var link = window.location.href;
var socket = io(link);

socket.on('connect', function() {
    console.log('Socket.Io: ' + socket.id);
});

socket.on('newVehicle', (data) => {
    console.log('Socket.Io: ' + data);
    data.forEach((row) => {
        $("#cars").append(
          '<li>'
            '<div class="collapsible-header">'
              '<div class="collapsible-pane"></div>'
              '<div class="collapsible-title">'
                '<span>' + row.groupe + '</span>'
                '<span class="right">'row.speed'</span>'
              '</div>'
            '</div>'
            '<div class="collapsible-body">'
              '<ul class="center-align">'
                '<li>Classe : <b>' + row.classe + '</b></li>'
                '<li>Heure du premier capteur : <b>' + row.time1 + '</b></li>'
                '<li>Heure du deuxième capteur : <b>' + row.time2 + '</b></li>'
                '<li>Temps total entre les capteurs : <b>' + row.tt + '</b></li>'
              '</ul>'
            '</div>'
          '</li>'
        );
    });
});

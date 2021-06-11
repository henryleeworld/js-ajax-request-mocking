$.LoadingOverlaySetup({
    background: "rgba(0, 0, 0, 0.5)",
    image: "images/coffee.svg",
    imageAnimation: "1.5s fadein",
    imageColor: "#ffcc00"
});

function fetchMockApi() {
    $.LoadingOverlay("show");
    $.mockjax({
        url: "api.php",
        responseTime: 0,
        // responseText: 'A text response from mock'
        proxy: 'data/json/taiwan_districts.json',
        dataType: 'json'
    });

    $.ajax({
        url: "api.php",
        dataType: 'json'
    }).done(function(response) {
        setTimeout(function() {
            $.LoadingOverlay("hide");
        }, 1000);
        $('#output_fake').html(JSON.stringify(response, null, 2));
        // $('#output_fake').html(response);
        $.mockjax.clear();
    });
}
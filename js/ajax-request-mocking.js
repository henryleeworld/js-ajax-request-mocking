function fetchMockApi() {
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
        $('#output_fake').html(JSON.stringify(response, null, 2));
        // $('#output_fake').html(response);
        $.mockjax.clear();
    });
}
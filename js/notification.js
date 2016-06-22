function notificationTask() {

    $.ajax({

        url: 'http://localhost:8000/notifications/',
        async: true,            // by default, it's async, but...
        dataType: 'json',       // or the dataType you are working with
        timeout: 10000,          // IMPORTANT! this is a 10 seconds timeout
        cache: false

    }).done(function (eventList) {

       // Handle your data here
       var notifications = eventList.results;
       console.log(notifications);


    }).always(notificationTask);

}

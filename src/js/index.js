(function ($) {
    $('#leadTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "Grade" },
            { "data": "Ounce" },
            { "data": "Gram" },
            { "data": "Inch" },
            { "data": "mm" },
            { "data": "PPO" },

        ]
    } );

})(jQuery);
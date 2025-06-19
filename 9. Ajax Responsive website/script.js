$(document).ready(function () {
    function loadContent(page) {
        $.ajax({
            url: page + '.html',
            type: 'GET',
            dataType: 'html',
            success: function (response) {
                $('#content').html(response);
            },
            error: function () {
                $('#content').html('<p>Error loading content.</p>');
            }
        });
    }

    // Load home page by default
    loadContent('home');

    // Click event listeners for navigation links
    $('#home').click(function (e) {
        e.preventDefault();
        loadContent('home');
    });

    $('#about').click(function (e) {
        e.preventDefault();
        loadContent('about');
    });

    $('#contact').click(function (e) {
        e.preventDefault();
        loadContent('contact');
    });
});
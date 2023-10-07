$(document).ready(function() {
    $(".product-image").hover(
        function() {
            $(this).css("transform", "translate(7px, 7px)");
        },
        function() {
            $(this).css("transform", "translate(0, 0)");
        }
    );
});


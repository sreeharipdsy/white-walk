
// Cart-Modal
$('#cart-icon').click(function() {
    updateCartModal();
    $('#cart-modal').fadeIn("300");
});

$('.close').click(function() {
    $('#cart-modal').fadeOut("300");
});

$(window).click(function(event) {
    if ($(event.target).is('#cart-modal')) {
        $('#cart-modal').fadeOut("300");
    }
});

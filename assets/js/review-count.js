$(document).ready(function(){
    var totalCards = $(".feedback-card").length;
    var cardsToShow = 3;
    
    function updateCardCount() {
        var visibleCards = $(".feedback-card:visible").length;
        $("#review-count").text(`Showing ${visibleCards} of ${totalCards} reviews`);
    }
    function updateCardCountTwo() {
        var visibleCards = $(".feedback-card:visible").length;
        $("#review-count-2").text(`${visibleCards} of ${totalCards} reviews`);
    }

    $(".feedback-card").slice(0, cardsToShow).show();
    updateCardCount();
    updateCardCountTwo();

    $("#load-more").click(function(e){
        e.preventDefault();
        $(".feedback-card:hidden").slice(0, cardsToShow).fadeIn(300, function() {
            updateCardCount();
            updateCardCountTwo();
        });

        if($(".feedback-card:hidden").length == 0){
            $("#load-more").fadeOut(300);
        }
    });
});
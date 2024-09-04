
// This jQuery script manages the display and pagination of feedback cards on a webpage. Initially, it shows a specified number of feedback cards (3 in this case) and updates the review count. Two separate functions, `updateCardCount` and `updateCardCountTwo`, handle updating the review count displayed in two different elements. When the "Load More" button is clicked, the script reveals additional hidden feedback cards with a fade-in effect and updates the review count. If no hidden cards remain, the "Load More" button is hidden.
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
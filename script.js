$(document).ready(function() {
    var items = $('.item');
    var numberOfItems = $(items).length;
    items.hide()
    var current = 1;
    for(i = 1; i <= numberOfItems; i++) {
        if(i == current) {
          $(items).fadeOut(300, function() {
          }).delay(300);
          $(items[i-1]).fadeIn(300);
        }
      }
    function autoplay() {
        if(current > 1) {
            current = current - 1;
        }
        else {
            current = numberOfItems;
        }
        for(i = 1; i <= numberOfItems; i++) {
            if(i == current) {
              $(items).fadeOut(300, function() {
              }).delay(300);
              $(items[i-1]).fadeIn(300);
            }
        }
    }
    var intervalId = setInterval(autoplay, 5000);
})

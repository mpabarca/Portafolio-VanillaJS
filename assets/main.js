

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    window.M.Carousel.init(elems, {});
  });

  $(document).ready(function() {
    $('#pagepiling').pagepiling({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
      menu: '#myMenu'
  });
});
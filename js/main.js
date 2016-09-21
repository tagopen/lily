/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Fixed navbar on scroll
if(!$('.navbar-toggle').is(':visible')) {
  $('#nav').affix({
    offset: {
      top: $('header').innerHeight()
    }
  }); 
}

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
*/
// Dropdowns on hover on desktop
var navbarToggle = '.navbar-toggle'; // name of navbar toggle, BS3 = '.navbar-toggle', BS4 = '.navbar-toggler'  
$('.dropdown, .dropup').each(function() {
  var dropdown = $(this),
    dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
    dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false;
  
  // Mouseover
  dropdown.hover(function(){
    var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none' && $(document).width() >= 992 ;
    if ((dropdownHoverAll == true || (dropdownHoverAll == false && notMobileMenu))) { 
      dropdownToggle.trigger('click');
    }
  })
});

// Equal Height
function setEqualHeight(columns)
{
  var tallestcolumn = 0;
  columns.each(
    function()
    {
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn)
      {
        tallestcolumn = currentHeight;
      }
    }
    );
  columns.height(tallestcolumn);
}

$(window).on("resize", function(){
  setEqualHeight($(".partner-item"));
  if( $( window ).width() <= 767 ) {
    setEqualHeight($(".work-item  .ic"));
    setEqualHeight($(".work-item"));
  }
  if( $( window ).width() >= 768 ) {
    setEqualHeight($(".service-item"));
    setEqualHeight($(".review-box"));
  }
  if( $( window ).width() >= 992 ) {
    setEqualHeight($(".instrument-name"));
    setEqualHeight($(".code-item"));
    setEqualHeight($(".work-item .ic"));
  }
}).trigger("resize");
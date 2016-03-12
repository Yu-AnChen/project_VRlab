/*
 * CSS viewport units with jQuery
 * http://www.w3.org/TR/css3-values/#viewport-relative-lengths
 */
;(function( $, window ){

  var $win = $(window)
    , _css = $.fn.css;

  function viewportToPixel( val ) {
    var percent = val.match(/[\d.]+/)[0] / 100
      , unit = val.match(/[vwh]+/)[0];
    return (unit == 'vh' ? $win.height() : $win.width()) * percent +'px';
  }

  function parseProps( props ) {
    var p, prop;
    for ( p in props ) {
      prop = props[ p ];
      if ( /[vwh]$/.test( prop ) ) {
        props[ p ] = viewportToPixel( prop );
      }
    }
    return props;
  }

  $.fn.css = function( props ) {
    var self = this
      , originalArguments = arguments
      , update = function() {
          if ( typeof props === 'string' || props instanceof String ) {
            if (originalArguments.length > 1) {
              var argumentsObject = {};
              argumentsObject[originalArguments[0]] = originalArguments[1];
              return _css.call(self, parseProps($.extend({}, argumentsObject)));
            } else {
              return _css.call( self, props );
            }
          } else {
            return _css.call( self, parseProps( $.extend( {}, props ) ) );
          }
        };
//    $win.resize( update ).resize();
    return update();
  };

}( jQuery, window ));

// Usage:
$('.page-header .carousel, .page-header .carousel .item').css({
  height: '68vh'  
});
$('#google_map_iframe').css({
  height: '50vh'
})
/*
// Usage:
$('div').css({
  height: '50vh',
  width: '50vw',
  marginTop: '25vh',
  marginLeft: '25vw',
  fontSize: '10vw'
});
*/


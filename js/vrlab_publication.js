//for the list.js sorting
var options = {
  valueNames: [ 'pub_name' ]
};

var userList = new List('holder-publication', options);

$('#reset-button-id').click(function() {
   $('#search-field').val() == false;

   userList.search();
   $('#reset-button-id').css('opacity',0);
   $('#search-field').focus();
});

$ ('.search')
  .keyup(function() {
    if ( $('#search-field').val() == false ) {
      $('#reset-button-id').css('opacity',0);
    } else {
      $('#reset-button-id').css('opacity',1)
      $('#reset-button-id').css('transition', 'opacity 0.25s');
    }
});
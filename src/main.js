(function () {

  let formURL = 'http://json-data.herokuapp.com/forms';
  var templateString = $('#registrationForm').text();

  var templateFunction = _.template(templateString);

  $.ajax({
    url: formURL,
    dataType: 'jsonp',
    method: 'get'
  }).then (function (form) {
    
    _.each(form.results, function (item) {
      console.log(item);
      var itemHTML = templateFunction(item);
    
      $('body').append(itemHTML)

    });

}());

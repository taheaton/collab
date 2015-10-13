'use strict';

(function () {

  var url = 'http://json-data.herokuapp.com/forms';

  //fetch data and do something
  var promise = $.getJSON(url);

  promise.then(function (response) {
    doSomething(response);
  });

  var genericInput = function genericInput(obj) {
    var template = '\n    <div class="text-input">\n    <input value="" type="' + obj.type + '"placeholder="' + obj.label + '" id="' + obj.id + '">\n    <i class="fa ' + obj.icon + '"></i>\n    </div>\n    \n    ';
    return template;
  };

  var doSomething = function doSomething(arr) {

    _.each(arr, function (item) {

      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'textarea' || item.type === 'select' || item.options[0] === 'select') {
        htmlBlock = genericInput(item);
      }
      $('form').append(htmlBlock);
    });
  };
})();
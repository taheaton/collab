(function () {

  let url = 'http://json-data.herokuapp.com/forms';

//fetch data and do something
  let promise = $.getJSON(url);

  promise.then( function (response) {
    doSomething(response);

  });

  let genericInput = function (obj) {
    let template = `
    <div class="text-input">
    <input value="" type="${ obj.type }"placeholder="${ obj.label }" id="${obj.id }">
    <i class="fa ${ obj.icon }"></i>
    </div>
    
    `;
    return template;
  }

let doSomething = function (arr) {

    _.each(arr, function (item) {
      
      var htmlBlock;

      if (item.type ==='text' || item.type === 'tel' || item.type === 'email' || item.type === 'textarea' || item.type === 'select' || item.options[0] === 'select') {
        htmlBlock = genericInput(item);
      }
      $('form').append(htmlBlock);
    });
  };

  }());
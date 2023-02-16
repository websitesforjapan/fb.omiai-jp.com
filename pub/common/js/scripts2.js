  $(function() {location.search.slice(1).split("&").forEach(function (object) {
    var input = document.createElement('input');
  	if (object.split("=")[0] === "abm") {
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', "afb");
      input.setAttribute('value', object.split("=")[1]);
  	} else {
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', object.split("=")[0]);
      input.setAttribute('value', object.split("=")[1]);
  	}
    document.register.appendChild(input);
  })});
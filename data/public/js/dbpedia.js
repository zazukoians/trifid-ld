$.ajax({
  type: "GET",
  url: "http://localhost:8080/dbpedia-query?q=Turin",
  cache: false,
  success: function(html){
    $("#data").append(document.createTextNode(html));
  }
});

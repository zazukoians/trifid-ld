function dbpediaGet (entity, callback) {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/dbpedia-query?q=" + entity,
      cache: false,
      success: function(html){
        $("#data").append(document.createTextNode(html));
        callback();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        callback();
      }
    });
}

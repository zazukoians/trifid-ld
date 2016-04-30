function dbpediaGet (entity, callback) {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/dbpedia-query?q=" + entity,
      cache: false,
      success: function(html){
        alert("fatto");
        $("#data").append(document.createTextNode(html));
        alert("scritto");
        callback();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        callback();
      }
    });
}

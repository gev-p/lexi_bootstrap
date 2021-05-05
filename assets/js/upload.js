const tabArea = document.querySelector('.upload-tabs')
const fileInput = document.forms['order-form'].elements['file-input'];
fileInput.addEventListener('input', () =>{
        for (var i = 0; i < fileInput.files.length; ++i) {
        let fileName = fileInput.files.item(i).name;
        let fileBlock = document.createElement('div');
        fileBlock.innerHTML = fileName;
        tabArea.after(fileBlock)
}})


$(document).ready(function(){
    $("#dropFiles").on('dragenter', function(ev) {
        // Entering drop area. Highlight area
        $("#dropFiles").addClass("highlightDropArea");
    });
    
    $("#dropFiles").on('dragleave', function(ev) {
      // Going out of drop area. Remove Highlight
      $("#dropFiles").removeClass("highlightDropArea");
    });
    
    $("#dropFiles").on('drop', function(ev) {
      // Dropping files
      ev.preventDefault();
      ev.stopPropagation();
      // Clear previous messages
      $("#filenames").empty();
      if(ev.originalEvent.dataTransfer){
        if(ev.originalEvent.dataTransfer.files.length) {
          var droppedFiles = ev.originalEvent.dataTransfer.files;
          for(var i = 0; i < droppedFiles.length; i++)
          {
            console.log(droppedFiles[i]);
            $("#filenames").append("<br />"+ droppedFiles[i].name);
            // Upload droppedFiles[i] to server
          }
        }
      }
  
      $("#dropFiles").removeClass("highlightDropArea");
      return false;
    });
    
    $("#dropFiles").on('dragover', function(ev) {
        ev.preventDefault();
    });
  })
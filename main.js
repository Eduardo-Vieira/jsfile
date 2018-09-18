const openFile = function(event){
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('fileShow');
      const data = {
        filename: input.files[0].name,
        filetype: input.files[0].type,
        value: dataURL.toString().split(',')[1]
      }
      output.innerHTML = JSON.stringify(data);
    };
    reader.readAsDataURL(input.files[0]);
}
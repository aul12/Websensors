function Button(id){
    var id = id;

    this.setText = function(text){
        document.getElementById(id).innerHTML = text;
    }
}

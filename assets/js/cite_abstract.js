function toggleCiteAbstract(i){
    var bibtex = document.getElementsByClassName("bibtex");
    var abstract = document.getElementsByClassName("abstract");
    var btn = document.getElementsByClassName("button cite");
  
    if(bibtex[i].style.display == "block"){
      bibtex[i].style.display = "none";
      abstract[i].style.display = "block";
      btn[i].innerHTML = "CITE";
    }
    else{
      bibtex[i].style.display = "block"
      abstract[i].style.display = "none";
      btn[i].innerHTML = "ABSTRACT";
    }
  }
  
  
  var b = document.getElementsByClassName("button cite");
  
  for(var i = 0; i < b.length; i++){
    b[i].setAttribute("onclick", "toggleCiteAbstract("+i+")");
  }
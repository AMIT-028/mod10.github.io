function add() {
    var na = document.getElementById("input").value;
     
    if (na.charAt(0).toLowerCase() === 'j'){
      document.getElementById("text").innerHTML="Goodbye " + na;
    }
    else{
      document.getElementById("text").innerHTML="Hello "+na;
    }
    

  }
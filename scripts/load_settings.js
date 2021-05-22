
        function openForm() {
        //   document.getElementById("myForm").style.display = "block";
        var settings = document.getElementById("myForm");
        if (settings.style.display === "none"){
            settings.style.display = "block";
            document.getElementById("modal_darkener").style.display = "block"; 
        }
        else{
            settings.style.display = "none";
            document.getElementById("modal_darkener").style.display = "none";
          }
    
    }
        
        function closeForm() {
          document.getElementById("myForm").style.display = "none";
          document.getElementById("modal_darkener").style.display = "none";
        }
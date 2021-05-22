
        function openForm() {
        //   document.getElementById("myForm").style.display = "block";
        var settings = document.getElementById("myForm");
        if (settings.style.display === "none"){
            settings.style.display = "block";
            //document.getElementById("h_container1").style.opacity = "0.1"; 
            //document.getElementById("h_container2").style.opacity = "0.1"; 
            //document.getElementById("h_container3").style.opacity = "0.1"; 
        }
        else{
            settings.style.display = "none";
            // document.getElementById("h_container1").style.opacity = "1"; 
            // document.getElementById("h_container2").style.opacity = "1"; 
            // document.getElementById("h_container3").style.opacity = "1";
          }
    
    }
        
        function closeForm() {
          document.getElementById("myForm").style.display = "none";
          document.getElementById("h_container1").style.opacity = "1"; 
          document.getElementById("h_container2").style.opacity = "1"; 
          document.getElementById("h_container3").style.opacity = "1"; 
        }
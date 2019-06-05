/* Custom code goes here*/

//IFFE Imediately Invoked Function Expression

(function(){

    function Start(){
        //alert("Hello ALl");
        $('.btn-danger').click(function(event){
            if(!confirm("Are you sure you want to delete ths item?")){
                event.preventDefault();
                window.location.assign("/Planets");
            }
        });
    }

    window.addEventListener("load",Start);

})();
$(document).ready(function(){
    $(".chk").click(function(){
        if($("input:checkbox").filter(":checked").length > 1){
            $(".err").show();
            return false;
        }
        else{
            $(".err").hide();
            return true;
        }
    })
})
$(function(){
    $("#add").click(function(){
        var v1 = $("input").val();
        if(v1 != ''){
            var elem = $("<li></li>").text(v1);
            $(elem).append("<button class='rem'>X</button");
            $("#list").append(elem);
            $("input").val("");
            $(".rem").click(function(){
                $(this).parent().remove();
            });
        }
    });
});
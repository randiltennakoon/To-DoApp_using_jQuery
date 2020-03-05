$(function(){
    $("#addbtn").click(function(){
        var v1 = $("input").val();
        if(v1 != ''){
            var el = $("<li></li>").text(v1);
            $(el).append("<button class='rmbtn'>X</button");
            $("#list").append(el);
            $("input").val("");
            $(".rmbtn").click(function(){
                $(this).parent().remove();
            });
        }
    });
});
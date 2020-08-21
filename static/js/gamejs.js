$(document).on("keydown", "form", function(event) {
    if (event.key == "Enter")
    {
        $("#subbtn").click();
        return false;
    }
    return true;
})
var colors = ["#ff4229", "#ff6426", "#ff8426", "#fac020", "#fcee1e", "#ecff1f", "#caff1c", "#c2ff19", "#97ff17", "#64ff17", "#0fff3b"];
$("#subbtn").click(function() {
    var temp = "{{ url_for('validate', id=id) }}";
    $.ajax({
        url: temp,
        type: "POST",
        data: $('form').serialize(),
        success: function(response) {
            console.log(response);
            var entry = "<tr>";
            entry += "<td> <span class='td-guess'>" + response.guess + "</span></td>";
            entry += "<td> <span class='td-crt'>" + response.correct + "</span></td>";
            entry += "<td> <span class='td-mis'>" + response.misplaced + "</span></td>";
            var result = response.validity;
            if (result == "Invalid")
                entry += "<td> <span class='td-inval'>" + result + "</span></td>";
            else entry += "<td> <span class='td-val'>" + result + "</span></td>";
            entry += "</tr>"
            $("#tb-body").append(entry);
            var doc = document.getElementById("textarea");
            $("#textarea").scrollTop(doc.scrollHeight);
            $("#scoreboard").html("SCORE <br>" + response.score);
            $("#scoreboard").css("background-image", "linear-gradient(to right," + colors[response.score/10] + "," + colors[response.score/10 + 1] + ")");
            if (response.over == "1")
            {
                var endcard_content = "Well Played! Score - " + response.score;
                $("#end-content").html(endcard_content);
                $("#mainarea").css("filter", "blur(5px)");
                $("#scoreboard").css("filter", "blur(5px");
                $("#gohome").css("filter", "blur(5px");
                $("#restart").css("filter", "blur(5px");
                $("#endcard").css("display", "block");
                $("#endcard").css("filter", "none");
                $("#sidearea").css("pointer-events", "none");
                $("#mainarea").css("pointer-events", "none");
                $("#scoreboard").css("pointer-events", "none");
            }
            else if (response.score <= "0")
            {
                var endcard_content = "Game Over! <br> Score - " + "0";
                $("#end-content").html(endcard_content);
                $("#mainarea").css("filter", "blur(5px)");
                $("#scoreboard").css("filter", "blur(5px");
                $("#gohome").css("filter", "blur(5px");
                $("#restart").css("filter", "blur(5px");
                $("#endcard").css("display", "block");
                $("#endcard").css("filter", "none");
                $("#sidearea").css("pointer-events", "none");
                $("#mainarea").css("pointer-events", "none");
                $("#scoreboard").css("pointer-events", "none");
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
    $("#guess").val("");
});       
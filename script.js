$(document).ready(function() {
    $(window).scroll(function() {
        this.scrollY > 20 ? $(".navbar1").addClass("sticky") : $(".navbar1").removeClass("sticky");
    });


    $("#bt1").click(function() {
        $("#mean").val("Word: Abysmal\nMeaning: Extremely bad.\nUsage: Madhav's quality of work is abysmal. \nSource: The Times Of India (22/06/2021, Chennai Edition).");
    });

    $("#bt2").click(function() {
        $("#mean").val("Word: Hermit\nMeaning: A person living in solitude as a religious discipline.\nUsage: The cave was inhabited by a hermit.\nSource: Deccan Chronicle (22/06/2021, Chennai Edition).");
    });

    $("#bt3").click(function() {
        $("#mean").val("Word: Prune\nMeaning:To reduce the extent of something by removing superfluous or unwanted parts.\nUsage: The workforce was pruned.\nSource: Times of India(21/06/2021,Chennai Edition).");
    });

    $("#bt4").click(function() {
        $("#mean").val("Word: Anonymizers\nMeaning: People who offer their services to anonymise others over internet\nUsage: We tried tracking the mail but hit a anonymizer on the other end.\nSource: The hacker news(June 17, 2021).");
    });


    $("#bt5").click(function() {
        $("#mean").val("Word: Arcane\nMeaning: Requiring secret or mysterious knowledge\nUsage: The teacher had an arcane way of teaching mathematics.");
    });

    $("#bt6").click(function() {
        $("#mean").val("Word: Laconic\nMeaning: Brief and to the point\nUsage: She had a laconic wit.");
    });

    $("#bt7").click(function() {
        $("#mean").val("Word: Respite\nMeaning: A respite is a break from something that's difficult or unpleasant.\nUsage: If you're cramming for exams, take an occasional walk to give yourself a respite from the intensity.");
    });

    $("#bt8").click(function() {
        $("#mean").val("Word: Encroach\nMeaning: To intrude on person's territory, personal life, rights etc.\nUsage: The suburbs encroach further into the rural area ever year.");
    });

    $("#bt9").click(function() {
        $("#mean").val("Word: Quire\nMeaning: A set of 24 or sometimes 25 sheets of paper of the same size and stock; one twentieth of a ream.\nSentence: It was common Anglo-Saxon practice to form a quire from four sheets of parchment - folded to make eight leaves.");
    });

    $("#bt0").click(function() {
        $("#mean").val("Word: Hellacious\nMeaning: very great, bad, or overwhelming.\nUsage: There was this hellacious hailstorm.");
    });
    var s = 1;
    var sr = "";

    $(".rbtn").click(function() {
        if (s < 13) {
            s += 1;
            sr = s + ".jpeg";
            $(".slide").css("background-image", "url(" + sr + ")");
        }
        if (s == 13) {
            $(".rbtn").css("opacity", "0.4");
        } else {
            $(".rbtn").css("opacity", "1");
        }
        if (s > 1) {
            $(".lbtn").css("opacity", "1");
        }

    });

    $(".lbtn").click(function() {
        if (s > 1) {
            s -= 1;
            sr = s + ".jpeg";
            $(".slide").css("background-image", "url(" + sr + ")");
        }
        if (s == 1) {
            $(".lbtn").css("opacity", "0.4");
        } else {
            $(".lbtn").css("opacity", "1");
        }
        if (s < 13) {
            $(".rbtn").css("opacity", "1");
        }

    });




    // RESET function

    $("#reset").click(function() {
        $(".cell").val("");
    });




    // REVEAL function
    $("#rev").click(function() {
        var ans = "BOSSSARSMILLONCALKICKUGLYLAGCUREHAILSATRHVIEOFATERIND";
        let inp = confirm("Reveal the answers?");
        var i = 0;
        if (inp) {
            for (let x = 1; x <= 9; x++) {
                for (let y = 1; y <= 9; y++) {
                    if (!$("#c" + x + y).hasClass("dis")) {
                        $("#c" + x + y).val(ans[i++]);
                    }
                }
            }
        }
    });

    // CHECK function
    $("#ch").click(function() {
        var ans = "BOSSSARSMILLONCALKICKUGLYLAGCUREHAILSATRHVIEOFATERIND";
        var dup = "";
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                if (!$("#c" + x + y).hasClass("dis")) {
                    dup += ($("#c" + x + y).val()).toUpperCase();
                }
            }
        }
        if (dup == ans) {
            alert("Bravo! You solved the crossword puzzle.");
        } else {
            alert("Oops! Try again.");
        }
    });


    $(window).resize(function() {
        if ($(window).width() < 600) {
            if ($("#lb").hasClass("fa-3x") && $("#rb").hasClass("fa-3x")) {
                $("#lb").removeClass("fa-3x");
                $("#rb").removeClass("fa-3x");
                $("#lb").addClass("fa-2x");
                $("#rb").addClass("fa-2x");
            }
        } else {
            if ($("#lb").hasClass("fa-2x") && $("#rb").hasClass("fa-2x")) {
                $("#lb").removeClass("fa-2x");
                $("#rb").removeClass("fa-2x");
                $("#lb").addClass("fa-3x");
                $("#rb").addClass("fa-3x");
            }
        }
    });


    // RESBUS function
    $("#rev-res1").click(function() {
        $("#txt1").val("I Understand");
    });
    $("#rev-res2").click(function() {
        $("#txt2").val("Scrambled Eggs");
    });
    $("#rev-res3").click(function() {
        $("#txt3").val("JavaScript");
    });
    $("#rev-res4").click(function() {
        $("#txt4").val("Eiffel Tower");
    });
    $("#rev-res5").click(function() {
        $("#txt5").val("Forensic");
    });
    $("#rev-res6").click(function() {
        $("#txt6").val("Rounded Figure");
    });
    $("#rev-res7").click(function() {
        $("#txt7").val("Breaking Record");
    });
    $("#rev-res8").click(function() {
        $("#txt8").val("CliffHangar");
    });
    $("#rev-res9").click(function() {
        $("#txt9").val("Endless Love");
    });




    $("#ch-res1").click(function() {
        if (($("#txt1").val()).toUpperCase() == "I UNDERSTAND") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res2").click(function() {
        if (($("#txt2").val()).toUpperCase() == "SCRAMBLED EGGS") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res3").click(function() {
        if (($("#txt3").val()).toUpperCase() == "JAVASCRIPT") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res4").click(function() {
        if (($("#txt4").val()).toUpperCase() == "EIFFEL TOWER") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res5").click(function() {
        if (($("#txt5").val()).toUpperCase() == "FORENSIC") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res6").click(function() {
        if (($("#txt6").val()).toUpperCase() == "ROUNDED FIGURE") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res7").click(function() {
        if (($("#txt7").val()).toUpperCase() == "BREAKING RECORD") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res8").click(function() {
        if (($("#txt8").val()).toUpperCase() == "CLIFFHANGAR") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });
    $("#ch-res9").click(function() {
        if (($("#txt9").val()).toUpperCase() == "ENDLESS LOVE") {
            alert("Bravo! You are correct.");
        } else {
            alert("Oops! Try again");
        }
    });

    $("#me").click(function() {
        if ($(".chid").css("display") == "none") {
            $(".chid").delay(100).show(0);
        } else {
            $(".chid").delay(100).hide(0);

        }
    });

    $(".cd1").click(function() {
        $(".chid").delay(100).hide(0);
    });





});

$(document).ready(function(){
    $(".certification-item-link").on( "click", function() {
    var certificationModal = $('#certification-item-modal');
    var certificationId = $(this).attr('id');
    if (certificationId == 'FCC-JADS'){
        var title = "FreeCodeCamp Javascript Algorithmns and Data Structures";
        var description = "The FreeCodeCamp Javascript Algorithmns and Data Structures certification covers topics such as: basic Javascript syntax, ES6 specific syntax, regular expressions, debugging, object oriented programming, functional programming, and algorithmn scripting. The course also includes hundreds of coding challenges and 5 Javascript projects; altogether, an estimated 300 hours of coursework.";
        $("#certification-modal-title").text(title);
        $("#certification-modal-description").text(description);
        $("#certification-item-header").css({"background-color":  "#006401"});
        certificationModal.modal('show');
    }
    else if (certificationId == 'FCC-RWD'){
        var title = "FreeCodeCamp Responsive Web Design";
        var description = "The FreeCodeCamp Javascript Algorithmns and Data Structures certification covers topics such as: HTML5 & CSS3 syntax, Responsive Web Design Principles, CSS Flexbox & Grid, and Applied Accessibility. The course also includes hundreds of coding challenges and 6 webpage projects; altogether, an estimated 300 hours of coursework.";
        $("#certification-modal-title").text(title);
        $("#certification-modal-description").text(description);
        $("#certification-item-header").css({"background-color":  "#006401"});
        certificationModal.modal('show');
    }
    else if (certificationId == 'Oracle-ODSCA'){
        var title = "Oracle Database SQL";
        var description = "";
        $("#certification-modal-title").text(title);
        $("#certification-modal-description").text(description);
        $("#certification-item-header").css({"background-color":  "#7F7F7F"});
        certificationModal.modal('show');
    }
    else if (certificationId == 'Comptia-P+'){
        var title = "Comptia Project+";
        var description = "";
        $("#certification-modal-title").text(title);
        $("#certification-modal-description").text(description);
        $("#certification-item-header").css({"background-color":  "	#E22319"});
        certificationModal.modal('show');
    }
    else if (certificationId == 'Comptia-A+'){
        var title = "Comptia A+";
        var description = "";
        $("#certification-modal-title").text(title);
        $("#certification-modal-description").text(description);
        $("#certification-item-header").css({"background-color":  "#E22319"});
        certificationModal.modal('show');
    }
    else if (certificationId == 'CIW-UID'){
        var title = "Certification Partners User Interface Designer";
        var description = "";
        $("#certification-modal-title").text(title);
        $("#certification-modal-description").text(description);
        $("#certification-item-header").css({"background-color":  "#004B85"});
        certificationModal.modal('show');
    }
    });

 });
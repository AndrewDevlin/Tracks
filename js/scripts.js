$(document).ready(function() {
  $("form").submit(function(event) {

    var environment = $("#environment").val();
    var apps = $("#apps").val();
    var websites = $("#websites").val();
    var truthVsBeauty = $("#truthvbeauty").val();
    var frontOrBack = $("#frontorback").val();

    if (environment === "Startup - I don't mind taking a risk on an exiting new venture.") {
      $("#hidec").hide();
      $("#hideruby").show();
    }
    else if (environment === "large") {
      $("#hideruby").hide();
      $("#hidec").show();
    }

    if (apps === "Web") {
      $("#hidejava").hide();
      $("#hidec").hide();
      $("#hidejavascript").show();
    }
    else if (apps === "Desktop") {
      $("#hidejava").hide();
      $("#hidejavascript").hide();
      $("#hidec").show();
    }
    else if (apps === "Mobile") {
      $("#hidec").hide();
      $("#hidejavascript").hide();
      $("#hidejava").show();
    }

    if (websites === "Interactive") {
      $("#hidephp").hide();
      $("#hideruby").show();
    }
    else if (websites === "Content heavy (but not so interactive.)") {
      $("#hideruby").hide();
      $("#hidephp").show();
    }

    if (truthVsBeauty === "Logic") {
      $("#hidedesign").hide();
      $("#hideruby").show();
    }
    else if (truthVsBeauty === "Aesthetics") {
      $("#hideruby").hide();
      $("#hidedesign").show();
    }

    if (frontOrBack === "Front-end developement - I want to create an experience the user will enjoy and remember.") {
      $("#hidephp").hide();
      $("#hidecss").show();
    }
    else if (frontOrBack === "Back-end developement - Let's see whats going on under the hood.") {
      $("#hidecss").hide();
      $("#hidephp").show();
    }

    event.preventDefault();
  });
});

(function () {
  "use strict";
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var to = form.getAttribute("data-mailto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = (document.getElementById("name").value || "").trim();
    var email = (document.getElementById("email").value || "").trim();
    var topic = document.getElementById("topic").value;
    var message = (document.getElementById("message").value || "").trim();

    var subject = "FirstBend — " + topic;
    var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
    var url = "mailto:" + to +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    if (status) {
      status.textContent = "Opening your email app — just press send. If nothing opens, write to " + to + ".";
    }
    window.location.href = url;
  });
})();

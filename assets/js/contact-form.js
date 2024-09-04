// This code snippet handles form submission for a form with the ID `white-walk-form`. When the form is submitted, it prevents the default form submission behavior, displays a loading Swal popup with the message "Please Wait", and sends an AJAX POST request to a Google Apps Script URL. On successful submission, it shows a success Swal popup with a thank you message and reloads the page after resetting the form fields. If an error occurs during the AJAX request, it displays an error Swal popup with a generic error message.
$("#white-walk-form").submit((e) => {
  e.preventDefault();
  Swal.fire({
    title: "Please Wait",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  $.ajax({
    //Deployment_ID: AKfycbylDzCE53M_8zZm2QPLgrD00rqGJ9GyPNrQDWmURR7Gzvk6h4DsGneuTc0mE6zatZs8
    url: "https://script.google.com/macros/s/AKfycbylDzCE53M_8zZm2QPLgrD00rqGJ9GyPNrQDWmURR7Gzvk6h4DsGneuTc0mE6zatZs8/exec",
    data: $("#white-walk-form").serialize(),
    method: "post",
    success: function (response) {
      Swal.fire({
        title: "Thank you for choosing WhiteWalk!",
        text: "We will contact you soon",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          $("#white-walk-form")[0].reset(); // Reset form fields
          window.location.reload();
        }
      });
    },
    error: function (err) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong",
      });
    },
  });
});

// This jQuery script restricts the input in elements with the class `mob-input` to only allow numeric values. It allows certain key presses like delete, backspace, tab, escape, enter, and numeric keypad input. It also permits navigation keys (home, end, arrow keys) and shortcuts like Ctrl+A. For all other key presses, such as letters or special characters, it prevents the default action, effectively ensuring that only numbers can be entered into these input fields.
$(document).ready(function () {
  $(".mob-input").keydown(function (e) {
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
      (e.keyCode == 65 && e.ctrlKey === true) ||
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return;
    }
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });
});

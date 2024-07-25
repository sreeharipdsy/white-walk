//form
$("#white-walk-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        //Deployment_ID: AKfycbylDzCE53M_8zZm2QPLgrD00rqGJ9GyPNrQDWmURR7Gzvk6h4DsGneuTc0mE6zatZs8
        url:"https://script.google.com/macros/s/AKfycbylDzCE53M_8zZm2QPLgrD00rqGJ9GyPNrQDWmURR7Gzvk6h4DsGneuTc0mE6zatZs8/exec",
        data:$("#white-walk-form").serialize(),
        method:"post",
        success:function (response) {
            Swal.fire({
                title: "Thank you for choosing WhiteWalk!",
                text: "We will contact you soon",
                icon: "success"
            }).then ((result) => {
                window.location.reload();
            });
        },
        error:function (err) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Something went wrong"
            }); 
        }
    })
})


//Mobile Number input takes only numbers maximum 10
$(document).ready(function() {
    $(".mob-input").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) || 
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

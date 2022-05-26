import "./scss/style.scss";
import "./css/style.css";
// import "@fortawesome/fontawesome-free/js/all.min";
import "webpack-jquery-ui";
import "jquery/dist/jquery.min";
import "webpack-jquery-ui/css";
import "jquery-ui-touch-punch/jquery.ui.touch-punch.min.js";
import Swal from "sweetalert2";
import "jquery/dist/jquery.slim.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min";
$(function () {
  let copyRightP = document.querySelector(".copy-right p");

  let date = new Date();

  copyRightP.innerHTML = `Copyright &copy; ${date.getFullYear()} coffee kings. All Rights Reseved`;

  let cartBtn = $(".cart");
  cartBtn.on("click", (e) => {
    Swal.fire(
      "Success! this product add to card",
      "Done!, you add this Coffee to your Cart",
      "success"
    );
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

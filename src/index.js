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
$(() => {
  let copyRightP = document.querySelector(".copy-right p");

  let date = new Date();

  copyRightP.innerHTML = `Copyright &copy; ${date.getFullYear()} coffee kings. All Rights Reseved`;

  let cartBtn = $(".cart");
  cartBtn.on("click", (e) => {
    Swal.fire(
      "Good job!",
      "Done!, you add this Coffee to your Cart",
      "success"
    );
  });
  // let subscribeInput = $(".form-control");
  // subscribeInput.on("focus", (e) => {
  //   let placeholder = subscribeInput.attr("placeholder", "");
  // });
  // subscribeInput.on("blur", (e) => {
  //   let placeholder = subscribeInput.attr(
  //     "placeholder",
  //     "subscribe in newspaper"
  //   );
  // });
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
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {User} from "../src/galactic-age.js";

let user = new User

(document).ready(function() {
  $('#planet-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const sex = $("input:radio[name=sex]:checked").val();
    const outputArray = Object.values(User)
    $('#output').text(outputArray);
  });
});
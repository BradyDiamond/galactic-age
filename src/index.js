import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {User} from "../src/galactic-age.js";



(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const age = $('#user-age').val();
    const sex = $("input:radio[name=sex]:checked").val();
    let user = new User(age,sex);
  });
});
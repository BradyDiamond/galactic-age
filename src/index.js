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
    const newUser = new User(age,sex);
    if (operator === "merc") {
      result = newUser.mercAge();
      yearsLeft= newUser.mercYearsLeft()
      resultPlanet = "Mercury";
    } else if (operator === "ven") {
      result = newUser.venAge();
      yearsLeft= UnewUser.venYearsLeft()
      resultPlanet = "venus";
    } else if (operator === "mars") {
      result = newUser.marsAge();
      yearsLeft = newUser.marsYearsLeft()
      resultPlanet = "Mars";
    } else if (operator === "jup") {
      result = newUser.jupAge();
      yearsLeft = newUser.jupYearsLeft()
      resultPlanet = "Jupiter";
    }
    $("#output").text("you are " + result + " years old on " + resultPlanet + " you're expected to live another " + yearsLeft + " years!" );
  });
});
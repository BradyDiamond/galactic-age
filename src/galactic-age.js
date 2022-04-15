export class User {
  constructor(age, sex,) {
    this.age = age;
    if (sex === "male") {
      this.life = 78;
    } else {
      this.life = 81
    }
}
mercAge() { 
  return parseFloat((this.age / .24).toFixed(2));
}
venAge() { 
  return parseFloat((this.age / .62).toFixed(2));
}
marsAge() { 
  return parseFloat((this.age / 1.88).toFixed(2));
}
jupAge() { 
  return parseFloat((this.age / 11.86).toFixed(2));
}
mercLife() { 
  return parseFloat((this.life / .24).toFixed(2));
}
venLife() { 
  return parseFloat((this.life / .62).toFixed(2));
}
marsLife() { 
  return parseFloat((this.life / 1.88).toFixed(2));
}
jupLife() { 
  return parseFloat((this.life / 11.86).toFixed(2));
}
mercYearsLeft() {
  let mercAge = parseFloat(this.mercAge().toFixed(2));
  let mercYear = parseFloat(this.mercLife().toFixed(2));
    let result= parseFloat(parseFloat(mercYear - mercAge).toFixed(2));
    if (result >= 0) {
      return result
    } else {
      return (result * -1)
    }
}
venYearsLeft() {
  let venAge = parseFloat(this.venAge().toFixed(2));
  let venYear = parseFloat(this.venLife().toFixed(2));
    let result= parseFloat(parseFloat(venYear - venAge).toFixed(2));
    if (result >= 0) {
      return result
    } else {
      return (result * -1)
    }
}
marsYearsLeft() {
  let marsAge = parseFloat(this.marsAge().toFixed(2));
  let marsYear = parseFloat(this.marsLife().toFixed(2));
    let result = parseFloat(parseFloat(marsYear - marsAge).toFixed(2));
    if (result >= 0) {
      return result
    } else {
      return (result * -1)
    }
}
jupYearsLeft() {
  let jupAge = parseFloat(this.jupAge().toFixed(2));
  let jupYear = parseFloat(this.jupLife().toFixed(2));
  let result = parseFloat(parseFloat(jupYear - jupAge).toFixed(2));
  if (result >= 0) {
  return result
} else {
  return (result * -1)
}
}
};

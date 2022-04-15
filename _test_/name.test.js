import {User} from "./../src/galactic.js";
// import {UserLife} from "./../src/galactic.js";

describe(`age`, () => {
  
  test(`It should create a user object with users age.`, () => {
    const userAge = new User(20, "male");
    expect(userAge.age).toEqual(20);
});

  test(`It should find the users age in mercury years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.mercAge()).toEqual(24);
  });

  test(`It should find the users age in venus years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.venAge()).toEqual(62);
  });

  test(`It should find the users age in mars years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.marsAge()).toEqual(188);
  });

  test(`It should find the users age in jupiter years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.jupAge()).toEqual(1186);
  });

});
describe(`life expectancy`, () => {
  
  test(`It should find the users life expectency on mercury.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.mercLife()).toEqual(19.44);
  });

  test(`It should find the users life expectency on venus.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.venLife()).toEqual(50.22);
  });
  test(`It should find the users life expectency on mars.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.marsLife()).toEqual(152.28);
  });
  test(`It should find the users life expectency on jupiter.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.marsLife()).toEqual(960.66);
  });
});



// 78-men
// 81-women
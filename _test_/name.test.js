import {User} from "./../src/galactic.js";

describe(`age`, () => {
  
  test(`It should create a user object with users age.`, () => {
    const userAge = new User(20);

    expect(userAge.age).toEqual(20);
});

  test(`It should find the users age in mercury years.`, () => {
    const userAge = new User(100);
 

    expect(userAge.mercAge()).toEqual(24);
  });

  test(`It should find the users age in venus years.`, () => {
    const userAge = new User(100);

    expect(userAge.venAge()).toEqual(62);
  });

  test(`It should find the users age in mars years.`, () => {
    const userAge = new User(100);
  

    expect(userAge.marsAge()).toEqual(188);
  });

});

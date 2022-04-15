import {User} from "./../src/galactic.js";

describe(`age`, () => {
  
  test(`It should create a user object with users age.`, () => {
    const userAge = new User(20);

    expect(userAge.age).toEqual(20);
});
});

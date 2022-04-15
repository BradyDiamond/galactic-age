import {User} from "./../src/galactic.js";


describe(`age`, () => {
  
  test(`It should create a user object with users age.`, () => {
    const userAge = new User(20, "male");
    expect(userAge.age).toEqual(20);
});

  test(`It should find the users age in mercury years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.mercAge()).toEqual(416.67);
  });

  test(`It should find the users age in venus years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.venAge()).toEqual(161.29);
  });

  test(`It should find the users age in mars years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.marsAge()).toEqual(53.19);
  });

  test(`It should find the users age in jupiter years.`, () => {
    const userAge = new User(100, "male");
    expect(userAge.jupAge()).toEqual(8.43);
  });

});
describe(`life expectancy`, () => {
  
  test(`It should find the users life expectency on mercury.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.mercLife()).toEqual(337.5);
  });

  test(`It should find the users life expectency on venus.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.venLife()).toEqual(130.65);
  });
  test(`It should find the users life expectency on mars.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.marsLife()).toEqual(43.09);
  });
  test(`It should find the users life expectency on jupiter.`, () => {
    const userAge = new User(20, "female");
    expect(userAge.jupLife()).toEqual(6.83);
  });
  test(`It should find the users years left on mercury.`, () => {
        const userAge = new User(20, "female");
        expect(userAge.mercYearsLeft()).toEqual(254.17);
      });

});
// describe(`life expectancy`, () => {
  
//   test(`It should find the users years left on mercury.`, () => {
//     const userAge = new User(20, "female");
//     expect(userAge.YearsLeft()).toEqual(332.5);
//   });
// });



// 78-men
// 81-women
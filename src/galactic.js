export class User {
  constructor(age,sex) {
    this.age = age;
    if (sex === "male") {
      this.life = 78;
    } else {
      this.life = 81
    }
    yearsLeft();
}
  mercAge() { 
   return this.age * .24;
  }
  venAge() { 
    return this.age * .62;
   }
   marsAge() { 
    return this.age * 1.88;
   }
   jupAge() { 
    return this.age * 11.86;
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
  YearsLeft() { 
    mercYearsLeft = (this.mercLife() - this.mercAge());
    return mercYearsLeft;
};
// export class UserLife {
//   constructor(age) {
//     this.age = age;
// }

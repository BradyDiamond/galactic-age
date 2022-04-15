export class User {
  constructor(age) {
    this.age = age;
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
   
};

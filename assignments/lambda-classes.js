// CODE here for your Lambda Classes

class Person {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
  }

  speak() {

    return `Hello my name is ${this.name}, and Im from ${this.location}`;

  }
}


class Instructor extends Person {
  constructor(object) {
    super(object);
    this.speciality = object.speciality;
    this.favLanguage = object.favLanguage;
    this.catchPhrase = object.catchPhrase;
  }

  demo(subject) {

    return `Today we are learning about ${subject}`;

  }

  grade(student, subject) {

    return `${student.name} receives a perfect score on ${subject}`;

  }
}

const Mikaela = new Instructor({

  name: 'Mikaela',
  location: 'Boston',
  age: '23',
  favLanguage: 'JavaScript',
  speciality: 'Everything',
  catchPhrase: 'Wut Wut!'

})

const Britt = new Instructor({

  name: 'Britt',
  location: 'SF',
  age: '23',
  favLanguage: 'All of them',
  speciality: 'Teaching',
  catchPhrase: 'Yeih Yeih!'

})





class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects;
  }

  listsSubjects() {

    return Student.favSubjects

  }

  PRAssignment(subject) {


    return `${this.name} has submitted a PR for ${subject}`;

  }

  sprintChallenge(subject) {


    return `${this.name} has begun sprint challenge on ${subject}`;

  }
}

const student001 = new Student({

  name: 'Luis',
  location: 'NYC',
  age: 34,
  favLanguage: 'JavaScript',
  specialty: 'Dont know yet',
  catchPhrase: `woop woop!`

})

const Abdi = new Student({

  name: 'Abdi',
  location: 'LA',
  age: 30,
  favLanguage: 'JavaScript and Python',
  specialty: 'all',
  catchPhrase: `Guess who!`

})


class ProjectManagers extends Instructor {
  constructor(object) {
    super(object);
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  }

  standUp(channel) {

    return `${this.name} announces to channel, @channel standup times!`;

  }

  debugsCode(Student, subject) {

    return `${this.name} debugs ${Student.name}'s code on ${subject}`;

  }
}

const Donald = new ProjectManagers({

  name: 'Donald T',
  location: 'Washington',
  age: 73,
  favLanguage: 'cursing',
  specialty: 'women',
  catchPhrase: `MAGA`

})

const Barack = new ProjectManagers({

  name: 'Barack, O',
  location: 'Washington',
  age: 58,
  favLanguage: 'teleprompter',
  specialty: 'war',
  catchPhrase: `Yes we can!`

})



// const job = {
//   title: "Developer",
//   location: "New York",
//   salary: 500000,
// };

// console.log(new Date().toISOString());

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.place = place;
        this.salary = salary;
    }

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`)
    }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000)

console.log(developer);
developer.describe();
cook.describe();
const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

  
// task 1 print the name list

const getName = (score)=>score.name;
console.log(scores.map(getName),scores);

// task 2 >=40 pass.. find those student that passed 

const isPass =scores.filter((score)=>score.marks >=40);
console.log(isPass);

// task 3  Find all the names who failed the exams

const failed = scores.filter((score)=>score.marks < 40);
console.log(failed);
const failedName = failed.map((score) => score.name);
console.log(failedName);





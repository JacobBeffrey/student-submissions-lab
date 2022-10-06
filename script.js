"use strict";
// sumissions is an array of objects

// 1.
const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};

// not interested in addSubmissions's return value,
// ...so I dont call it in a console log
addSubmission(submissions, "James", 100, "2022-10-05");
addSubmission(submissions, "Andrea", 60, "2022-10-05");
// check work: (data that was modified)
console.log(submissions);

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

//deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

// 4.
const deleteSubmissionByName = (array, name) => {
  const foundIndex = array.findIndex((submissions) => {
    return submissions.name === name;
  });
  array.splice(foundIndex, 1);
};

deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

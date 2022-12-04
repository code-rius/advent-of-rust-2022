const fs = require('fs');
const readline = require('readline');

const getFileContents = (filePath) => {
  let data
  try {
    data = fs.readFileSync(filePath, 'utf8');
    data = data.split('\n')
  } catch (err) {
    console.error(err);
    throw (err);
  }

  return data;
}

const getThreeLargest = (array) => {
  let threeLargest = [];

  for (i=0; i<3; i++){
    const largestNumber = Math.max(...array);

    const indexOfLargest = array.indexOf(largestNumber);
    threeLargest.push(...array.splice(indexOfLargest, 1));
  }

  return threeLargest; 
}

const calculateElfCalories = () => {
  const fileData = getFileContents('./input.txt');
  console.log(fileData);
  
  let moneySums = [];
  let lastLine;
  let currentSum = 0;
  
  fileData.forEach( line => { 
  if (line === '') {
      moneySums.push(currentSum);
      currentSum = 0;
    } else {
      currentSum += Number(line);
    }
    lastLine = line;
  })

  const threeLargest = getThreeLargest(moneySums)
  const sumOfThreeLargest = threeLargest.reduce((a, b) => a + b, 0)
  
  console.log(`Three largest caloric horders:\t${threeLargest}`);
  console.log(`Total amount shared between the three:\t${sumOfThreeLargest}`);
}

calculateElfCalories();
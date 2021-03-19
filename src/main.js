// generate random numbers
// call this from main.html

// generate rondom numbers with
// n = listLength, number range = numberOfGroups, median? offset = offset
const generateRandomNums = (listLength = 100, numberOfGroups = 13, offset = 0.0) => {
  const distributionList = new Int16Array(listLength);

  distributionList.forEach((val, index) => {
    val = 0;
    for (const addelem in new Int16Array(numberOfGroups)) {
      val += Math.round(Math.random() + offset);
    }
    distributionList[index] = val;
  }
  );
  return [distributionList.sort(), numberOfGroups];
};

// generate frequency table from given list obj
const generateFreqTable = (array, numOfGroups) => {
  // given array must be sorted (ascending)
  const freqResult = new Int16Array(numOfGroups);
  for (let i = 0; i < numOfGroups; i++) {
    const result = array.filter(num => num === i);
    freqResult[i] = result.length;
  }
  return freqResult;
};

// generate simple ascii bar plot
const plotStuff = (idx, srcArray, idxchar = "=") => {
  const pltTitle = "pattern" + (idx + 1);
  splitBarTop =  `<p>${"+".repeat(5)}<b>${pltTitle}</b>`+ "+".repeat(20 - pltTitle.length) + "<br>";
  splitBarBot = "+".repeat(25) + "</p>";
  let returnStr = "";
  for (const arrNum of srcArray) {
    returnStr += idxchar.repeat(arrNum) + `:${arrNum}<br>`;
  }
  return splitBarTop + returnStr + splitBarBot;
};

// test
// generateRandomNums(100, 13)
// console.log(generateRandomNums(100, 13));
// console.log(
//  ...generateFreqTable(...generateRandomNums(100, 13, -0.2))
// );

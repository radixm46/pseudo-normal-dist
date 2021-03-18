// generate random numbers
// call this from main.html

const generateRandomNums = (listLength = 100, numberOfGroups = 13, offset = 0.0) => {
  var distributionList = new Int8Array(listLength);

  distributionList.forEach((val, index) => {
      val = 0;
      for (const addelem in new Int8Array(numberOfGroups)) {
        val += Math.round(Math.random() + offset);
      }
      distributionList[index] = val;
    }
  );
  return [distributionList.sort(), numberOfGroups];
}


const generateFreqTable = (array, numOfGroups) => {
  // given array must be sorted (ascending)
  let freqResult = new Int8Array(numOfGroups);
  for (let i = 0; i < numOfGroups; i++) {
    const result = array.filter(num => num === i);
    freqResult[i] = result.length;
  }
  return freqResult;
}


const plotStuff = (idx, srcArray, idxchar='-') => {
  let pltTitle = 'pattern'+(idx+1);
  splitBarTop = pltTitle + '+'.repeat(20 - pltTitle.length) + '<br>';
  splitBarBot = '+'.repeat(20) + '<br>';
  let returnStr = '';
  for (const arrNum of srcArray) {
    returnStr += idxchar.repeat(arrNum) + `:${arrNum}<br>`;
  }
  return splitBarTop + returnStr + splitBarBot;
}

// test
//generateRandomNums(100, 13)
//console.log(generateRandomNums(100, 13));
//console.log(
//  ...generateFreqTable(...generateRandomNums(100, 13, -0.2))
//);

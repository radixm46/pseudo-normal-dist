'use strict';
// generate random numbers
// call this from main.html

class RandomNormalGenerator {
  // generate rondom numbers with
  constructor(listLength = 100, numberOfGroups = 13, offset = 0.0) {
    this.distributionList = new Int16Array(listLength);
    this.numberOfGroups = numberOfGroups;
    this.offset = offset;
    this.distributionList.forEach((val, index) => {
      val = 0;
      for (const addelem in new Int16Array(numberOfGroups)) {
        val += Math.round(Math.random() + offset);
      }
      this.distributionList[index] = val;
    });
    this.distributionList = this.distributionList.sort();

    // generate frequency table from given list obj
    const genFreqArr = () => {
      const freqArray = new Int16Array(this.numberOfGroups);
      // given array must be sorted (ascending)
      for (let i = 0; i < this.numberOfGroups; i++) {
        const result = this.distributionList.filter(num => num === i);
        freqArray[i] = result.length;
      }
      return freqArray;
    };
    this.freqArray = genFreqArr();
  }

  // generate simple ascii bar plot
  plotStuff(idx, idxchar = "=") {
    const pltTitle = "pattern" + (idx + 1);
    const freqArrayStr = `<h2>${pltTitle}: ${this.freqArray}</h2>`;
    let returnStr = "";
    for (const arrNum of this.freqArray) {
      returnStr += idxchar.repeat(arrNum) + `:${arrNum}<br>`;
    } // generate ascii plot
    return freqArrayStr + `<p class="barplot">${returnStr}</p>`;
  }
}

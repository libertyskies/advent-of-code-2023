const fs = require("node:fs/promises");

async function findNumbers() {
  let calibration = 0;
  try {
    const data = await fs.readFile("input.txt", { encoding: "utf-8" });
    const dataSplit = data.split("\n");
    for (let i = 0; i < dataSplit.length; i++) {
      let newNum = await findFirstAndLastNums(dataSplit[i]);
      calibration += newNum;
    }
    console.log(calibration);
  } catch (err) {
    console.log(err);
  }
}

async function findFirstAndLastNums(string) {
  let firstNum;
  let lastNum;
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i])) {
      firstNum = string[i];
      break;
    }
  }
  for (let j = string.length - 1; j >= 0; j--) {
    if (Number(string[j])) {
      lastNum = string[j];
      break;
    }
  }
  let result = `${firstNum}${lastNum}`;
  return Number(result);
}

findNumbers();

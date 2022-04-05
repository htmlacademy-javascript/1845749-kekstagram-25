function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (upper - lower + 1) ) + lower;
}

function checkCommentLength (comment, commentLength) {
  return (comment.length <= (commentLength));
}

function getRandomUniqueArr(min, max, length) {
  const randomArr =[];

  while (randomArr.length < length) {
    const rundomNumber = getRandomInteger(min,max);

    if (randomArr.indexOf(rundomNumber) === -1) {
      randomArr.push(rundomNumber);
    }
  }

  return randomArr;
}

function getRandomArr(min, max, length) {
  const randomArr =[];
  while (randomArr.length < length) {
    const rundomNumber = getRandomInteger(min,max);

    randomArr.push(rundomNumber);
  }

  return randomArr;
}

checkCommentLength('aaa', 3);

export {getRandomInteger, checkCommentLength, getRandomArr, getRandomUniqueArr};

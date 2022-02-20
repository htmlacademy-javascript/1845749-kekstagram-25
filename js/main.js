//источник: https://vk.com/away.php?to=https%3A%2F%2Fschoolsw3.com%2Fjs%2Fjs_random.php&el=snippet

function getRndInteger(min, max) {
  if ((min<0) || (max<0)) {
    return('Введите неотрицательные значения');
  }

  if (min >= max) {
    return ('Введите корректные максимальное и минимальное значения');
  } else {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}

function checkCommentLength (comment, maxCommentLength) {
  return (comment.length <= (maxCommentLength));
}

getRndInteger(1,2);
checkCommentLength('aaa',4);


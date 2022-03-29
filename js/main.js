const userNumber = 25;

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (upper - lower + 1) ) + lower;
}

function checkCommentLength (comment, commentLength) {
  return (comment.length <= (commentLength));
}

function getRandomUniqueArr(min, max, length) {
  let randomArr =[];

  while (randomArr.length < length) {
      let rundomNumber = getRandomInteger(min,max);

      if (randomArr.indexOf(rundomNumber) == -1) {
          randomArr.push(rundomNumber)
      }
    }

    return randomArr;
}

function getRandomArr(min, max, length) {
  let randomArr =[];
  while (randomArr.length < length) {
      let rundomNumber = getRandomInteger(min,max);

      randomArr.push(rundomNumber)
  }

  return randomArr;
}

let text = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня полу чилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
let descriptionStringsArr = ['Давным-давно в далёкой-далёкой галактике...', 'Нет, я твой отец', 'Чуи, мы дома', 'Нееееет!', 'Используй силу, Люк', 'Переходи на тёмную сторону', 'Страх доступ открывает к тёмной стороне.']
let messageStringsArr = text.split(/[.!?(?!)]\s/).map(i => i.replace(/\.*$/,"."));
let userNamesArr = ['Ackbar', 'Bossk', 'C-3PO', 'Darth Maul', 'Ewoks', 'Boba Fett', 'General Grievous', 'Han Solo', 'IG-88', 'Jar Jar Binks', 'Kyle Katarn', 'Luke Skywalker', 'Mara Jade', 'Nien Numb', 'Obi-Wan Kenobi', 'Princess Leia', 'R2-D2', 'Stormtrooper', 'Thrawn', 'Ulic Qel-Droma', 'Darth Vadar', 'Wedge', 'Xizor', 'Yoda', 'Zuckuss']

let userIdArr = getRandomUniqueArr(1, 25, userNumber);
let urlArr = getRandomUniqueArr(1, 25, userNumber);
let descriptionArr = getRandomArr(0, descriptionStringsArr.length - 1, userNumber);
let likesArr = getRandomArr(15, 200, userNumber);

let commentIdArr = getRandomUniqueArr(1, 1000, userNumber);
let avatarArr = getRandomArr(1, 6, userNumber);
let messageArr = getRandomArr(0, messageStringsArr.length - 1, userNumber);
let namesArr = getRandomArr(0, 24, 25);

console.log(makeUserObjects(10));

function makeUserObjects (userNumber) {
  let userObjectsArr = [];

  for (let i = 0; i < userNumber; i++){

      let userObject = {};

      userObject.id = userIdArr[i];
      userObject.url = `photos/${urlArr[i]}.jpg`;
      userObject.description = descriptionStringsArr[descriptionArr[i]];
      userObject.likes = likesArr[i];
      userObject.comments = {
          id: commentIdArr[i],
          avatar: `img/avatar-${avatarArr[i]}.svg`,
          message: messageStringsArr[messageArr[i]],
          name: userNamesArr[namesArr[i]]
      }

      userObjectsArr.push(userObject);
  }

  return userObjectsArr;
}




// сгенерировать массив из 25 объектов

//структура объекта:

// let userObj = {
//   id: number from 1 to 25, unique - массив от 1 до 25 перемешать ----1
//   url: String, 'photos/{{i}}.jpg', где {{i}} — это число от 1 до 25, unique ----1
//   description: String, - разобрать стих из 25 строк на отдельные строки, случайное от 1 до 25 ----1
//   likes: number from 15 to 200, ----2
//   comments: Object, {
//                       id: 135, - random unique ----3
//                       avatar: 'img/avatar-6.svg', img/avatar-{{случайное число от 1 до 6}}.svg -----4
//                       message: 'В целом всё неплохо. Но не всё.', ----5
//                       name: 'Артём', -----6
//                     }

// }


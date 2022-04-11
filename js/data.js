import {getRandomArr, getRandomUniqueArr} from './util.js';

const userNumber = 25;
const text = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня полу чилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
const descriptionStringsArr = ['Давным-давно в далёкой-далёкой галактике...', 'Нет, я твой отец', 'Чуи, мы дома', 'Нееееет!', 'Используй силу, Люк', 'Переходи на тёмную сторону', 'Страх доступ открывает к тёмной стороне.'];
const messageStringsArr = text.split(/[.!?(?!)]\s/).map((i) => i.replace(/\.*$/,'.'));
const userNamesArr = ['Ackbar', 'Bossk', 'C-3PO', 'Darth Maul', 'Ewoks', 'Boba Fett', 'General Grievous', 'Han Solo', 'IG-88', 'Jar Jar Binks', 'Kyle Katarn', 'Luke Skywalker', 'Mara Jade', 'Nien Numb', 'Obi-Wan Kenobi', 'Princess Leia', 'R2-D2', 'Stormtrooper', 'Thrawn', 'Ulic Qel-Droma', 'Darth Vadar', 'Wedge', 'Xizor', 'Yoda', 'Zuckuss'];

const userIdArr = getRandomUniqueArr(1, 25, userNumber);
const urlArr = getRandomUniqueArr(1, 25, userNumber);
const descriptionArr = getRandomArr(0, descriptionStringsArr.length - 1, userNumber);
const likesArr = getRandomArr(15, 200, userNumber);

const commentIdArr = getRandomUniqueArr(1, 1000, userNumber);
const avatarArr = getRandomArr(1, 6, userNumber);
const messageArr = getRandomArr(0, messageStringsArr.length - 1, userNumber);
const namesArr = getRandomArr(0, 24, 25);

function makeUserObjects (userObjectsNumber) {
  const userObjectsArr = [];

  for (let i = 0; i < userObjectsNumber; i++){

    const userObject = {};

    userObject.id = userIdArr[i];
    userObject.url = `photos/${urlArr[i]}.jpg`;
    userObject.description = descriptionStringsArr[descriptionArr[i]];
    userObject.likes = likesArr[i];
    userObject.comments = [{
      id: commentIdArr[i],
      avatar: `img/avatar-${avatarArr[i]}.svg`,
      message: messageStringsArr[messageArr[i]],
      name: userNamesArr[namesArr[i]]
    }];

    userObjectsArr.push(userObject);
  }

  return userObjectsArr;
}

export {makeUserObjects};

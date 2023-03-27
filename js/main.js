//Генерация случайного целого числа из диапазона от a до b включительно

function getRandomPositiveInteger ( a, b = 1 ) {
  if (a === undefined) {
    throw new Error ('Первый параметр должен быть число');
  }
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomPositiveInteger(0,1);


//Проверка строки string на превышение длины length

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('gfdsgdfggfdgfdgdfgdg', 10);

//Задание 4.9
//
//Массив имен для генерации случайных имен авторов комментариев
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

//Массив фамилий для генерации случайных фамилий авторов комментариев
const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

//Массив предложений для генерации комментариев
const SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//Массив описаний к фото
const DESCRIPTIONS = [
  'Полет птиц в рассветном небе.',
  'Грустный клоун на цирковой арене.',
  'Шелест листьев под ногами.',
  'Золотой закат над океаном.',
  'Первый снег в городе.',
  'Кошка, спящая на подоконнике.',
  'Горячий шоколад в зимний вечер.',
  'Свечи, горящие на старом камине.',
  'Сумасшедший танец под дождем.',
  'Ветер, играющий с волосами.',
  'Отражение лунного света на воде.',
  'Черный кофе на рассвете.',
  'Радуга после дождя.',
  'Падающая звезда в ночном небе.',
  'Пахнущий цветущий сад.',
  'Лежа на пляже под теплым солнцем.',
  'Голоса птиц на рассвете.',
  'Собака, играющая на зеленой лужайке.',
  'Жареный маршмеллоу у костра.',
  'Гладь зеркального озера.',
  'Дождевые капли на окне.',
  'Смех друзей на вечеринке.',
  'Огни ночного города.',
  'Горячий душ после холодной прогулки.',
  'Летящий самолет в закатном небе.',
];

//максимальное количество комментариев к фото
const MAX_NUMBERS_OF_COMMENTS = 10;

//получение случайного элемента из переданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//генерация комментария из одного или двух пердложений случайным образом
const createMessage = () => {
  if (getRandomPositiveInteger(1, 2) === 1){
    return getRandomArrayElement(SENTENCES);
  } else {
    return `${getRandomArrayElement(SENTENCES)} ${getRandomArrayElement(SENTENCES)}`;
  }
};

//Генерация id
//массив хранит назначенные ранее id для комментариев
const arrayUsedIdOfComments = [];
//массив хранит назначенные ранее id для адресов фото
const arrayUsedIdOfUrls = [];

const getId = (array, start, end) => {
  let id = 0;
  do {
    id = getRandomPositiveInteger(start, end);
  } while (array.indexOf(id) !== -1);
  array.push(id);
  return id;
};

//создание комментария
const createComment = () => ({
  id: getId(arrayUsedIdOfComments, 1, 1000),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
});

//массив комментариев к фотографии. случайное количество от 1 до MAX_NUMBERS_OF_COMMENTS
const getArrayComments = () => Array.from({length: getRandomPositiveInteger(1, MAX_NUMBERS_OF_COMMENTS)}, createComment);

const getDescription = () => {
  const index = getRandomPositiveInteger(0, DESCRIPTIONS.length - 1);
  const description = DESCRIPTIONS[index];
  DESCRIPTIONS.splice(index, 1);
  return description;
};


const createPhotoDescription = (index) => ({
  id: index + 1,
  url: `photos/${getId(arrayUsedIdOfUrls, 1, 25)}.jpg`,
  description: getDescription(),
  likes: getRandomPositiveInteger(15, 200),
  comments: getArrayComments(),
});

const arrayPhotoDescriptions = Array.from({length: 25}, (_, index) => createPhotoDescription(index));
console.log(arrayPhotoDescriptions);

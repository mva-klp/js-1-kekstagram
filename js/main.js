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

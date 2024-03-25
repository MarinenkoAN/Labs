//1. Часть
// Задача 1 (на таймеры)
function counter(n) {
    let timer = setInterval(() => {
        console.log(n);
        n--;
        if (n < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function createCounter(n) {
    let currentCount = n;
    let timer;

    return {
        start() {
            timer = setInterval(() => {
                console.log(currentCount);
                currentCount--;
                if (currentCount < 0) {
                    clearInterval(timer);
                }
            }, 1000);
        },
        pause() {
            clearInterval(timer);
        },
        stop() {
            clearInterval(timer);
            currentCount = n;
        }
    };
}

// Пример использования
counter(5);

let myCounter = createCounter(3);
myCounter.start();
// myCounter.pause();
// myCounter.start();
// myCounter.stop();




// Задача 2 (на промисы)
function delay(N) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, N * 1000);
    });
}

function printCountdown(n) {
    if (n < 0) {
        return;
    }
    
    console.log(n);
    delay(1).then(() => printCountdown(n - 1));
}

// Решение задачи с помощью функции delay
printCountdown(5);


//Задание 3
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      });
  }
  
  async function getGithubUser() {
    let user;
    while (true) {
      let name = prompt("Введите логин?", "iliakan");
      try {
        const response = await loadJson(`https://api.github.com/users/${name}`);
        user = response;
        alert(`Полное имя: ${user.name}.`);
        break;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
    
    return user;
  }
  
  getGithubUser();




  //2. Часть

  //1 Посчитать максимум и минимум массива:
  const arr = [1, 6, -1, 22, 13];
const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(`Максимальное значение: ${max}`);
console.log(`Минимальное значение: ${min}`);

//2. Перевернуть строку задом наперёд:
const str = "!тевирП";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

//2.1 Для переворота строки, введенной пользователем, можно использовать этот код:

const userInput = prompt("Введите строку:");
const reversedUserInput = userInput.split('').reverse().join('');
console.log(reversedUserInput);

//3 Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива:

const arr = [3, 5, 8, 13, 21, 42];
const sum = arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + Math.sqrt(curr), 0);
console.log(sum);

//4. Написать функцию, которая проверяет, являются ли две строки анаграммой:

function anagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

console.log(anagram("Лунь", "нуль")); // true
console.log(anagram("Лунь", "ноль")); // false

//5. Написать функцию, которая проверяет, является ли строка палиндромом:

function palindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-zа-яё]/g, '');
  return formattedStr === formattedStr.split('').reverse().join('');
}

console.log(palindrome("Не гни папин ген")); // true
console.log(palindrome("123")); // false

//6.Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи. Так, в консоли будет: 0, 1, 1, 2, 3, 5, 8, 13...

function fibonacci() {
  let a = 0;
  let b = 1;

  function nextFib() {
    const c = a + b;
    a = b;
    b = c;
    console.log(a);
  }

  setInterval(nextFib, 1000);
}

fibonacci();

//7. Написать функцию intersect(arrA, arrB), принимающую на вход два массива и возвращающую пересечение значений этих массивов.

function intersect(arrA, arrB) {
  return arrA.filter(value => arrB.includes(value));
}

console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]

//8. Написать HTML и JS-код, который рисует кнопки "+" и "-" и значение, уменьшающееся или увеличивающееся при нажатии.


<!DOCTYPE html>
<html>
<head>
    <title>Counter</title>
</head>
<body>
    <button id="decrement">-</button>
    <span id="value">0</span>
    <button id="increment">+</button>

    <script>
        const valueElement = document.getElementById('value');
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        let value = 0;
        
        incrementButton.addEventListener('click', () => {
            value++;
            valueElement.textContent = value;
        });
        
        decrementButton.addEventListener('click', () => {
            if (value > 0) {
                value--;
                valueElement.textContent = value;
            }
        });
    </script>
</body>
</html>

//9. Что выведет этот код? Как сделать так, чтобы он вывел 1, 2, 3?
// Этот код выведет 4
for (let i = 1; i <= 3; i++) {
  setTimeout((j) => {
    console.log(j);
  }, i * 1000, i);
}

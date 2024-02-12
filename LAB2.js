// Генератор случайного числа в заданном диапазоне
function* random(n, m) {
    while (true) {
      yield Math.floor(Math.random() * (m - n + 1) + n);
    }
  }
  
  // Генератор чисел последовательности Падована
  function* padovan() {
    let a = 1, b = 1, c = 1;
    while (true) {
      yield a;
      const next = a + b;
      a = b;
      b = c;
      c = next;
    }
  }
  
  // Функция для проверки числа на простоту
  function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  
  // Генератор простых чисел
  function* primeNumbers() {
    let num = 2;
    while (true) {
      if (isPrime(num)) {
        yield num;
      }
      num++;
    }
  }
  
  // Пример использования генераторов
  const randomGenerator = random(1, 10);
  const padovanGenerator = padovan();
  const primeGenerator = primeNumbers();
  
  // Получение значений из генераторов
  console.log('Случайное число:', randomGenerator.next().value);
  console.log('Число из последовательности Падована:', padovanGenerator.next().value);
  console.log('Простое число:', primeGenerator.next().value);






  // Подсчет числа вхождений букв (или слов) в строке с использованием Map
function countOccurrences(str) {
    const map = new Map();
    str.toLowerCase().split('').forEach(char => {
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    });
    return map;
  }
  
  // Функция для получения n-го простого числа с использованием BigInt
  function getPrime(n) {
    let count = 0;
    let num = BigInt(2);
    
    while (count < n) {
      let isPrime = true;
      for (let i = BigInt(2); i * i <= num; i++) {
        if (num % i === BigInt(0)) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        count++;
      }
      
      num++;
    }
    
    return num - BigInt(1);
  }
  
  // Пример использования функций
  const testString = 'Lorem ipsum dolor sit amet';
  const occurrencesMap = countOccurrences(testString);
  console.log('Число вхождений букв в строке:', occurrencesMap);
  
  const nthPrime = getPrime(10); // Получить 10-е простое число
  console.log('10-е простое число:', nthPrime.toString());
  
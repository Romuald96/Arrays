const main = require('./Arr.js') // Основной объект с набором функций

test('', ()=> { // Получение суммы всех элементов массива
  expect(main.sumArray([6,2])).toBe(8)
})
test('', ()=> { // Получение длины строки элемента массива
  expect(main.stringLengths(['Roma','Sasha'])).toEqual([4,5])
})
test('',()=> { // Увеличение каждого элемента массива на (+1)
  expect(main.incrementArray([2,3,4])).toEqual([3,4,5])
})
test('',()=> { // Перевод элемента массива в верхний регистр
  expect(main.uppercaseArray(['Roma','Sasha'])).toEqual(['ROMA','SASHA'])
})
test('',()=> { // Получение массива без повторяющихся элементов
  expect(main.uniqueArray([2,3,3,3,4,4,2,4])).toEqual([2,3,4])
})
test('',()=> { // Возведение элементов массива в квадрат
  expect(main.squareArray([2,3,4])).toEqual([4,9,16])
})
test('',()=> { // Фильтрация элементов массива по длине строки
  expect(main.filterByLength(['Roma','Sasha','Anatolii'],4)).toEqual(['Sasha','Anatolii'])
})
test('',()=> { // Получение совмещенного массива без повторяющихся элементов
  expect(main.commonElements([1,2,3],[2,3,4])).toEqual([1,2,3,4])
})
test('',()=> { // Получение массива свойств из элементов (объектов) массива
  expect(main.extractNames([{name:'Roma'},{name:'Sasha'}])).toEqual(['Roma','Sasha'])
})
test('',()=> { // Сортировка элементов массива в порядке возрастания
  expect(main.sortArray([32,4,6,25,11])).toEqual([4,6,11,25,32])
})
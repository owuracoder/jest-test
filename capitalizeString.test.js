const {capitalizeString, reverseString, Calculator, ceaserCipher, analyzeArray} = require('./capitalizeString')


test('word becomes Word', () => {
    expect(capitalizeString('name')).toBe('Name')
})

test('a becomes A', () => {
    expect(capitalizeString('a')).toBe('A')
})

test('about becomes tuoba', () => {
    expect(reverseString('about')).toBe('tuoba')
})

test('me become em', () => {
    expect(reverseString('me')).toBe('em')
})

test('2 adds 2 equals 4', () => {
    const calculate = new Calculator(2,2)
    expect(calculate.add()).toBe(4)
})

test('4 minus 2 equals 2', () => {
    const calculate = new Calculator(4,2)
    expect(calculate.subtract()).toBe(2)
})

test('boy becomes cpz', () => {
    expect(ceaserCipher('boy',1)).toBe('cpz')
})

test('I want fooD becomes L zdqw irrgG', () => {
    expect(ceaserCipher('I want foodD', 3)).toBe('L zdqw irrgG')
})

test("[1,8,3,4,2,6] to become {average: 4, min: 1, max: 8, length: 6}", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1,
max: 8, length: 6})
})



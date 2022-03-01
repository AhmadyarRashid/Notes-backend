/* eslint-disable */
const add = (a: number, b: number) => {
  return a + b;
}

const subtract = (a: number, b: number) => {
  return a - b;
}

const multiply = (a: number, b: number) => {
  return a * b;
}

describe("Playground testing", () => {
  test('Adding two numbers', async () => {
    expect(add(5, 5)).toStrictEqual(10)
    expect(add(100, 200)).toStrictEqual(300)
  })

  test('Subtracting two numbers', async () => {
    expect(subtract(10, 10)).toStrictEqual(0)
    expect(subtract(200, 100)).toStrictEqual(100)
  })

  test('Multiplying two numbers', async () => {
    expect(multiply(10, 10)).toStrictEqual(100)
    expect(multiply(200, 100)).toStrictEqual(20000)
  })
})

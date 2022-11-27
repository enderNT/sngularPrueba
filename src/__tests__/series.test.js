import { expect, test } from 'vitest'
import Series from '../components/class/Series'

// Edit an assertion and save to see HMR in action

test('Series 1', () => {
  const serie = new Series(1)
  expect(serie.fibonnacci(1)).toBe(1)
  expect(serie.triangular(1)).toBe(1)
  expect(serie.primo(1)).toBe(1)

  expect(serie.calcular()).toBe(-5.142857142857143)
  // console.log(serie.calcular())
})

test('Series 2', () => {
  const serie = new Series(2)
  expect(serie.fibonnacci(2)).toBe(1)
  expect(serie.triangular(2)).toBe(3)
  expect(serie.primo(2)).toBe(2)

  expect(serie.calcular()).toBe(0)
})

test('Series 3', () => {
  const serie = new Series(3)
  expect(serie.fibonnacci(3)).toBe(2)
  expect(serie.triangular(3)).toBe(6)
  expect(serie.primo(3)).toBe(6)

  expect(serie.calcular()).toBe(25.71428571)
})

test('Series 4', () => {
  const serie = new Series(4)
  expect(serie.fibonnacci(4)).toBe(3)
  expect(serie.triangular(4)).toBe(10)
  expect(serie.primo(4)).toBe(24)

  expect(serie.calcular()).toBe(108)
})

test('Series 5', () => {
  const serie = new Series(5)
  expect(serie.fibonnacci(5)).toBe(5)
  expect(serie.triangular(5)).toBe(15)
  expect(serie.primo(5)).toBe(120)
})

test('Series 6', () => {
  const serie = new Series(6)
  expect(serie.fibonnacci(6)).toBe(8)
  expect(serie.triangular(6)).toBe(21)
  expect(serie.primo(6)).toBe(720)
})

test('Series 7', () => {
  const serie = new Series(7)
  expect(serie.fibonnacci(7)).toBe(13)
  expect(serie.triangular(7)).toBe(28)
  expect(serie.primo(7)).toBe(5040)
})

test('Series 8', () => {
  const serie = new Series(8)
  expect(serie.fibonnacci(8)).toBe(21)
  expect(serie.triangular(8)).toBe(36)
  expect(serie.primo(8)).toBe(40320)
})

test('Series 9', () => {
  const serie = new Series(9)
  expect(serie.fibonnacci(9)).toBe(34)
  expect(serie.triangular(9)).toBe(45)
  expect(serie.primo(9)).toBe(362880)
})

test('Series 10', () => {
  const serie = new Series(10)
  expect(serie.fibonnacci(10)).toBe(55)
  expect(serie.triangular(10)).toBe(55)
  expect(serie.primo(10)).toBe(3628800)
})

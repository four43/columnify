var test = require('tape')
var fs = require('fs')

var splitIntoLines =  require('../utils').splitIntoLines

test('lines under max are ok', function(t) {
  t.plan(1)
  t.deepEqual(splitIntoLines('dinosaur cabbages', 32), ['dinosaur cabbages'])
})

test('lines at max are split', function(t) {
  t.plan(1)
  t.deepEqual(splitIntoLines('dinosaur cabbages', 16), ['dinosaur', 'cabbages'])
})

test('lines over max will be split', function(t) {
  t.plan(1)
  t.deepEqual(splitIntoLines('dinosaur cabbages', 10), ['dinosaur', 'cabbages'])
})

test('splits lines under max onto multiple lines', function(t) {
  t.plan(1)
  t.deepEqual(splitIntoLines('dinosaur cabbages', 7), ['dinosaur', 'cabbages'])
})

test('can put multiple words per line', function(t) {
  t.plan(1)
  t.deepEqual(splitIntoLines('dog cat cow bat mat', 7), [
    'dog cat',
    'cow bat',
    'mat'
  ])
})
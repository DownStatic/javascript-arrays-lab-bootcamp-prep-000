const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destruvtivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var cats = [...kittens,name]
  return cats
}

function prependKitten(name){
  var cats = [name,...kittens]
  return cats
}

function removeLastKitten(){
  var cats = kittens.slice(0,kittens.length-1)
  return cats
}

function removeFirstKitten(){
  var cats = kittens.slice(1,kittens.length)
}
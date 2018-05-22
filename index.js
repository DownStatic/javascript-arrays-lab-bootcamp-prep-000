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

function 
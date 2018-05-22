const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.shift(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.length = kittens.length-1
}


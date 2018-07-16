// Write your solution he

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop(name)
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift(name)
}

function appendDriver(name) {
  const newDrivers = [...drivers, name]
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers]
  return newDrivers;
}

function removeLastDriver() {
  const newDrivers = drivers.slice(0, drivers.length - 1)
  return newDrivers
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1)
  return newDrivers;

}

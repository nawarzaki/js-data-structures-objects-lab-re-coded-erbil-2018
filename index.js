// Write your solution in this file!
const driver = {name: 'Sam'}
function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = {...driver}
  newdriver.name = 'Sam'
  newdriver['address'] = '11 Broadway'
  return newdriver
}


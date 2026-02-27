console.log("user file loaded...")
const userName = "raj"
const userAge = 26

// -------wrong way-------
// module.exports = userAge
// module.exports = userName


const userData= (x) => {
  console.log('user data called...')
  return x*2
}

// ------right way to export------
module.exports = {
  userName, userAge, userData
}

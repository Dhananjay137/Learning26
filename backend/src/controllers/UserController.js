const getUser = (req, res) => {
  console.log("Get User is called....")
  res.send("user api is called")
}

const getUserData = (req, res) => {
  //dummy data
  user = {
    id:101,
    name:"vikram",
    age:21
  }
  res.json({
    message:"user fetched sucessfully",
    data: user
  })
}

//dummy data
let users = [
  {id:1001, name:"vasant", age:21},
  {id:1002, name:"chirag", age:25},
  {id:1003, name:"om", age:26}
]
const getUsers = (req, res) => {
  res.json({
    message: "user fetched sucessfully",
    data: users
  })
}
const getUserById = (req, res) => {
  let params = req.params.id
  let found = users.find((user) => user.id == params)

  if(found){
    res.json({
      message: "user found...",
      data: found
    })
  } else {
    res.json({
      message: "user not found!"
    })
  }
}

module.exports = {
  getUser, getUserData, getUsers, getUserById
}
import bcrypt from "bcryptjs"

const users = [
  {
    name: "mohsen",
    email: "mohsen@gmail.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: true
  },
  {
    name: "hosein",
    email: "hosein@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false
  }
]
  
export default users
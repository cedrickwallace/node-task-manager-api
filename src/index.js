const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require("./models/task")
// const User = require('./models/user')
// const main = async () =>{
//     // const task = await Task.findById('5f71d50f7e3c991908f116fb')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f71d3824101c41588c76e3e')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }
// main()

//When the request is returned in an API JSON.stringify is called on the object,
//   so if you modify toJSON function on an object you can manipulate what is returned to the user, (purge data you dont want them to see, reformat etc.)

// const pet = {
//     name: 'macy'
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const jwt = require("jsonwebtoken")

// const myFunction = async () => {
//     const token = jwt.sign({_id : 'abc123'}, "thisismysecret", { expiresIn: '1 days'})
//     console.log(token)

//     const data = jwt.verify(token, "thisismysecret")
//     console.log(data)
// }

// myFunction()

// app.use((req, res, next)=>{
//     if (req.method === "GET") {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//example of maintenance express middleware function..
// app.use((req, res, next) =>{
//     res.status(503).send("Site is down for maintenance please try again soon")
// })
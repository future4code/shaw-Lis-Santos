import { app } from "./app"
import UserController from "./UserController"
import { TaskController } from "./TaskController"

const userController = new UserController()
const taskController = new TaskController()

app.post('/user/signup', userController.signUp)
app.post('/user/login', userController.login)
app.get("/allUser",userController.getUsers)
app.delete("/user/:id", userController.deleteUser)

app.post("/task", taskController.createTask)
app.get('/task/:id', taskController.getTasksById)
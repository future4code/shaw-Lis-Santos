import app from "./app"
import UserController from "./controller/UserController"

const userController = new UserController()

app.get("/user/:id", userController.getUserById)
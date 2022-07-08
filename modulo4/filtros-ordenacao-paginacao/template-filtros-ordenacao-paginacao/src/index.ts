import { app } from "./app"
import getUserByName from "./endpoints/getUserByName"
import getUserByType from "./endpoints/getUserByType"

app.get("/user", getUserByName)
app.get("/user/:type", getUserByType)
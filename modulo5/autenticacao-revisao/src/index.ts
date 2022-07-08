import app from './app'
import { getAllCharacters } from './endpoints/getAllCharacters'
import { login } from './endpoints/login'
import { singup } from './endpoints/signup'

app.get("/users", getAllCharacters)
app.post("/user", singup)
app.post("/user/login", login)
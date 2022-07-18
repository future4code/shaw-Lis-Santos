import app from './app'
import createRecipe from './endpoints/createRecipe'
import { getRecipeById } from './endpoints/getRecipeById'
import { getUserById } from './endpoints/getUserById'
import { getUsersByToken } from './endpoints/getUsersByToken'
 import { login } from './endpoints/login'
 import { singup } from './endpoints/singup'

 app.get("/user/profile", getUsersByToken)
 app.get("/user/:id", getUserById)
 app.get("/recipe/:id", getRecipeById)
 app.post("/user", singup)
 app.post("/login", login) 
 app.post("/recipe", createRecipe)
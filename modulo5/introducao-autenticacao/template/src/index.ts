import app from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import { HashManager } from "./services/HashManager"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getProfile)

// const hashMenage = new HashMenage()
// const teste = async (): Promise<void> => {
//     const senha = "123456"
//     const senhaTentativa = "123456"

//     const hash = await hashMenage.hash(senha)
//     console.log(hash)
//     const senhaCorreta = await hashMenage.compare(senhaTentativa, hash)
//     console.log("senhaCorreta", senhaCorreta)
// }

// teste()
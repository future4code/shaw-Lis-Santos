import { connection } from "../connection"
import { user } from "../types/user"

class UserData {

   public async insertUser(user: user) {
      await connection.insert({
         id: user.id,
         name: user.name,
         email: user.email,
         password: user.password,
         role: user.role
      }).into('User_Arq')
   }

   public async findUserByEmail(email: string): Promise<user> {
      const [result] = await connection('User_Arq').select("*").where({ email })
      console.log(result)
      if (!result) {
         throw new Error("Usuário não encontrado")
      }
      return result
   }

   public async getAllUsers() {
      const users = await connection('User_Arq').select("*")
      return users.map((user) => user
      )
   }
   public async deleteUser(id: string) {
      await connection('User_Arq')
         .delete("*")
         .where({ id })
   }
}

export default UserData
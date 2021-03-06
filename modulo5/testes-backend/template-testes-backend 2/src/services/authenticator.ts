import * as jwt from "jsonwebtoken"

enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type AuthenticationData = {
   id: string,
   role: USER_ROLES
}

export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export function getTokenData(
   token: string
): AuthenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as AuthenticationData
}
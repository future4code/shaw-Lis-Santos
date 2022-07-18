export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export class AuthenticatorMocks {

   public generateToken = (
   ): string => {
      return "token_qualquer"
   }

   public getTokenData = (
      token: string
   ) => {
      const objeto = { id: "id_mock", role: USER_ROLES.ADMIN }
      return objeto
   }
}
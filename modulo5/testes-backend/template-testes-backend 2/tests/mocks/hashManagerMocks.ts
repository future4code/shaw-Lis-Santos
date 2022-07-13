export class HashManagerMocks {

  public hash = (s: string) => {
    return "senha_hasheada"
  }

  public compare = (s: string, hash: string) => {
    return s === hash
  }
}
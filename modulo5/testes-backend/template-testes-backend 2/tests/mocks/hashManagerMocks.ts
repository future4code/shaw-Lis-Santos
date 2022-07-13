export class HashManagerMocks {

  public hash = (s: string) => {
    return "senha_haseada"
  }

  public compare = (s: string, hash: string) => {
    return s === hash
  }
}
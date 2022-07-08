//1 

function personalInformation(name:string, birthDate:string): string {
   const divideVariable: string[] = birthDate.split("/")
    return (
        `Olá, eu me chamo ${name}, nasci no dia ${divideVariable[0]} do mês ${divideVariable[1]} do ano de ${divideVariable[2]}.`
    )
}

console.log(personalInformation("Lis", "11/11/1997"))
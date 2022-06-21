import { User } from "./User"
import { Customer } from "./Customer"
import { Client } from "./Client"
import { Place } from "./Place"
import { Residence } from "./Residence"
import { Commerce } from "./Commerce"
import { Industry } from "./Industry"
import { ResidentialClient } from "./ResidentialClient"
import { CommercialClient } from "./CommercialClient"
import { IndustrialClient } from "./IndustrialClient"

// HERANÇA

// // Exercício 1

const user1 = new User("1", "user1@gmail.com", "Lila", "123456")
console.log(user1.getId())
console.log(user1.getEmail())
console.log(user1.getName())


// /* a. Seria possível somente criando um método getPassword de forma pública, tendo em vista que na classe a senha é privada, desta forma:

//  public getPassword(): string {
//           return this.password
//       }
//       */
     console.log(user1.getPassword())

// b. Uma vez.

// Exercício 2

const customer1 = new Customer("1", "customer1@gmail.com", "Lola", "654321", "7070707070707070")

// a. Duas vezes.

// b. Duas vezes. Porque a classe Custumer é uma classe filha, herdando as propriedades e métodos da classe pai, no caso, a classe User.

// Exercício 3
console.log(customer1.getId())
console.log(customer1.getEmail())
console.log(customer1.getName())
console.log(customer1.getPassword())
console.log(customer1.getCreditCard())
console.log(customer1.purchaseTotal)

// a. Sim, pois a classe filha (Custumer) herda o método getPassword da classe pai (User), sendo assim, mesmo a senha sendo uma propriedade privada da classe Customer, ela pode ser impressa.

// Exercício 4 e 5
console.log(customer1.introduceYourself())

// PORMORFISMO

// Exercício 1
const client: Client = {
    name: "Lica",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}
console.log(client)

// a. name, registrationNumber, consumedEnergy. Sim, na função calculateBill não apareceu o valor 2 que foi setado no return.

// Exercício 2

// a. const place1 = new Place("28640000"). "Não é possível criar uma instância de uma classe abstrata"

// b. Criar uma classe filha da classe Place e uma instância da classe filha criada.

// Exercício 3

// a. Precisamos declarar uma classe filha e criar uma instância dela.

// b. Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos (CEP), o que é impossível de se fazer em interfaces.

// c. Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

const residence = new Residence(2, "28640000")
console.log(residence.getCep())
console.log(residence.getResidentsQuantity())

const commerce = new Commerce(10, "36033310")
console.log(commerce.getCep())
console.log(commerce.getFloorsQuantity())

const industry = new Industry(100, "25961070")
console.log(industry.getCep())
console.log(industry.getMachinesQuantity())

// Exercício 4
/* a. 
Propriedades: name, registrationNumber, consumedEnergy, cpf, cep
Métodos: getCpf, tendo em vista que o cpf está como privado na classe; e calculateBill, para poder realizar a conta do consumo de energia gasta.
name, registrationNumber, consumedEnergy e calculateBill vem com a implementação da classe Client, já residentsQuantity e cep herda da classe Residence.
*/

const residentialClient = new ResidentialClient("Lua", 333, 100, "04106876543", 2, "143567890")
console.log(residentialClient.calculateBill())

// Exercício 5
// a. A implementação da interface Client é a mesma para as duas, por conta disso, elas tem algumas propriedades em comum, como, por exemplo: name, registrationNumber, consumedEnergy. E também possuem em comum o método calculateBill.

// b. São filhas de classes diferentes, enquanto a ResidentialClient é filha da Residence, a CommercialClient é filha da classe Commerce, sendo assim, herdam diferentes propriedades. Enquanto a classe ResidentialClient herdou da classe Residence a propriedade residentsQuantity, a classe CommercialClient herdou da Commerce a propriedade floorsQuantity. Ambas herdaram também o cep, tendo em vista que as classes pai Residence e Commerce são filhas de uma classe em comum, a Place.
const commercialClient = new CommercialClient("Lica", 121, 450, "12345678910111", 11, "40406532")
console.log(commercialClient.calculateBill())


// Exercício 6
// a. Industry. Pois para calcular a conta de energia leva em conta a quantidade de máquinas que a indústria possui, sendo assim, essa é uma propriedade presente na classe Indutry.

// b. Client. Pois o método calculateBill está presente na classe Client.

// c. Pois o intuito foi apenas mostrar/pegar algumas propriedades e métodos.
const industrialClient = new IndustrialClient("Lolo", 930, 1200, 33301667981, 21, "70965432")
console.log(industrialClient.calculateBill())
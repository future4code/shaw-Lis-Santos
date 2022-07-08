"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./connection"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// 1.a) Retorna exatamente o que o mySQL retornou, tendo que especificar qual a posição do vetor para que não venha informações desnecessárias.
// 1.b) 
const searchActorName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `);
    return result[0];
});
app.get("/actor/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        res.send(yield searchActorName(name));
    }
    catch (error) {
        res.status(500).send(error.slqMessage || error.message);
    }
}));
// 1.c) 
const countActors = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
});
// 1.c)
// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.body.id
//         const resultado = await connection("Actor")
//         res.status(200).send({ message: resultado  })
//     } catch (error: any) {
//         res.status(500).send(error.slqMessage || error.message)
//     }
// })
// app.post("/actor", async (req: Request, res: Response): Promise<void> => {
//     try {
//         await connection.raw(`
//      INSERT INTO Actor 
//         (id, name, salary, birth_date, gender)
//      VALUES(
//        ${Date.now().toString()},
//        "${req.body.name}",
//         ${req.body.salary},
//         "${req.body.birthDate}",
//         "${req.body.gender}"
//         );
//    `)
//         res.status(201).send("Ator criado com sucesso!")
//     } catch (error: any) {
//         res.status(500).send(error.slqMessage || error.message)
//     }
// })
// app.put("/actor/:id", async (req: Request, res: Response) => {
//     try {
//         await connection("Actor")
//             .update({
//                 name: req.body.name,
//                 salary: req.body.salary,
//                 birth_date: req.body.birthDate,
//                 gender: req.body.gender
//             }).where({ id: req.params.id })
//         res.status(200).send({ id: req.params.id })
//     } catch (error: any) {
//         res.status(500).send(error.slqMessage || error.message)
//     }
// })
// app.delete("/actor/:id", async (req: Request, res: Response) => {
//     try {
//         await connection("Actor").where({ id: req.params.id }).delete()
//         res.status(200).send("Ator deletado!")
//     } catch (error: any) {
//         res.status(500).send(error.slqMessage || error.message)
//     }
// })
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});

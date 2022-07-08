import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// 1.a) Retorna exatamente o que o mySQL retornou, tendo que especificar qual a posição do vetor para que não venha informações desnecessárias.

// 1.b) 

const searchActorName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}

app.get("/actor/:name", async (req: Request, res: Response) => {
    try {
        const { name } = req.params
        res.send(await searchActorName(name))
    } catch (error: any) {
        res.status(500).send(error.slqMessage || error.message)
    }
})

// 1.c) 

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
}


// 2.a)
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

// 2.b) 
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

// 2.c)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
};

// 3.a) 
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const resultado = await connection("Actor")
        res.status(200).send({ message: resultado })
    } catch (error: any) {
        res.status(500).send(error.slqMessage || error.message)
    }
})

// 3.b e 3.c)
app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (error: any) {
        res.status(500).send(error.slqMessage || error.message)
    }
  });

  // 4.

  app.post("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
     INSERT INTO Actor 
        (id, name, salary, birth_date, gender)
     VALUES(
       ${Date.now().toString()},
       "${req.body.name}",
        ${req.body.salary},
        "${req.body.birthDate}",
        "${req.body.gender}"
        );
   `)
        res.status(201).send("Ator criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.slqMessage || error.message)
    }
})

// 4.a)
app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateActor(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

  // 4.b)
  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });



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
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
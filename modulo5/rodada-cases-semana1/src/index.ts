import { BuyerController } from "./controller/BuyerController";
import app from "./app"
import { ClientController } from "./controller/ClientController";

const buyerController = new BuyerController()
const clientController = new ClientController()

app.post("/buyer", buyerController.insertBuyer)
app.post("/client", clientController.insertClient)
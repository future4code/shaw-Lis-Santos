import { BuyerController } from "./controller/BuyerController";
import app from "./app"

const buyerController = new BuyerController()

app.post("/buyer", buyerController.insertBuyer)
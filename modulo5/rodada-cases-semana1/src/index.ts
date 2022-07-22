import { BuyerController } from "./controller/BuyerController";
import app from "./app"
import { ClientController } from "./controller/ClientController";
import { PaymentController } from "./controller/PaymentController";

const buyerController = new BuyerController()
const clientController = new ClientController()
const paymentController = new PaymentController()

app.get("/buyer/:id", buyerController.getBuyerById)
app.get("/payment/:id", paymentController.getPayment)
app.post("/buyer", buyerController.insertBuyer)
app.post("/client", clientController.insertClient)
app.post("/payment", paymentController.createPayment)
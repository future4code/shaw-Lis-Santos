import app from "./app"
import { ProductBusiness } from "./business/ProductBusiness"
import { UserBusiness } from "./business/UserBusiness"
import { ProductController } from "./controller/ProductController"
import { UserController } from "./controller/UserController"
import { ProductDatabase } from "./data/ProductDatabase"
import { TagDatabase } from "./data/TagDatabase"
import { IdGenerator } from "./services/IdGenerator"

const userController = new UserController(
    new UserBusiness()
)

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new TagDatabase(),
        new IdGenerator()

    )
)

app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.post("/product", productController.insertProduct)
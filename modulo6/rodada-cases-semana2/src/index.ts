import app from "./app"
import { ProductBusiness } from "./business/ProductBusiness"
import { TagBusiness } from "./business/TagBusiness"
import { UserBusiness } from "./business/UserBusiness"
import { ProductController } from "./controller/ProductController"
import { TagController } from "./controller/TagController"
import { UserController } from "./controller/UserController"
import { ProductDatabase } from "./data/ProductDatabase"
import { TagDatabase } from "./data/TagDatabase"
import { IdGenerator } from "./services/IdGenerator"

const userController = new UserController(
    new UserBusiness
)

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase,
        new TagDatabase,
        new IdGenerator

    )
)

const tagController = new TagController(
    new TagBusiness(
        new TagDatabase
    )
)

app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.post("/product", productController.insertProduct)
app.get("/product", productController.getProductByName)
app.get("/product/:id", productController.getProductById)
app.get("/:tag", tagController.getProductByTag)
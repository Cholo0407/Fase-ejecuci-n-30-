import express from "express";
import cookieParser from 'cookie-parser';
//
import moviesRoutes from "./src/routes/movies.js"
import employeesRoutes from "./src/routes/employees.js";
import customersRoutes from "./src/routes/customers.js";
import registerCustomersRoutes from "./src/routes/registerCustomers.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());
//Que postman acepte guardar cookies
app.use(cookieParser());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/movies", moviesRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/register-customer", registerCustomersRoutes)
app.use("/api/register-employee", registerEmployeesRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)
app.use("/api/recoveryPassword", recoveryPasswordRoutes);


// Exporto la constante para poder usar express en otros archivos
export default app;

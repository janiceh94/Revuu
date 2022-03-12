const path = require("path")
require("dotenv").config({path: "../.env"})
/* ==== External Modules ==== */
const express = require("express");
/* ==== Internal Modules ==== */

/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes");
/* ==== Configuration ==== */
const config = require("@revuu/config");

/* ==== Middleware ==== */
app.use(express.static(path.join("build")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* ====  Routes & Controllers  ==== */
app.use("/api", routes);

app.all("/api/*", (req, res, next) => {
	res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})
//SUPER AMAZING MAGICAL MONOREPO FULL STACK MIDDLEWARE
//This targets all routes that aren't specified by our specific server routes that are not "/api"
//ANY REQUESTS not covered by our routes will get piped into this middleware! This literally hands over control to React
// app.use((req, res, next) => {
// 	res.sendFile(path.join(__dirname, "build", "index.html"))
// })

/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(
		`Revuu is live at http://localhost:${config.PORT}. how delightful!`
	);
});
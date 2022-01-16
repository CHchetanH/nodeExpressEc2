import express from "express";

const app = express();
app.use(express.json());

app.listen(3000, () => {
	console.log("listening on Port 3000");
});

app.get("/", (req, res) => {
	res.json({name: "Chetan", message: "Hello from Node"});
});

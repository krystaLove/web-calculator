import express from "express"

const app = express();
const port = 4000;

app.use(express.static('build/public'));

app.listen(port, () => {
    console.log("Server is running on 4000 port!")
})
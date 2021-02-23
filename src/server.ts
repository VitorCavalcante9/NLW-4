import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Hello Za Warudo"});
})

app.post("/", (request, response) => {
    return response.json({message: "Tudo salvo"})
})

app.listen(3333, () => console.log("Server is running!"));
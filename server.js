const express = require('express')
const agentesRouter = require("./routes/agentesRouter");
const casosRouter = require("./routes/casosRouter");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(casosRouter);
app.use(agentesRouter);



app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});
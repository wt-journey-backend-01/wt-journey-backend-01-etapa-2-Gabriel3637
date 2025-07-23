const express = require('express')
const agentesRouter = require("./routes/agentesRoutes.js");
const casosRouter = require("./routes/casosRoutes.js");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/casos", casosRouter);
app.use("/agentes", agentesRouter);



app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});
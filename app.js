var ambiente_processo = "desenvolvimento";

var caminho_env = ambiente_processo === "producao" ? ".env" : ".env.dev";

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var academiaRouter = require("./src/routes/academia");
var rotinaRouter = require("./src/routes/rotina");

/* var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");  */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/academia", academiaRouter); 
app.use("/rotina", rotinaRouter);

/* app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);  */

app.listen(PORTA_APP, function () {
  console.log(`
       ###     ######     ###    ########  ######## ##     ## ####    ###    
      ## ##   ##    ##   ## ##   ##     ## ##       ###   ###  ##    ## ##   
     ##   ##  ##        ##   ##  ##     ## ##       #### ####  ##   ##   ##  
    ##     ## ##       ##     ## ##     ## ######   ## ### ##  ##  ##     ## 
    ######### ##       ######### ##     ## ##       ##     ##  ##  ######### 
    ##     ## ##    ## ##     ## ##     ## ##       ##     ##  ##  ##     ## 
    ##     ##  ######  ##     ## ########  ######## ##     ## #### ##     ## 
    \n                                                                                                 
    Servidor já está rodando! Acesse o caminho a seguir para visualizar: http://${HOST_APP}:${PORTA_APP} : \n\n
    Aplicação rodando em ambiente de .:${process.env.AMBIENTE_PROCESSO}: \n\n
    `)
});

import express from 'express';
import path from 'path';
import {appendDataToSheet} from './gsheet.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/'));

console.log("dir",__dirname);

app.listen(8077,function(){console.log('Servidor iniciado');});

app.post("/send-gsheet/", function(req,res){
    console.log(req.body.id)
    res.send(req.body)
    appendDataToSheet(req.body.id);
});
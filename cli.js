import pegaArquivo from './index.js';
import chalk from "chalk";
import validaURL from './http-validação.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);

    if(caminho[3] === "validar"){
        console.log(chalk.bgYellow('links validados'),await validaURL(resultado));
    }else{
    console.log(chalk.bgYellow('Lista de links:'), resultado)
    };
}

//console.log(pegaArquivo(caminho[2]));

processaTexto(caminho);
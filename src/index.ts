import fastify from "fastify"



const app = fastify();


type Parameter = {
    Params : {
        x: string
        y: string
    }
    Querystring : {
        method: string
    }
}

app.get<Parameter>("/calculate/:x/:y", (request,response) => {

    let xValue = parseFloat(request.params["x"]); // Valeur x 
    let yValue = parseFloat(request.params["y"]); // Valeur y
    let method = request.query["method"]; // Methode de calcul


    switch (method){    
        case "add": return `${xValue} + ${yValue} = ${xValue + yValue}`;
        case "sub": return `${xValue} - ${yValue} = ${xValue - yValue}`;
        case "mul": return `${xValue} * ${yValue} = ${xValue * yValue}`;
        case "div": 
            if(yValue == 0)  {
                response.status(400)
                return "can't divide by 0";
            }
            return `${xValue} / ${yValue} = ${xValue / yValue}`;
        default: 
            response.status(400)
            return "default error";
    }
})


app.listen({port: parseInt(process.env.PORT || ""), host: process.env.HOSTNAME}, () => { 
    console.log("Hebergé")
});













/*
clear
const my_string = 'Hello World!' // Valide en JS et TS
const my_typed_string: string = 'Hello World!' // Valide en TS

type personne = {
    lastname: any
    firstname: any
}


const user:personne =  {
    lastname : process.env.LASTNAME,
    firstname: process.env.FIRSTNAME
}


const {lastname, firstname} = user;
console.log(`Bonjour ${firstname} ${lastname}, comment allez-vous ?`);

console.log(process.env); // Print l'ensemble des %VAR%

*/
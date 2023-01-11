import fastify from "fastify"
import { getItemFromTodoListById, addItemToTodoList, getAllItemsInTodoList, deleteItemFromTodoList } from "./models/TodoListBDD"; 
import { TodoItem } from "./type/TodoType";




const app = fastify();


app.get("/todos", getAllItemsInTodoList);


app.post<{Body:TodoItem}>("/todos", request => {
    addItemToTodoList(request.body);
    return getAllItemsInTodoList();
})

app.get<{Params : {id: number|string}}>("/todos/:id", (request) => {
    return getItemFromTodoListById(request.params.id);
})

app.delete<{Params : {id: number|string}}>("/todos/:id", (request) => {
    console.log("sup");
    deleteItemFromTodoList(request.params.id);
});

app.listen({port: parseInt(process.env.PORT || ""), host: process.env.HOSTNAME}, () => { 
    console.log("Hebergé")
});

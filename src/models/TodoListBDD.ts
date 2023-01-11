/**
 * @module Contient la base de données
 */

import { it } from "node:test";
import { TodoItem, TodoList } from "../type/TodoType"

const todoList: TodoList = [
    {
      id: 1,
      title: 'Acheter du chocolat',
      done: false,
    },
  ]

  /**
   * Ajoute un item dans todoList
   * @param item type : TodoItem
   */
export function addItemToTodoList(item: TodoItem) : void{
  todoList.push(item);
}

/**
 * Fonction permettant de récupérer tous les élements de Todolist
 * @returns type : todolist
 */

export function getAllItemsInTodoList() : TodoList{
  return todoList;
}

/**
 * Fonction permettant de récupérer tous les élements de TodoList partagant le même ID
 * @param id type : string ou number
 * @returns type: todolist
 */
export function getItemFromTodoListById(id : number|string) : TodoList{
  return todoList.filter(item => item.id == id)
};


/**
 * Fonction permettant de suprimer un élement de Todolist en fonction d'un id
 * @param id type : string ou number
 */
export function deleteItemFromTodoList(id : number|string) : void {
  todoList.map((item, idx) => {
    if(item.id == id) todoList.splice(idx, 1);
  });
  console.log(todoList);
}


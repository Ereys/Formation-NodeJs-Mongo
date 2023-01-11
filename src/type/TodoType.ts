/**
 * @module Contient les types d'un todo
 */

/**
 * Représente une chose de à faire
 */
export type TodoItem = {
    id: string | number
    title: string
    done: boolean
  }
  

  /**
   * Réprésente une list de chose à faire
   */
export type TodoList = TodoItem[]
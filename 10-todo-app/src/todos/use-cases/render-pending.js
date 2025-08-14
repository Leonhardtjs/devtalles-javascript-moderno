import todoStore, { Filters } from "../../store/todo.store";

let element;

/**
 * Renderiza los todos pendientes
 * @param {String} elementId 
 */
export const renderPending = (elementId) => {
    if(!element) 
        element = document.querySelector(elementId);
    
    if(!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = 0;

    console.log(element)

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}
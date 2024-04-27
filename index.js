#!/usr/bin/env node
import inquirer from "inquirer";
let todoArray = [];
async function makeTodo(todoArray) {
    do {
        const outputList = await inquirer.prompt({
            type: "list",
            name: "choose",
            message: "Select an Option.",
            choices: ["Add Task", "Update Task", "View List", "Delete Task", "Exit"]
        });
        switch (outputList.choose) {
            case "Add Task":
                const addTodo = await inquirer.prompt({
                    type: "input",
                    name: "addtodo",
                    message: "Add Task in the List."
                });
                todoArray.push(addTodo.addtodo);
                console.log("Task Added Successfully!");
                break;
            case "Update Task":
                const updateTodo = await inquirer.prompt({
                    name: "updatetodo",
                    type: "list",
                    message: "Select Task to Update.",
                    choices: todoArray
                });
                const updatedIndex = todoArray.indexOf(updateTodo.updatetodo);
                const newTodo = await inquirer.prompt({
                    type: "input",
                    name: "newtodo",
                    message: "Enter Updated Task."
                });
                todoArray[updatedIndex] = newTodo.newtodo;
                console.log("Task Updated Successfully!");
                break;
            case "View List":
                console.log("\nYOUR TODO LIST");
                todoArray.forEach(todo => console.log(todo));
                break;
            case "Delete Task":
                const deleteTodo = await inquirer.prompt({
                    name: "deletetodo",
                    type: "list",
                    message: "Select Task to Delete.",
                    choices: todoArray
                });
                todoArray = todoArray.filter(val => val !== deleteTodo.deletetodo);
                console.log(`"${deleteTodo.deletetodo}" is Successfully Deleted`);
                break;
            case "Exit":
                console.log("Todo List Exited Successfully!");
                return;
            default:
                break;
        }
    } while (true);
}
makeTodo(todoArray);

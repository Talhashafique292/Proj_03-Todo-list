#!/usr/bin/env node
import inquirer from "inquirer";
let todo = ["Talha", "Faisal"];
async function createTodo(todo) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items",
                name: "todo"
            });
            todo.push(addTodo.todo);
            console.log(todo);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todo.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items",
                name: "todo"
            });
            let newTodo = todo.filter(val => val !== updateTodo.todo);
            todo = [...newTodo, addTodo.todo];
            console.log(todo);
        }
        if (ans.select == "view") {
            console.log(todo);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todo.map(item => item)
            });
            let newTodo = todo.filter(val => val !== deleteTodo.todo);
            todo = [...newTodo];
            console.log(todo);
        }
    } while (true);
}
createTodo(todo);

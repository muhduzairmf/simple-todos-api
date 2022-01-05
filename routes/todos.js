// The API's routes for todos

const router = require('express').Router();
// import router from Express Router

let todos = require('../data/todos.json');
// import example data from todos.json

router.get('/todos', (req, res) => {
    res.json(todos);
    // response the todos array in JSON format
});

router.post('/todos', (req, res) => {
    let { title } = req.body;
    // get title value from request body
    let todo = {
        id: `${Math.floor(Date.now() * Math.random())}`,
        title,
        completed: false
    };
    // make the new todo
    todos.push(todo);
    // push new todo to todos array
    res.json(todo);
    // response the updated todos array in JSON format
});

router.get('/todos/:id', (req, res) => {
    let { id } = req.params;
    // get id value from url parameter
    let todo = todos.find(todo => todo.id === id);
    // todo value is the one of the todos's element with same id
    if (todo === undefined) {
        res.status(404).json({ message: "Not Found" });
        // if todo value is undefined (no element with same id), will response Not Found
    } else {
        res.json(todo);
        // otherwise, will response the todo array in JSON format
    }
});

router.put('/todos/:id', (req, res) => {
    let { id } = req.params;
    // get id value from url parameter
    let index = todos.findIndex(todo => todo.id === id);
    // get index value of the element with same id
    if (index === -1) {
        res.status(404).json({ message: "Not Found" });
        // if the index value is -1 (no element with same id), will response Not Found
    } else {
        todos[index].completed = ! todos[index].completed;
        // otherwise, the status of completed will change (boolean value)
        res.json(todos[index]);
        // response the element of todos array with the index value in JSON format
    }
});

router.delete('/todos/:id', (req, res) => {
    let { id } = req.params;
    // get id value from url parameter
    let todo = todos.find(todo => todo.id === id);
    // todo value is the one of the todos's element with same id
    if (todo === undefined) {
        res.status(404).json({ message: "Not Found" });
        // if todo value is undefined (no element with same id), will response Not Found
    } else {
        todos = todos.filter(todo => {
            return todo.id !== id;
        });
        // otherwise, the todos array will update then the same id element will not included
        res.json(todos);   
        // response the updated todos array in JSON format
    }
});

module.exports = router;
// all routers that was created will be imported
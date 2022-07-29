const process = require('process');
const save = require('./save');   
const read = require('./read');   

// checking input parameters
if ((process.argv[2] == 'add' && process.argv[3] && !process.argv[4]) ||
    (process.argv[2] == 'list' && !process.argv[3])) { } else {
        console.log('No command / unknown command / no task added');
        console.log('To list your tasks run with: node app.js list');
        console.log("To create new task run with: node app.js add 'Task description' ");
        // canceling the rest of code because of wrong parameters
        return;
    };

let cmd = process.argv[2];

// checking list cmd
if (cmd === 'list'){readForDisplay(displayList)};
// main function list, reading TODO list
function readForDisplay(displayList) { 
    let tasks = read.readTasks();
    if(tasks){console.log('Tasks list loading succesfull.')};
    displayList(tasks);};
// callback function for display TODO list
function displayList(tasks) {
    tasks.forEach((element,i) => {
        console.log(i+1,": ",element)});
    };

// checking add cmd
if (cmd === 'add') {readForAdd(saveList)}
// main function for add to list, reading TODO list
function readForAdd(saveList) { 
    let tasks = read.readTasks();
    if(tasks){console.log('Tasks list loading succesfull.')};
    let item = process.argv[3];
    saveList(tasks, item);};
// callback function for add and save tasks list
function saveList (tasks, item) { 
    tasks.push(item); 
    save.saveTasks(tasks);
    };

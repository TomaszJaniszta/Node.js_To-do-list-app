const fs = require('fs');

function readTasks () {
  try {
    let tasks = fs.readFileSync('tasks.json', 'utf-8');
    return JSON.parse(tasks);
  } catch (error) {
   console.log('Problem with reading file tasks.json ', error.message); 
return;
};
};

// function export
module.exports = {
readTasks: readTasks,
};

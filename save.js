const fs = require('fs');

function saveTasks (tasks) {
  try {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
  console.log('New task added to list TODO');
  } catch (error) {
   console.log('Problem with saving file tasks.json ', error.message); 
return;
};
};

// function export
module.exports = {
saveTasks: saveTasks,
};

module.exports = parallel;

function parallel (tasks, callback) {
  var n = tasks.length;
  var completed = 0;
  var i;

  var complete = function () {
    completed += 1;
    if (completed === n) {
      callback();
    }
  }

  for (i = 0; i < n; i += 1) {
    tasks[i](complete);
  }
}

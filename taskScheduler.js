/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */


const leastInterval = (tasks, n) => {
    const tasksMap = Array(26).fill(0);
    for (const task of tasks) {
        tasksMap[task.charCodeAt(0) - 65] += 1;
    }
    
    // sort in reverse order
    tasksMap.sort((a, b) => b - a);
    
    const maxVal = tasksMap[0] - 1;
    let idleSlots = maxVal * n;
    
    for (let i = 1; i < 26; i++) {
        if (tasksMap[i] === 0) {
            break;
        }
        
        idleSlots -= Math.min(tasksMap[i], maxVal);
    }
    
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};


var furthestBuilding = function(heights, bricks, ladders) {
    let heightDiff = []
    for(let i=0; i < heights.length-1; i++) {
        let h = heights[i] - heights[i+1]
        if(h < 0) {
          push(heightDiff, Math.abs(h));
          if(heightDiff.length > ladders) {
              bricks -= heightDiff.shift();
          }
          if(bricks < 0)
              return i
          }
      }
    return heights.length-1
};


function push(queue, num) {
  for(let i = 0; i < queue.length; i++) {
    if(queue[i] > num) {
      queue.splice(i, 0, num);
      return;
    }
  }
  queue.push(num);
}

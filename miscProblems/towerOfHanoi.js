/**
 * Solution
 * Rods A B C
 *     shift 'n-1' from A to B using C
 *     shift last disk from A to C
 *     shift 'n-1' disk from B to C using A
 */

function towerOfHanoi(n, fromTower, toTower, usingTower){
  if(n===1){
    console.log(`Move disk 1 from ${fromTower} to ${toTower}`);
    return
  }
  towerOfHanoi(n-1, fromTower, usingTower, toTower);
  console.log(`Move disk ${n} from ${fromTower} to ${toTower}`)
  towerOfHanoi(n-1,usingTower, toTower, fromTower );

}

console.log(towerOfHanoi(3, 'A', 'B', 'C'));
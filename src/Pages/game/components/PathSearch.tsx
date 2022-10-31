class Node {
  isCollider: boolean;
  constructor(cellData: number) {
    this.isCollider = cellData === 1 ? true : false;
  }
}

class Graph {
  rows: number;
  columns: number;
  matrix: { [key: string]: Node };
  enemies: number[][];
  start: string;
  end: string;
  
  constructor(cellArr: number[][], start = "", end = "", enemies = []) {
    this.rows = cellArr.length;
    this.columns = cellArr[0].length;
    this.matrix = {};
    this.start = start;
    this.end = end;
    this.enemies = enemies;
    
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        const key = `${i}_${j}`;
        this.matrix[key] = new Node(cellArr[i][j]);
      }
    }
  }
  
  setEnd(end: string) {
    this.end = end;
  }
  
  setStart(start: string) {
    this.start = start;
  }
  
  setEnemies(enemies: number[][]) {
    this.enemies = enemies;
  }
  
  getChildren(node: string) {
    
    let [rowStr, colStr] = node.split("_");
    let currentY = parseInt(rowStr);
    let currentX = parseInt(colStr);

    
    let children: string[] = [];

    
    let movesArr = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    
    const enemiesDirections = this.enemies.map((enemy, index) => {
      return [
        { x: enemy[1] + 1, y: enemy[0] },
        { x: enemy[1] - 1, y: enemy[0] },
        { x: enemy[1], y: enemy[0] + 1 },
        { x: enemy[1], y: enemy[0] - 1 },
      ];
    });

    
    movesArr.forEach(([nextY, nextX]) => {
      
      if (
        currentY + nextY >= 0 &&
        currentX + nextX >= 0 && 
        currentY + nextY < this.rows && 
        currentX + nextX < this.columns && //ן
        
        this.validPlayerMove(currentY, currentX, nextY, nextX, enemiesDirections) &&
        
        !this.matrix[`${currentY + nextY}_${currentX + nextX}`].isCollider
      ) {
        
        children.push(`${currentY + nextY}_${currentX + nextX}`);
      }
    });

    return children;
  }
  
  validPlayerMove(
    currentY: number,
    currentX: number,
    nextY: number,
    nextX: number,
    enemiesDirections: { x: number; y: number }[][]
  ) {
    
    
    if (this.enemies.length === 0) {
      return true;
    }
    

    for (let enemy of enemiesDirections) {
      for (let pos of enemy) {
        if (
          (pos.x === currentX + nextX && pos.y === currentY) ||
          (pos.x === currentX && pos.y === currentY + nextY)
        ) {
          return false;
        }
      }
    }
    
    return true;
  }

  
  startAlgorithm() {
    
    let visited: string[] = [];

    
    
    let parents: { [key: string]: string | null } = {};
    
    let found = false;

    
    
    let pendingNodes = [];
    pendingNodes.push(this.start);

    
    parents[this.start] = null;

    
    while (pendingNodes.length) {
      
      let currNode = pendingNodes[0];

      
      
      if (currNode === this.end) {
        visited.push(this.end);
        found = true;
        break;
      }
      
      let children = this.getChildren(currNode);

      
      
      let unvisitedChildren = children.filter((child) => !visited.includes(child));

      
      
      
      
      for (let i = 0; i < unvisitedChildren.length; i++) {
        parents[unvisitedChildren[i]] = currNode;
        if (!pendingNodes.includes(unvisitedChildren[i])) {
          pendingNodes.push(unvisitedChildren[i]);
        }
      }
      
      
      visited.push(currNode);
      
      pendingNodes.shift();
    }
    
    
    
    if (!found) {
      return {
        path: [],
        exploredNodes: visited,
        found,
      };
    }
    
    let path = [this.end.split("_")];
    let parent = parents[this.end];
    
    while (parent) {
      path.push(parent.split("_"));
      parent = parents[parent];
    }
    
    path.reverse();
  
    return {
      path,
      exploredNodes: visited,
      found,
    };
  }
}

export default Graph;

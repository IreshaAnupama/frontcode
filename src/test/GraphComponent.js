import React from "react";

const tsp = (graph) => {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  visited[0] = true;
  let current = 0;
  let path = [0];
  let cost = 0;

  for (let i = 0; i < n - 1; i++) {
    let minDist = Infinity;
    let nextNode = null;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && graph[current][j] < minDist) {
        minDist = graph[current][j];
        nextNode = j;
      }
    }

    visited[nextNode] = true;
    path.push(nextNode);
    cost += minDist;
    current = nextNode;
  }

  cost += graph[current][0];
  path.push(0);

  return { path, cost };
};

const Map = () => {
  const graph = [
    [0, 18397, 21650, 18397],
    [22100, 0, 7455, 0],
    [21650, 7455, 0, 7455],
    [22100, 0, 7455, 0],
  ];
  const { path, cost } = tsp(graph);

  return (
    <div>
      <p>Path: {path.join(" -> ")}</p>
      <p>Cost: {cost}</p>
    </div>
  );
};

export default Map;

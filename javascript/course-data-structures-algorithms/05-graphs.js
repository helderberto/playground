function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(node => node.key === key);
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },

    print() {
      return nodes.map(({ key, neighbors }) => {
        let result = key;

        if (neighbors.length) {
          result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
        }

        return result;
      })
      .join('\n');
    }
  }
}

module.exports = createGraph;

const graph = createGraph(true);

// graph.addNode('Helder');
// graph.addNode('Paula');
// graph.addNode('Panda');
// graph.addNode('Pantufa');

// graph.addEdge('Helder', 'Paula');
// graph.addEdge('Paula', 'Helder');
// graph.addEdge('Helder', 'Panda');
// graph.addEdge('Helder', 'Pantufa');
// graph.addEdge('Paula', 'Panda');
// graph.addEdge('Paula', 'Pantufa');
// graph.addEdge('Panda', 'Paula');
// graph.addEdge('Pantufa', 'Helder');

// console.log(graph.print());

/**
 * Helder => Paula Panda Pantufa
 * Paula => Helder Panda Pantufa
 * Panda => Paula
 * Pantufa => Helder
 */

const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.roots = null;
  }
  root() {
    return this.roots;
  }

  add(data) {
    this.roots = addNode(this.roots, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data === node.data) {
        return data;
      }
      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.roots, data);
    function hasNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.data == value) {
        return true;
      }
      return value < node.data
        ? hasNode(node.left, value)
        : hasNode(node.right, value);
    }
  }

  find(data) {
    return findNode(this.roots, data);
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.roots = removeNode(this.roots, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minData = node.right;
        while (minData.left) {
          minData = minData.left;
        }
        node.data = minData.data;
        node.right = removeNode(node.right, minData.data);
        return node;
      }
    }
  }

  min() {
    let minValue = null;
    return searchMaxValue(this.roots);
    function searchMaxValue(node) {
      while (node) {
        minValue = node.data;
        node = node.left;
      }
      return minValue;
    }
  }

  max() {
    let maxValue = null;
    return searchMaxValue(this.roots);
    function searchMaxValue(node) {
      while (node) {
        maxValue = node.data;
        node = node.right;
      }
      return maxValue;
    }
  }
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let output = [];
  function helper(root) {
    if (!root) return output;
    output.push(root.val);
    root.children?.forEach((el) => helper(el));
    return output;
  }
  return helper(root);
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    //pointers to function
    let fast = head;
    let slow = head;
    
    //directs pointers to precise location in function
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};
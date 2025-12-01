# Problem Description

# Given a singly linked list A, determine if it's a palindrome. Return 1 or 0, denoting if it's a palindrome or not, respectively.



# Problem Constraints

# 1 <= |A| <= 105



# Input Format

# The first and the only argument of input contains a pointer to the head of the given linked list.



# Output Format

# Return 0, if the linked list is not a palindrome.

# Return 1, if the linked list is a palindrome.



# Example Input

# Input 1:

# A = [1, 2, 2, 1]
# Input 2:

# A = [1, 3, 2]


# Example Output

# Output 1:

#  1 
# Output 2:

#  0 


# Example Explanation

# Explanation 1:

#  The first linked list is a palindrome as [1, 2, 2, 1] is equal to its reversed form.
# Explanation 2:

#  The second linked list is not a palindrom as [1, 3, 2] is not equal to [2, 3, 1].
class ListNode:
	def __init__(self, x):
		self.val = x
		self.next = None
          
          
class Solution:
    # @param A : head node of linked list
    # @return an integer
    def lPalin(self, A):
        # find middle using slow+fast
        slow = fast = A
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # reverse 2nd half
        prev = None
        curr = slow
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        # prev is now head of 2nd reversed half
        h1 = A
        h2 = prev
        while h2:
            if h1.val != h2.val:
                return 0

            h1 = h1.next
            h2 = h2.next

        return 1

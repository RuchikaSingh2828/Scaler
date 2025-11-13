# Problem Description

# Given an integer array A of size N.

# If we store the sum of each triplet of the array A in a new list, then find the Bth smallest element among the list.

# NOTE: A triplet consists of three elements from the array. Let's say if A[i], A[j], A[k] are the elements of the triplet then i < j < k.



# Problem Constraints

# 3 <= N <= 500
# 1 <= A[i] <= 108
# 1 <= B <= (N*(N-1)*(N-2))/6



# Input Format

# The first argument is an integer array A.
# The second argument is an integer B.



# Output Format

# Return an integer denoting the Bth element of the list.



# Example Input

# Input 1:

#  A = [2, 4, 3, 2]
#  B = 3
# Input 2:

#  A = [1, 5, 7, 3, 2]
#  B = 9


# Example Output

# Output 1:

#  9 
# Output 2:

#  14


# Example Explanation

# Explanation 1:

#  All the triplets of the array A are:

#  (2, 4, 3) = 9
#  (2, 4, 2) = 8
#  (2, 3, 2) = 7
#  (4, 3, 2) = 9

#  So the 3rd smallest element is 9.
def find_sum_lesser_than_mid(A, mid):
    n = len(A)
    count = 0

    for i in range(n - 2):
        j = i + 1
        k = n - 1

        while j < k:
            curr_sum = A[i] + A[j] + A[k]
            if curr_sum <= mid:
                count += (k - j)
                j += 1
            else:
                k -= 1

    return count


def findsmallest(A, B):
    A.sort()
    n = len(A)
    low = 3 * A[0]
    high = 3 * A[n - 1]
    ans = -1

    while low <= high:
        mid = (low + high) // 2
        count = find_sum_lesser_than_mid(A, mid)
        if count < B:
            low = mid + 1
        else:
            ans = mid
            high = mid - 1

    return ans


print(findsmallest([2, 4, 3, 2], 3))      # Output: 9
print(findsmallest([1, 5, 7, 3, 2], 9))   # Output: 14
print(findsmallest([22,10,5,11,16,2,11,7,16,2,17,6,15,3,9,6], 183))   # Output: 25


# Book Allocation Problem (GFG)
# Aggressive cow (spoj)
# Prata and roti (spoj)
# EKO (spoj)
# Google kickstart A Q-3 2020
# 1482 Minimum Number of Days to Make m Bouquets
# 1283 Find the Smallest Divisor Given a Threshold
# 1231 Divide Chocolate
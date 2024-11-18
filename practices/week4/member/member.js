class Membership {}

// Test cases
// {
//     // Test Case 1: Check initial state
//     const membership = new Membership()
//     console.log(membership.members) // Expected: [] (empty array)

//     // Test Case 2: Subscribe a new member
//     console.log(membership.subscribe('Alison Butler')) // Expected: 1 (new member added)
//     console.log(membership.members) // Expected: [{ memberId: 1, memberName: 'Alison Butler' }]

//     // Test Case 3: Subscribe another member
//     console.log(membership.subscribe('Simon Brown')) // Expected: 2 (new member added)
//     console.log(membership.members) // Expected: [{ memberId: 1, memberName: 'Alison Butler' }, { memberId: 2, memberName: 'Simon Brown' }]

//     // Test Case 4: Attempt to subscribe a duplicate member
//     console.log(membership.subscribe('Alison Butler')) // Expected: -1 (duplicate member)

//     // Test Case 5: Find member by ID
//     console.log(membership.findMemberById(1)) // Expected: 0 (first member found)
//     console.log(membership.findMemberById(2)) // Expected: 1 (second member found)
//     console.log(membership.findMemberById(3)) // Expected: -1 (no member found)

//     // Test Case 6: Find member by name
//     console.log(membership.findMemberName('Alison Butler')) // Expected: 0 (first member found)
//     console.log(membership.findMemberName('Simon Brown')) // Expected: 1 (second member found)
//     console.log(membership.findMemberName('Nonexistent Member')) // Expected: -1 (no member found)

//     // Test Case 7: Unsubscribe a member by ID
//     console.log(membership.unsubscribe(1)) // Expected: 1 (member removed)
//     console.log(membership.members) // Expected: [{ memberId: 2, memberName: 'Simon Brown' }]

//     // Test Case 8: Attempt to unsubscribe a member that does not exist
//     console.log(membership.unsubscribe(3)) // Expected: -1 (no member found)

//     // Test Case 9: Attempt to unsubscribe with undefined ID
//     console.log(membership.unsubscribe(undefined)) // Expected: -1 (undefined ID)
// }

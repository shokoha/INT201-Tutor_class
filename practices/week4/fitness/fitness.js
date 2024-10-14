class FitnessTracker {}

//test cases
// {
// // Test Case 1: Log a workout and check points
// const tracker1 = new FitnessTracker(101)
// console.log(tracker1.logWorkout(60, 'high')) // Expected: 90 points
// console.log(tracker1.points) // Expected: 90

// // Test Case 2: Log a workout with low intensity
// console.log(tracker1.logWorkout(30, 'low')) // Expected: 30 points
// console.log(tracker1.points) // Expected: 120

// // Test Case 3: Redeem points successfully
// console.log(tracker1.redeemPoints(2000)) // Expected: -1 (not enough points)

// // Test Case 4: Log enough workouts to redeem points
// tracker1.logWorkout(60, 'high') // 90 points, total = 210
// tracker1.logWorkout(300, 'high') // 300 points, total = 510
// console.log(tracker1.redeemPoints(2000)) // Expected: -1 (not enough points)

// // Test Case 5: Log enough workouts and redeem points
// tracker1.logWorkout(1000, 'high') // 1500 points, total = 2010
// console.log(tracker1.redeemPoints(1000)) // Expected: { memberId: 101, giftCertificates: 1, redeemedPoints: 1000, remainingPoints: 1010 }

// // Test Case 6: Check membership level after workouts
// console.log(tracker1.calculateMembershipLevel()) // Expected: "BRONZE" (points = 1010)
// tracker1.logWorkout(5000, 'high') // Log more points
// console.log(tracker1.calculateMembershipLevel()) // Expected: "SILVER" (points = 6010)

// // Test Case 7: Redeem invalid amount
// console.log(tracker1.redeemPoints(500)) // Expected: -1 (not a multiple of 1000)
// console.log(tracker1.redeemPoints(1500)) // Expected: -1 (not a multiple of 1000)
// }

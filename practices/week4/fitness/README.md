# FitnessTracker Requirements

## Class: FitnessTracker

### Properties:
- `memberId`: stores a unique member ID.
- `points`: stores the total number of workout points a member has.
- `memberLevel`: stores the member level, which can be "BRONZE", "SILVER", "GOLD", or "PLATINUM".

### Methods:
- **constructor(memberId)**:
  - Initializes a new FitnessTracker object.
  - Sets `memberId` from the parameter.
  - Initializes `points` to zero.
  - Sets `memberLevel` by calling `calculateMembershipLevel()`.

- **logWorkout(minutes, intensity)**:
  - Calculates points based on workout minutes and intensity.
  - Each minute of workout awards 1 point.
  - If intensity is "high", an additional 50% is added to the calculated points.
  - Adds calculated points to the total points and returns the updated points.

- **redeemPoints(redeemAmount)**:
  - A minimum of 1000 points is required to redeem, and only multiples of 1000 points can be redeemed.
  - For every 1000 points redeemed, the member receives a 50 baht gift certificate.
  - If `redeemAmount` is less than 1000, not a multiple of 1000, or exceeds points, return -1.
  - Otherwise, deduct the points and return an object with:
    ```javascript
    { memberId: memberId, giftCertificates: ?, redeemedPoints: ?, remainingPoints: ? }
    ```

- **calculateMembershipLevel()**:
  - Sets `memberLevel` based on the total points as follows:
    - "BRONZE": 0 - 4999
    - "SILVER": 5000 - 9999
    - "GOLD": 10000 - 19999
    - "PLATINUM": 20000+
  - Returns the updated `memberLevel`.

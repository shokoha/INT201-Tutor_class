# Membership Class Requirements

## Class: Membership

### Properties
- `static autoId`: A static property that auto-generates a unique ID, starting from 1.
- `members`: An array of objects, each containing:
  - `memberId`: The ID of the member.
  - `memberName`: The name of the member.

### Methods
- `constructor()`
  - Initializes a new `Membership` object with the `members` property set to an empty array.

- `subscribe(name)`
  - **Parameters:**
    - `name`: The name of the member to subscribe.
  - **Returns:** The new length of the `members` array after adding the member, or -1 if the name already exists.

- `unsubscribe(id)`
  - **Parameters:**
    - `id`: The ID of the member to unsubscribe.
  - **Returns:** The `id` of the removed member or -1 if the `id` is undefined or not found.

- `findMemberById(id)`
  - **Parameters:**
    - `id`: The ID of the member to find.
  - **Returns:** The index of the member with the given `id` or -1 if not found.

- `findMemberName(name)`
  - **Parameters:**
    - `name`: The name of the member to find (case-insensitive).
  - **Returns:** The index of the member with the given `name` or -1 if not found.

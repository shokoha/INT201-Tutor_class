# CourseManagement Requirements

## Class: CourseManagement

### Properties:
- `courses`: an array to store course objects, where each course has:
  - `courseId`: a unique identifier for the course.
  - `courseTitle`: the title of the course (default is 'untitled').
  - `courseTerm`: the term of the course (default is '2-2565').
  - `registeredStudents`: an array to store IDs of registered students.

### Methods:
- **constructor()**:
  - Initializes an empty array `courses` to store course objects.

- **createCourse(courseId, courseTitle = 'untitled', courseTerm = '2-2565')**:
  - Adds a new course object to the `courses` array.

- **registerCourseWithOneStudent(courseId, studentId)**:
  - Registers a single student for a specified course.
  - Returns `-1` if the course does not exist; otherwise, returns the number of registered students.

- **registerCourseWithStudents(courseId, studentIds)**:
  - Registers multiple students for a specified course.
  - Returns `-1` if the course does not exist; otherwise, returns the number of registered students.

- **findCourseIndex(courseId)**:
  - Returns the index of the course with the specified `courseId`, or `-1` if not found.

- **removeCourse(courseId)**:
  - Removes a course from the `courses` array.
  - Returns the `courseId` if removed; returns `-1` if the course does not exist.

- **getCourses()**:
  - Returns the array of all courses.

- **getCourse(courseId)**:
  - Returns the course object for the specified `courseId`.

- **getRegisteredStudent(courseId)**:
  - Returns an array of registered students for the specified course, or an empty array if the course does not exist.

- **removeStudentInCourse(courseId, studentId)**:
  - Removes a specified student from a course.
  - Returns the updated course object; returns `-1` if the course or student is not found.


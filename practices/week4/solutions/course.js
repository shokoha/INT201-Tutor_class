class CourseManagement {
    constructor() {
        this.courses = []
    }

    createCourse(courseId, courseTitle = 'untitled', courseTerm = '2-2565') {
        const newCourse = {
            courseId,
            courseTitle,
            courseTerm,
            registeredStudents: [],
        }
        this.courses.push(newCourse)
    }

    registerCourseWithOneStudent(courseId, studentId) {
        const courseIndex = this.findCourseIndex(courseId)
        if (courseIndex === -1) return -1

        const course = this.courses[courseIndex]
        course.registeredStudents.push(studentId)
        return course.registeredStudents.length
    }

    registerCourseWithStudents(courseId, studentIds) {
        const courseIndex = this.findCourseIndex(courseId)
        if (courseIndex === -1) return -1

        const course = this.courses[courseIndex]
        course.registeredStudents.push(...studentIds)
        return course.registeredStudents.length
    }

    findCourseIndex(courseId) {
        return this.courses.findIndex((course) => course.courseId === courseId)
    }

    removeCourse(courseId) {
        const courseIndex = this.findCourseIndex(courseId)
        if (courseIndex === -1) return -1

        this.courses.splice(courseIndex, 1)
        return courseId
    }

    getCourses() {
        return this.courses
    }

    getCourse(courseId) {
        const courseIndex = this.findCourseIndex(courseId)
        return courseIndex === -1 ? null : this.courses[courseIndex]
    }

    getRegisteredStudent(courseId) {
        const course = this.getCourse(courseId)
        return course ? course.registeredStudents : []
    }

    removeStudentInCourse(courseId, studentId) {
        const courseIndex = this.findCourseIndex(courseId)
        if (courseIndex === -1) return -1

        const course = this.courses[courseIndex]
        const studentIndex = course.registeredStudents.indexOf(studentId)
        if (studentIndex === -1) return -1

        course.registeredStudents.splice(studentIndex, 1)
        return course
    }
}

// test cases
{
    // Test Case 1: Create a new CourseManagement instance and add courses
    const cm = new CourseManagement()
    cm.createCourse('INT201', 'Client Side I', '1-2565')
    cm.createCourse('INT202', 'Server Side I', '1-2565')
    cm.createCourse('Gen101')
    cm.createCourse('INT203')

    // Test Case 2: Register students for courses
    console.log(cm.registerCourseWithOneStudent('INT201', 1001)) // Expected: 1 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT203', 1001)) // Expected: 1 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT203', 1002)) // Expected: 2 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT203', 1006)) // Expected: 3 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT202', 1002)) // Expected: 1 (student registered)
    console.log(cm.registerCourseWithOneStudent('Gen111', 1002)) // Expected: -1 (invalid course)
    console.log('-----------------------------------------------------')

    // Test Case 3: Register multiple students for a course
    console.log(cm.registerCourseWithStudents('INT201', [1003, 1005])) // Expected: 3 (students registered)
    console.log(cm.registerCourseWithStudents('INT202', [1003, 1005])) // Expected: 3 (students registered)
    console.log(cm.registerCourseWithStudents('Gen101', [1003, 1005])) // Expected: 2 (students registered)
    console.log('-----------------------------------------------------')

    // Test Case 4: Find course indexes
    console.log(cm.findCourseIndex('INT201')) // Expected: 0 (course found)
    console.log(cm.findCourseIndex('INT202')) // Expected: 1 (course found)
    console.log('-----------------------------------------------------')

    // Test Case 5: Remove courses
    console.log(cm.removeCourse('INT202')) // Expected: 'INT202' (course removed)
    console.log(cm.removeCourse('INT203')) // Expected: 'INT203' (course removed)
    console.log(cm.removeCourse('INT205')) // Expected: -1 (invalid course)
    console.log('-----------------------------------------------------')

    // Test Case 6: Get all courses
    console.log(cm.getCourses()) // Expected: array of remaining courses
    console.log('-----------------------------------------------------')

    // Test Case 7: Get a specific course
    console.log(cm.getCourse('INT201')) // Expected: course object for 'INT201'
    console.log('-----------------------------------------------------')

    // Test Case 8: Get registered students for a course
    console.log(cm.getRegisteredStudent('INT201')) // Expected: array of registered students
    console.log('-----------------------------------------------------')

    // Test Case 9: Remove a student from a course
    console.log(cm.removeStudentInCourse('INT201', 1003)) // Expected: updated course object
    console.log(cm.removeStudentInCourse('INT205', 1003)) // Expected: -1 (invalid course)
    console.log('-----------------------------------------------------')

    // Test Case 10: Get updated course information
    console.log(cm.getCourse('INT201')) // Expected: updated course object for 'INT201'
}

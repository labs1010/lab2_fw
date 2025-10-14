class OnlineCourse {
    constructor(title, duration, students = []) {
        this.title = title;
        this.duration = duration;
        this.students = students;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(c => c.title !== courseName);
    }
    findCourse(courseName) {
        return this.courses.find(c => c.title === courseName);
    }
    listCourses() {
        this.courses.forEach(c => {
            console.log(`${c.title} (${c.duration} год) → студенти: ${c.students.join(", ") || "немає"}`);
        });
    }
}
const jsCourse = new OnlineCourse("TypeScript", 40);
const pythonCourse = new OnlineCourse("Python", 30);
jsCourse.registerStudent("Анна");
pythonCourse.registerStudent("Олег");
const manager = new CourseManager();
manager.addCourse(jsCourse);
manager.addCourse(pythonCourse);
manager.listCourses();

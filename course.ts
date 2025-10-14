interface Course {
  title: string;
  duration: number;
  students: string[];
}

class OnlineCourse implements Course {
  constructor(public title: string, public duration: number, public students: string[] = []) {}

  registerStudent(student: string): void {
    if (!this.isStudentRegistered(student)) {
      this.students.push(student);
    }
  }

  isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter(c => c.title !== courseName);
  }

  findCourse(courseName: string): Course | undefined {
    return this.courses.find(c => c.title === courseName);
  }

  listCourses(): void {
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
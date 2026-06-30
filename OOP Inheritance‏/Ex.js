class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
}

class Teacher extends Person {
    constructor(name, birthYear, salary) {
        super(name, birthYear);
        this.salary = salary;
    }
}

class Student extends Person {
    constructor(name, birthYear) {
        super(name, birthYear);
    }
}

class Principal extends Person {
    constructor(name, birthYear) {
        super(name, birthYear);
        this.teachers = [];
        this.students = [];
    }

    hireTeacher(teacher) {
        this.teachers.push(teacher);
        console.log(`${this.name} just hired ${teacher.name}`);
    }

    recruitStudent(student) {
        this.students.push(student);
    }

    expelStudent(student) {
        let studentIndex = this.students.findIndex(s => s.name === student.name);
        if (studentIndex !== -1) {
            this.students.splice(studentIndex, 1);
        }
    }

    transferStudent(student, principal) {
        this.expelStudent(student);
        principal.recruitStudent(student);
    }
}

// Test
const p1 = new Principal("Martin", 1991);
const p2 = new Principal("Martha", 1990);

const t1 = new Teacher("Cassandra", 2002, 40000);
const t2 = new Teacher("Kevin", 2006, 30000);

const s1 = new Student("Ronda", 2017);
const s2 = new Student("Byron", 2016);

// 1 & 2
p1.hireTeacher(t1);
console.log(p1.teachers);

p1.hireTeacher(t2);
console.log(p1.teachers);

// 3 & 4
p1.recruitStudent(s1);
p1.recruitStudent(s2);
console.log(p1.students);

// 5
p1.expelStudent(s1);
console.log(p1.students);

// 6
p1.transferStudent(s2, p2);
console.log(p1.students);
console.log(p2.students);
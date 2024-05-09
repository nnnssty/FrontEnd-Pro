class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];
    }

    present() {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        } else {
            console.log("Максимальна кількість записів про відвідуваність вже досягнута.");
        }
    }

    absent() {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        } else {
            console.log("Максимальна кількість записів про відвідуваність вже досягнута.");
        }
    }

    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        const totalGrades = this.grades.reduce((total, grade) => total + grade, 0);
        return totalGrades / this.grades.length;
    }

    calculateAttendanceRate() {
        const totalClasses = this.attendance.length;
        const totalPresent = this.attendance.filter(status => status).length;
        return totalPresent / totalClasses;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRate = this.calculateAttendanceRate();

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

// Приклад використання:

const student1 = new Student("Іван", "Петров", 2000);
student1.grades = [90, 85, 95, 92, 88];
student1.present();
student1.present();
console.log("Ім'я:", student1.firstName);
console.log("Прізвище:", student1.lastName);
console.log("Вік студента:", student1.calculateAge());
console.log("Середній бал:", student1.calculateAverageGrade());
console.log("Відвідуваність:", student1.calculateAttendanceRate());
console.log("Висновок:", student1.summary());

const student2 = new Student("Марія", "Іванова", 2001);
student2.grades = [85, 80, 75, 78, 82];
student2.absent();
student2.present();
console.log("Ім'я:", student2.firstName);
console.log("Прізвище:", student2.lastName);
console.log("Вік студента:", student2.calculateAge());
console.log("Середній бал:", student2.calculateAverageGrade());
console.log("Відвідуваність:", student2.calculateAttendanceRate());
console.log("Висновок:", student2.summary());

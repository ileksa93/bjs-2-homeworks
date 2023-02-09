function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = null;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
      this.marks.push(...marksToAdd);
    } else {
      console.log("This student has been expelled and cannot receive marks.");
    }
  };
  
  Student.prototype.getAverage = function() {
    let totalMarks = 0;
    if (this.marks.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.marks.length; i++) {
        totalMarks += this.marks[i];
      }
      return totalMarks / this.marks.length;
    }
  };
  
  Student.prototype.expel = function() {
    this.subject = null;
    this.marks = null;
  };
  
  const student1 = new Student("John", "Male", 22);
  const student2 = new Student("Jane", "Female", 21);
  const student3 = new Student("Jim", "Male", 23);
  
  student1.setSubject("Mathematics");
  student2.setSubject("Physics");
  student3.setSubject("Chemistry");
  
  student1.addMarks(80, 90, 95);
  student2.addMarks(85, 95, 90);
  student3.addMarks(75, 80, 85);
  
  console.log("Average marks of John: ", student1.getAverage());
  console.log("Average marks of Jane: ", student2.getAverage());
  console.log("Average marks of Jim: ", student3.getAverage());
  
  student1.expel();
  student1.addMarks(80, 90, 95);
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
    if (!this.marks || this.marks.length === 0) {
        return 0;
      }
  
      let sum = 0;
      for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
      }
      return sum / this.marks.length;
    };
  
  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  
 
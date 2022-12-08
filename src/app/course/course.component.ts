import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseService } from 'src/services/couseservice';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: any;
  title: any;
  author: any;


  selectLesson(lesson: any){
    this.selectedLesson = lesson;
    console.log("Lesson Selected")
  }
  selectedLesson = {
    lesson:[] as any[],
    id: undefined
  }

  selectedModule ={
    lesson:[] as any[],
    id: undefined
  }

selectModule(module: any) {
this.selectedModule = module;
}

selectCourse(course: any) {
  this.selectedCourse = course;
}
selectedCourse = {
  modules:[] as any[],
  id: undefined
};

  constructor(private courseService: courseService, private router: Router) { }

  ngOnInit(): void {
    
    this.courseService.findallCourse().then(courses  => this.courses = courses)
    console.log("I am in course component checking courses value : ",this.courses);

  }



}

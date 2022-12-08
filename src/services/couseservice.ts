import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";

@Injectable()
export class courseService {
    
    findallCourse=()=>fetch('http://courseservice-env.eba-eikexim3.us-east-1.elasticbeanstalk.com/api/v1/courses').then(Response =>Response.json())

    constructor(private http: HttpClient){

    }
    
    async addcourse(course:any ) {
      let response = await fetch('http://courseservice-env.eba-eikexim3.us-east-1.elasticbeanstalk.com/api/v1/courses/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(course)
        });
        
        alert("Course Added!");
              
  }

}
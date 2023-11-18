import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  employerObj: any = {
    "EmployerId": 0,
    "CompanyName": "",
    "EmailId": "",
    "Mobile": "",
    "PhoneNumber": "",
    "CompanyAddress":"",
    "City":"",
    "Province":"",
    "BIRcode":"",
    "ORnumber":"",
  }
  JobSeekerObj: any= {
    "JobSeekerId": 0,
    "Fullname": "",
    "EmailId": "",
    "Mobile": "",
    "ExperieceStatus": "",
    "ResumeUrl": "",
  }
  isJobSeeker: boolean = true;
  constructor(private job:JobService){}

  register() {
    this.job.registerEmployer(this.employerObj).subscribe((res:any)=>{
      if(res.result) {
        alert(res.message)
      } else {
        alert(res.message)
      }
    })
  }
}

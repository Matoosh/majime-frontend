import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbWindowRef } from '@nebular/theme';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-form-add-sample',
  templateUrl: './form-add-sample.component.html',
  styleUrls: ['./form-add-sample.component.scss']
})
export class FormAddSampleComponent implements OnInit {
  sampleForm = this.fb.group({
    sampleNo: ['',Validators.required],
    quantity: ['',Validators.required]
  })

  constructor(private api:ApiService,
    private toast:ToastService,
    private ref: NbWindowRef,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let sample = this.sampleForm.value
    this.api.addSample(sample).then(()=>{
      this.toast.showToast(NbGlobalPhysicalPosition.TOP_RIGHT,'success',"Sample added")
      this.ref.close()
    }).catch((err)=>{
      this.toast.showToast(NbGlobalPhysicalPosition.TOP_RIGHT,'danger',"Sample exist or check your connection, status:"+err.status)
    })
  }

  close(){
    this.ref.close()
  }
}

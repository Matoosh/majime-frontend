import { Component, OnInit } from '@angular/core';
import { NbWindowService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { FormAddSampleComponent } from 'src/app/components/form-add-sample/form-add-sample.component';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-samples-page',
  templateUrl: './samples-page.component.html',
  styleUrls: ['./samples-page.component.scss']
})
export class SamplesPageComponent implements OnInit {
  source:any
  settings = {
    mode:'external',
    add:{
      confirmCreate:true
    },
    delete:{
      confirmDelete:true
    },
    edit:{
      confirmSave:true
    },
    columns: {
      id: {
        title: 'Id'
      },
      sampleNo: {
        title: 'Sample Number'
      },
      quantity:{
        title: 'Quantity'
      }
    }
  };
  constructor(
    private api:ApiService,
    private windowService: NbWindowService,
    private toast:ToastService
    ) {
  }

  ngOnInit(): void {
    this.source = new LocalDataSource();
    this.getData()
  }

  getData(){
    this.api.getSamples().then((res)=>{
      console.log(res)
      this.source.load(res);
    })
  }

  onCreate(){
    console.log("add")
    this.windowService.open(FormAddSampleComponent, { title: `Add new sample` }).onClose.subscribe(()=>{
      this.getData()
    });
  }

  onDelete(event:any) {
    if (window.confirm('Are you sure you want to delete?')) {
      // this.api.delSample(Sample).subscribe((res:IApi<Sample>)=>{
      //   this.toast.showToast(NbGlobalPhysicalPosition.TOP_RIGHT, res.status,res.message)
      //   this.getData()
      // })
    } 
  }

}

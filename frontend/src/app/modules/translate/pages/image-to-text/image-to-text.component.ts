import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-image-to-text',
  templateUrl: './image-to-text.component.html',
  styleUrls: ['./image-to-text.component.css']
})
export class ImageToTextComponent {
  [x: string]: any;
  file: any;
  url: any;
  btnStatus: boolean = true;
  ocrResult: any;

  constructor(private services: BackendService,) { }
  ngOnInit() { }
  onChange(event: any) {
    this.btnStatus = false;
    console.log(event.target.files[0]);
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.url = event.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
  postOcr() {
    this.btnStatus = true;
    this.services.imageToText(this.url.split(',')[1]).subscribe((data: any) => {
      console.log(data);
      this.ocrResult = JSON.stringify(data);
    });
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "text/plain");

    // var requestOptions:RequestInit = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: this.url.split(',')[1],
    //   // redirect: 'follow',
    //   mode: "no-cors",
    // };

    // let data = await fetch("http://127.0.0.1:5000/process", requestOptions)
    // console.log(data);
    
  }
}

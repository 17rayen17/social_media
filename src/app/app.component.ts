import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  i=[1,2,3,4]
  form :any;
  dark : boolean = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      "box": new FormControl(false)
    })
    this.form.get('box').valueChanges.subscribe((value : any) => {
      this.dark = value;
      console.log(value);
    });
  }

}

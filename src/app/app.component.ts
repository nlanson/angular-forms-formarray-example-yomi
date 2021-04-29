import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  list = [
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: true },
    { id: 5, checked: false },
    { id: 6, checked: false },
    { id: 7, checked: true },
    { id: 8, checked: false }
  ];
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      items: fb.array([])
    });
  }
  ngOnInit(): void {
    const items = this.form.get("items") as FormArray;
    this.list.forEach(r => {
      items.push(
        this.fb.group({
          id: r.id,
          checked: r.checked
        })
      );
    });
  }

  addNewAddressGroup() {}

  deleteAddressGroup(index: number) {
    const add = this.form.get("address") as FormArray;
    add.removeAt(index);
  }
}

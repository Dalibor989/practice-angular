import {Component, Input, OnInit} from '@angular/core';
import {Guidebook} from "../guidebook.model";

@Component({
  selector: 'app-guidebook',
  templateUrl: './guidebook.component.html',
  styleUrls: ['./guidebook.component.css']
})
export class GuidebookComponent implements OnInit {
  @Input() guidebook?: Guidebook;

  constructor() { }

  ngOnInit(): void {

  }

  onDelete() {

  }

  onShare() {

  }

  onEdit() {

  }

}

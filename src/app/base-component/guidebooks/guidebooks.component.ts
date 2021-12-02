import { Component, OnInit } from '@angular/core';
import {Guidebook} from "./guidebook.model";
import {GuidebookService} from "./guidebook.service";

@Component({
  selector: 'app-guidebooks',
  templateUrl: './guidebooks.component.html',
  styleUrls: ['./guidebooks.component.css']
})
export class GuidebooksComponent implements OnInit {
  guidebooks?: Guidebook[];

  constructor(private guidebookService: GuidebookService) { }

  ngOnInit(): void {
    this.guidebooks = this.guidebookService.getGuidebook();
    console.log(this.guidebooks)
  }

}

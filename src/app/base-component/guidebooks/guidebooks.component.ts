import { Component, OnInit } from '@angular/core';
import {Guidebook} from "./guidebook.model";
import {GuidebookService} from "./guidebook.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-guidebooks',
  templateUrl: './guidebooks.component.html',
  styleUrls: ['./guidebooks.component.css']
})
export class GuidebooksComponent implements OnInit {
  guidebooks?: Guidebook[];

  constructor(private guidebookService: GuidebookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.guidebooks = this.guidebookService.getGuidebook();
  }

  redirect() {
    this.router.navigate(['../guidebook-details'], {relativeTo: this.route})
  }
}

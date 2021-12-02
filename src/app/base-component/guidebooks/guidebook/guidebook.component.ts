import { Component, OnInit } from '@angular/core';
import {Guidebook} from "../guidebook.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GuidebookService} from "../guidebook.service";

@Component({
  selector: 'app-guidebook',
  templateUrl: './guidebook.component.html',
  styleUrls: ['./guidebook.component.css']
})
export class GuidebookComponent implements OnInit {

  constructor(private guidebookService: GuidebookService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}

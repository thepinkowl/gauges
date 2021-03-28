import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  CategoriesService,
  Category,
} from "src/app/services/categories.service";
import { TasksService } from "src/app/services/tasks.service";
import { combineLatest } from "rxjs";
import Task from "src/app/models/Task";

@Component({
  selector: "app-task-list-by-category",
  templateUrl: "./task-list-by-category.page.html",
  styleUrls: ["./task-list-by-category.page.scss"],
})
export class TaskListByCategoryPage implements OnInit {
  category: Category;
  tasks: Task[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    let routeParamsObs = this.activatedRoute.params;
    let tasksObs = this.tasksService.getTasks();
    let categoriesObs = this.categoriesService.getCategories();

    combineLatest([routeParamsObs, tasksObs, categoriesObs]).subscribe(
      ([routeParams, tasks, categories]) => {
        if (categories.length === 0) return;
        this.category = categories.find((c) => c.cid === routeParams.cid);
        let searchCategory = this.category.cid;
        this.tasks = tasks.filter((t) => t.category === searchCategory);
      }
    );
  }
}

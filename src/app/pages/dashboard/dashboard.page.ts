import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Task from 'src/app/models/Task';
import { CategoriesService, Category, OtherCategory } from 'src/app/services/categories.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashBoardPage implements OnDestroy {
  constructor(
    private tasksService: TasksService,
    public categoriesService: CategoriesService,
  ) { }

  public $categories: Observable<Category[]>;
  public categories: Category[] = [];
  public initialCategories: Category[];
  public $tasks: Observable<Task[]>;
  public tasks: Task[] = [];
  private initialTasks: Task[] = [];
  subs: Subscription[] = [];

  showTasksRatherThanCategories = true;

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  ionViewWillEnter() {
    this.$tasks = this.tasksService.getTasks();
    this.$categories = this.categoriesService.getCategories();
    const taskSubscription = this.$tasks.subscribe(tasks => {
      this.initialTasks = tasks
      this.tasks = tasks
    })
    const categoriesSubscription = this.$categories.subscribe(categories => {
      this.initialCategories = categories
      this.categories = categories
    })
    this.subs.push(taskSubscription, categoriesSubscription)
  }

  get parentCategories() {
    let out = [...this.categories.filter(c => {
      const children = this.getChildCategories(c);
      const shouldShow = children.some(child => this.tasks.some(t => t.category === child.cid))
      return !c.parentcid && shouldShow
    })];
    if (this.tasks.some(t => !t.hasCategory())) {
      out.push(OtherCategory)
    }
    return out
  }

  get otherTasks() {
    return this.tasks.filter(t => !t.hasCategory())
  }

  getChildCategories(cat: Category) {
      return this.categories.filter(c => {
        const shouldShow = this.tasks.some(t => t.category === c.cid)
        return c.parentcid === cat.cid && shouldShow
      })
    }

  getCategoryProgress(category: Category) {
    const tasks = this.tasksService.getTasksInCategory(category);
    
    const progressType = "worst";
    const progresses = tasks.map(t => t.progress);

    if (progressType === "worst") {
      return Math.min(...progresses);
    } else if (progressType === "average") {
      return progresses.reduce((p, c) => p + c) / tasks.length;
    } else {
      return 0;
    }
  }

  filterContent(event) {
    this.tasks = this.initialTasks.filter(t => t.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.categories = this.initialCategories.filter(t => t.title.toLowerCase().includes(event.target.value.toLowerCase()))
  }

}

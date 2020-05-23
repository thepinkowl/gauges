import { Pipe, PipeTransform } from '@angular/core';
import Task from 'src/app/models/Task';

@Pipe({
  name: 'sortTasks'
})
export class SortTasksPipe implements PipeTransform {

  transform(tasks: Task[]): Task[] {
    if (!tasks) return null;
    return tasks.sort((a: Task, b: Task) => a.progress > b.progress ? 1 : -1);
  }

}

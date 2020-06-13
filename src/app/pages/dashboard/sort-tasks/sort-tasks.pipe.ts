import { Pipe, PipeTransform } from '@angular/core';
import Task from 'src/app/models/Task';

@Pipe({
  name: 'sortTasks'
})
export class SortTasksPipe implements PipeTransform {

  transform(tasks: Task[]): Task[] {
    if (!tasks) { return tasks; }
    tasks.sort((a: Task, b: Task) => {
      const diff = a.progress - b.progress;
      if (diff === 0) { return a.lastDone.getTime() - b.lastDone.getTime(); }
      return diff;
    });
    return tasks;
  }

}

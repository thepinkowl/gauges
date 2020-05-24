import { Pipe, PipeTransform } from '@angular/core';
import Task from 'src/app/models/Task';

@Pipe({
  name: 'sortTasks'
})
export class SortTasksPipe implements PipeTransform {

  transform(tasks: Task[]): Task[] {
    if (!tasks) return tasks;
    tasks.sort((a: Task, b: Task) => {
      const diff = b.progress - a.progress;
      if (diff === 0) return b.lastDone.getTime() - a.lastDone.getTime();
      return diff;
    });
    return tasks;
  }

}

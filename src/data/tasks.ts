import TaskDetail from "../pages/TaskDetail";

export interface Task {
  id: number;
  title: string;
  when: number[];
  executions: Date[];
}

const defaultTasks: Task[] = [
  {
    title: 'Laundry',
    when: [1, 3],
    executions: [
      new Date("2020-05-14T20:06:02.097+02:00"),
      new Date("2020-05-13T20:06:02.097+02:00")
    ],
    id: 0
  },
  {
    title: 'Gardening',
    when: [0, 1, 2],
    executions: [
      new Date("2020-05-16T20:06:02.097+02:00")
    ],
    id: 1
  },
  {
    title: 'Hoovering',
    when: [0, 1, 3],
    executions: [
      new Date("2020-05-17T20:06:02.097+02:00")
    ],
    id: 2
  },
  // {
  //   title: 'Bill Thomas',
  //   when: [0, 1, 4],
  //   executions: [],
  //   id: 3
  // },
  // {
  //   title: 'Joanne Pollan',
  //   when: [0, 1, 5],
  //   executions: [],
  //   id: 4
  // },
  // {
  //   title: 'Andrea Cornerston',
  //   when: [0, 1, 6],
  //   executions: [],
  //   id: 5
  // },
  // {
  //   title: 'Moe Chamont',
  //   when: [0, 2, 4],
  //   executions: [],
  //   id: 6
  // },
  // {
  //   title: 'Kelly Richardson',
  //   when: [0, 2, 6],
  //   executions: [],
  //   id: 7
  // }
];

const loadTasks = () => {
  const fromDB = localStorage.getItem('tasks');
  if (!fromDB) return [...defaultTasks]
  const parsed = JSON.parse(fromDB);
  parsed.forEach((task: Task) => {
    task.executions = task.executions.map(e => new Date(e))
  });
  return parsed;
}

let tasks: Task[] = loadTasks()

export const getTasks = () => tasks;

export const getTask = (id: number) => tasks.find(m => m.id === id);

export const deleteTask = (task: Task) => {
  tasks = [...tasks.filter(t => t.id !== task.id)]
}

export const saveTask = (task: Task) => {
  const ids = tasks.map(item => item.id);
  const doesTaskExist = ids.includes(task.id);

  if (!doesTaskExist) {
    ids.sort((a, b) => b - a);
    const biggestId = ids[0] || 0;
    task.id = biggestId + 1;
  }

  const result = [...tasks.filter(t => t.id !== task.id), task]
  localStorage.setItem('tasks', JSON.stringify(result));
  tasks = result;

}
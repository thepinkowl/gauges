export interface Task {
  id: number;
  title: string;
  when: number[];
  executions: Date[];
}

const tasks: Task[] = [
  {
    title: 'Matt Chorsey',
    when: [1, 3],
    executions: [],
    id: 0
  },
  {
    title: 'Lauren Ruthford',
    when: [0, 1, 2],
    executions: [],
    id: 1
  },
  {
    title: 'Jordan Firth',
    when: [0, 1, 3],
    executions: [],
    id: 2

  },
  {
    title: 'Bill Thomas',
    when: [0, 1, 4],
    executions: [],
    id: 3
  },
  {
    title: 'Joanne Pollan',
    when: [0, 1, 5],
    executions: [],
    id: 4
  },
  {
    title: 'Andrea Cornerston',
    when: [0, 1, 6],
    executions: [],
    id: 5
  },
  {
    title: 'Moe Chamont',
    when: [0, 2, 4],
    executions: [],
    id: 6
  },
  {
    title: 'Kelly Richardson',
    when: [0, 2, 6],
    executions: [],
    id: 7
  }
];

export const getTasks = () => tasks;

export const getTask = (id: number) => tasks.find(m => m.id === id);

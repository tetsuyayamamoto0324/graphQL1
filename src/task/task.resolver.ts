import { Resolver, Query } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.module';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
}

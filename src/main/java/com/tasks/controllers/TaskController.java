package com.tasks.controllers;

import com.tasks.dao.Category;
import com.tasks.dao.CategoryRepository;
import com.tasks.dao.Task;
import com.tasks.dao.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by atretjak on 29.12.2016.
 */

@RestController
public class TaskController {
    private TaskRepository taskRepository;
    private CategoryRepository categoryRepository;

    @Autowired
    public TaskController(TaskRepository taskRepository,
                          CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
    }


    /**
     * Add task received in request body
     *
     * @param task
     */
    @RequestMapping(method = RequestMethod.POST, value = "/api/tasks", consumes = "application/json")
    public void addTask(@RequestBody Task task) {
        taskRepository.save(new Task(task.getTaskName(),
                task.getTaskDescription(),
                task.getDeadLine(),
                task.getImageURL(),
                task.getCategory()));
    }

    /**
     * Returns all tasks
     *
     * @return all tasks
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/tasks")
    public List<Task> getAllTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    /**
     * Returns task with specific ID
     *
     * @param id Task id
     * @return Found task
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/tasks/{id}")
    public Task getTask(@PathVariable Long id) {
        return taskRepository.findOne(id);
    }


    /**
     * Search tasks that contains search criteria in their title or descriprion
     *
     * @param searchCriteria Search criteria
     * @return Found tasks
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/tasks/search")
    public List<Task> searchTask(@RequestParam(value = "nameOrDesc") String searchCriteria) {
        return taskRepository.findByTaskNameContainingIgnoreCaseOrTaskDescriptionContainingIgnoreCase(
                searchCriteria, searchCriteria);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/api/tasks/update", consumes = "application/json")
    public void updateTask(@RequestBody Task task) {
        taskRepository.save(task);
    }

    /**
     * Deletes task by its ID
     *
     * @param id task ID
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/tasks/{id}/delete")
    public void deleteTask(@PathVariable Long id) {
        taskRepository.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/categories", consumes = "application/json")
    public void addCategory(@RequestBody Category category) {
        categoryRepository.save(new Category(category.getCategoryName()));
    }
}
package com.tasks.controllers;

import com.tasks.controllers.exceptions.TaskNotFoundException;
import com.tasks.dao.Category;
import com.tasks.dao.CategoryRepository;
import com.tasks.dao.Task;
import com.tasks.dao.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

/**
 * Created by atretjak on 29.12.2016.
 */

@RestController
public class TaskController {
    private TaskRepository taskRepository;
    private CategoryRepository categoryRepository;

    @Autowired
    public TaskController(TaskRepository taskRepository, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
    }


    /**
     * Add or update task received in request body
     *
     * @param task
     */
    @RequestMapping(method = RequestMethod.POST, value = "/api/tasks", consumes = "application/json")
    public ResponseEntity<?> addOrUpdateTask(@RequestBody Task task) {

        if (task.getCategory().getId() == null) {
            task.setCategory(categoryRepository.save(new Category(task.getCategory().getCategoryName())));
        }

        if (task.getId() == null) {
            task = taskRepository.save(new Task(task.getTaskName(),
                    task.getTaskDescription(),
                    task.getDeadLine(),
                    task.getImageURL(),
                    task.getCategory()));
        } else {
            task = taskRepository.save(task);
        }

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(task.getId()).toUri();
        return ResponseEntity.created(location).build();
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
        validateTask(id);
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

    /**
     * Deletes task by its ID
     *
     * @param id task ID
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/tasks/{id}/delete")
    public void deleteTask(@PathVariable Long id) {
        validateTask(id);
        taskRepository.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/categories", consumes = "application/json")
    public void addCategory(@RequestBody Category category) {
        categoryRepository.save(new Category(category.getCategoryName()));
    }

    private void validateTask(Long taskId) {
        Task task = this.taskRepository.findOne(taskId);
        if (task == null) {
            String s = taskId.toString();
            throw new TaskNotFoundException(taskId);
        }
    }
}
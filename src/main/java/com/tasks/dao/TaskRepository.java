package com.tasks.dao;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by atretjak on 29.12.2016.
 */

public interface TaskRepository extends CrudRepository<Task, Long> {

    List<Task> findByTaskNameContainingIgnoreCaseOrTaskDescriptionContainingIgnoreCase(String taskName, String taskDescription);

}

package com.tasks.dao;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Created by atretjak on 29.12.2016.
 */

@Data
@NoArgsConstructor
@Entity
public class Task {
    @Id
    @GeneratedValue
    private Long id;
    private String taskName;
    private String taskDescription;
    private boolean isActive;
    private String imageURL;
    private LocalDateTime dateAdded;
    private LocalDateTime dateFinished;
    private LocalDateTime deadLine;

    @ManyToOne //(cascade = CascadeType.ALL)
    private Category category;

    public Task (String taskName, String taskDescription, LocalDateTime deadLine, String imageURL, Category category){
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dateAdded = LocalDateTime.now();
        this.isActive = true;
        this.deadLine = deadLine;
        this.imageURL = imageURL;
        this.category = category;
    }


}

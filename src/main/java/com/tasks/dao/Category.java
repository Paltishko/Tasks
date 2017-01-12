package com.tasks.dao;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by atretjak on 10.01.2017.
 */

@Entity
@Data
@NoArgsConstructor
public class Category {
    @Id @GeneratedValue
    private Long id;

    private String categoryName;

//    @OneToMany (targetEntity = Task.class)
//    private List<Task> taskList;

    public Category (String categoryName){
        this.categoryName = categoryName;
    }
}

package com.tasks.dao;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

    public Category (String categoryName){
        this.categoryName = categoryName;
    }
}

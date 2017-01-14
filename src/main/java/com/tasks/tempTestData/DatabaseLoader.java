package com.tasks.tempTestData;

import com.tasks.dao.Category;
import com.tasks.dao.CategoryRepository;
import com.tasks.dao.Task;
import com.tasks.dao.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Created by atretjak on 29.12.2016.
 */

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final TaskRepository taskRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public DatabaseLoader(TaskRepository taskRepository, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
//        Category house = new Category("HouseKeeping");
//        Category auto = new Category("Auto");
//        Category payments = new Category("Payments");

        Category house = this.categoryRepository.save(new Category("HouseKeeping"));
        Category auto = this.categoryRepository.save(new Category("Auto"));
        Category payments = this.categoryRepository.save(new Category("Payments"));
        this.taskRepository.save(new Task(
                "Побрить Джигурду",
                "Эжигурдятина",
                LocalDateTime.of(2017, 1, 26, 8, 0),
                "http://v.img.com.ua/b/600x500/3/5d/304895efe3b4e579f1ff31917cf3b5d3.jpg",
                house));
        this.taskRepository.save(new Task(
                "Полить цветок",
                "Драцена на кухне",
                LocalDateTime.of(2017, 1, 26, 8, 0),
                "http://greendom.net/images/plants/agava/dracaena1.jpg",
                house));
        this.taskRepository.save(new Task(
                "Квартплата",
                "Заплатить за квартиру",
                LocalDateTime.of(2017, 2, 8, 8, 0),
                "http://img.joinfo.ua/i/2015/05/5569d0fbc331c_kvartplata.jpg",
                payments));
        this.taskRepository.save(new Task(
                "Wash the auto",
                "Помыть машину",
                LocalDateTime.of(2017, 1, 20, 8, 0),
                "http://идея-малого-бизнеса.рф/wp-content/uploads/2014/06/da85436b33b604840ff8594e489fa1210d1c84f8_677.jpg",
                auto));
    }
}

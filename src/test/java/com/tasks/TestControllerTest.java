package com.tasks;

import com.tasks.dao.Category;
import com.tasks.dao.CategoryRepository;
import com.tasks.dao.Task;
import com.tasks.dao.TaskRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mock.http.MockHttpOutputMessage;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import java.io.IOException;
import java.nio.charset.Charset;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

/**
 * Created by atretjak on 11.01.2017.
 */

@SuppressWarnings("DefaultFileTemplate")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = SpringReactJsApplication.class)
@WebAppConfiguration
public class TestControllerTest {

    private MediaType contentType = new MediaType(
            MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8")
    );

    private MockMvc mockMvc;
    private HttpMessageConverter mappingJackson2HttpMessageConverter;

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    void setConverters(HttpMessageConverter<?>[] converters) {
        this.mappingJackson2HttpMessageConverter = Arrays.stream(converters)
                .filter(hmc -> hmc instanceof MappingJackson2HttpMessageConverter)
                .findAny()
                .orElse(null);
        assertNotNull("the JSON message converter must not be null", this.mappingJackson2HttpMessageConverter);
    }

    @Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();

        this.taskRepository.deleteAll();
        this.categoryRepository.deleteAll();

        Category auto = new Category("Auto");
        Category payments = new Category("Payments");

        this.categoryRepository.save(auto);
        this.categoryRepository.save(payments);

        this.taskRepository.save(new Task(
                "Wash the auto",
                "Помыть машину",
                LocalDateTime.of(2017, 1, 20, 8, 0),
                "http://идея-малого-бизнеса.рф/wp-content/uploads/2014/06/da85436b33b604840ff8594e489fa1210d1c84f8_677.jpg",
                auto));
        this.taskRepository.save(new Task(
                "Квартплата",
                "Заплатить за квартиру",
                LocalDateTime.of(2017, 2, 8, 8, 0),
                "http://img.joinfo.ua/i/2015/05/5569d0fbc331c_kvartplata.jpg",
                payments));
    }

    @Test
    public void taskNotFound() throws Exception {
        mockMvc.perform(get("/api/tasks/10"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void readSingleTask() throws Exception {
        List<Task> taskList = (List<Task>) this.taskRepository.findAll();
        Task task = taskList.get(0);

        mockMvc.perform(get("/api/tasks/" + task.getId()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(contentType))
                .andExpect(jsonPath("$.id", is(task.getId().intValue())))
                .andExpect(jsonPath("$.taskName", is(task.getTaskName())))
                .andExpect(jsonPath("$.taskDescription", is(task.getTaskDescription())))
                .andExpect(jsonPath("$.dateAdded[0]", is(task.getDateAdded().getYear())))
                .andExpect(jsonPath("$.dateAdded[1]", is(task.getDateAdded().getMonthValue())))
                .andExpect(jsonPath("$.dateAdded[2]", is(task.getDateAdded().getDayOfMonth())))
                .andExpect(jsonPath("$.dateAdded[3]", is(task.getDateAdded().getHour())))
                .andExpect(jsonPath("$.dateAdded[4]", is(task.getDateAdded().getMinute())))
                .andExpect(jsonPath("$.dateAdded[5]", is(task.getDateAdded().getSecond())))
                .andExpect(jsonPath("$.dateAdded[6]", is(task.getDateAdded().getNano())))
                .andExpect(jsonPath("$.deadLine[0]", is(task.getDeadLine().getYear())))
                .andExpect(jsonPath("$.deadLine[1]", is(task.getDeadLine().getMonthValue())))
                .andExpect(jsonPath("$.deadLine[2]", is(task.getDeadLine().getDayOfMonth())))
                .andExpect(jsonPath("$.deadLine[3]", is(task.getDeadLine().getHour())))
                .andExpect(jsonPath("$.deadLine[4]", is(task.getDeadLine().getMinute())))
                .andExpect(jsonPath("$.imageURL", is(task.getImageURL())))
                .andExpect(jsonPath("$.category.id", is(task.getCategory().getId().intValue())))
                .andExpect(jsonPath("$.category.categoryName", is(task.getCategory().getCategoryName())))
                .andExpect(jsonPath("$.active", is(task.isActive())))
        ;
    }

    @Test
    public void readTasks() throws Exception {
        List<Task> taskList = (List<Task>) this.taskRepository.findAll();
        Task task1 = taskList.get(0);
        Task task2 = taskList.get(1);

        mockMvc.perform(get("/api/tasks/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(contentType))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(task1.getId().intValue())))
                .andExpect(jsonPath("$[0].taskName", is(task1.getTaskName())))
                .andExpect(jsonPath("$[0].taskDescription", is(task1.getTaskDescription())))
                .andExpect(jsonPath("$[0].dateAdded[0]", is(task1.getDateAdded().getYear())))
                .andExpect(jsonPath("$[0].dateAdded[1]", is(task1.getDateAdded().getMonthValue())))
                .andExpect(jsonPath("$[0].dateAdded[2]", is(task1.getDateAdded().getDayOfMonth())))
                .andExpect(jsonPath("$[0].dateAdded[3]", is(task1.getDateAdded().getHour())))
                .andExpect(jsonPath("$[0].dateAdded[4]", is(task1.getDateAdded().getMinute())))
                .andExpect(jsonPath("$[0].dateAdded[5]", is(task1.getDateAdded().getSecond())))
                .andExpect(jsonPath("$[0].dateAdded[6]", is(task1.getDateAdded().getNano())))
                .andExpect(jsonPath("$[0].deadLine[0]", is(task1.getDeadLine().getYear())))
                .andExpect(jsonPath("$[0].deadLine[1]", is(task1.getDeadLine().getMonthValue())))
                .andExpect(jsonPath("$[0].deadLine[2]", is(task1.getDeadLine().getDayOfMonth())))
                .andExpect(jsonPath("$[0].deadLine[3]", is(task1.getDeadLine().getHour())))
                .andExpect(jsonPath("$[0].deadLine[4]", is(task1.getDeadLine().getMinute())))
                .andExpect(jsonPath("$[0].imageURL", is(task1.getImageURL())))
                .andExpect(jsonPath("$[0].category.id", is(task1.getCategory().getId().intValue())))
                .andExpect(jsonPath("$[0].category.categoryName", is(task1.getCategory().getCategoryName())))
                .andExpect(jsonPath("$[0].active", is(task1.isActive())))
                .andExpect(jsonPath("$[1].id", is(task2.getId().intValue())))
                .andExpect(jsonPath("$[1].taskName", is(task2.getTaskName())))
                .andExpect(jsonPath("$[1].taskDescription", is(task2.getTaskDescription())))
                .andExpect(jsonPath("$[1].dateAdded[0]", is(task2.getDateAdded().getYear())))
                .andExpect(jsonPath("$[1].dateAdded[1]", is(task2.getDateAdded().getMonthValue())))
                .andExpect(jsonPath("$[1].dateAdded[2]", is(task2.getDateAdded().getDayOfMonth())))
                .andExpect(jsonPath("$[1].dateAdded[3]", is(task2.getDateAdded().getHour())))
                .andExpect(jsonPath("$[1].dateAdded[4]", is(task2.getDateAdded().getMinute())))
                .andExpect(jsonPath("$[1].dateAdded[5]", is(task2.getDateAdded().getSecond())))
                .andExpect(jsonPath("$[1].dateAdded[6]", is(task2.getDateAdded().getNano())))
                .andExpect(jsonPath("$[1].deadLine[0]", is(task2.getDeadLine().getYear())))
                .andExpect(jsonPath("$[1].deadLine[1]", is(task2.getDeadLine().getMonthValue())))
                .andExpect(jsonPath("$[1].deadLine[2]", is(task2.getDeadLine().getDayOfMonth())))
                .andExpect(jsonPath("$[1].deadLine[3]", is(task2.getDeadLine().getHour())))
                .andExpect(jsonPath("$[1].deadLine[4]", is(task2.getDeadLine().getMinute())))
                .andExpect(jsonPath("$[1].imageURL", is(task2.getImageURL())))
                .andExpect(jsonPath("$[1].category.id", is(task2.getCategory().getId().intValue())))
                .andExpect(jsonPath("$[1].category.categoryName", is(task2.getCategory().getCategoryName())))
                .andExpect(jsonPath("$[1].active", is(task2.isActive())))
        ;
    }

    @Test
    public void createTask() throws Exception {

        Task task = new Task("Полить цветок",
                "Драцена на кухне",
                LocalDateTime.of(2017, 1, 26, 8, 0),
                "http://greendom.net/images/plants/agava/dracaena1.jpg",
                new Category("Housekeeping"));
        String taskJson = toJson(task);

        mockMvc.perform(post("/api/tasks").contentType(contentType).content(taskJson))
                .andExpect(status().isCreated())
                .andExpect(header().stringValues("Location", "http://localhost/api/tasks/" +
                        taskRepository.findByTaskNameContainingIgnoreCaseOrTaskDescriptionContainingIgnoreCase("полить цветок", "Драцена на кухне").get(0).getId()));
    }

    @Test
    public void deteleTask() throws Exception {
        Task task = taskRepository.findAll().iterator().next();

        mockMvc.perform(get("/api/tasks/" + task.getId() + "/delete").contentType(contentType))
                .andExpect(status().isOk());

        assertNull(taskRepository.findOne(task.getId()));
    }

    private String toJson(Object o) throws IOException {
        MockHttpOutputMessage mockHttpOutputMessage = new MockHttpOutputMessage();
        this.mappingJackson2HttpMessageConverter.write(o, MediaType.APPLICATION_JSON, mockHttpOutputMessage);
        return mockHttpOutputMessage.getBodyAsString();

    }


}

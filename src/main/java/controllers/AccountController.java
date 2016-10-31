package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import dto.save.CreateAccountRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.sql.DataSource;
import java.util.HashMap;

/**
 * Created by Taavi on 30.10.2016.
 */
public class AccountController {

    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public AccountController(DataSource dataSource2) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser("admin");
        dataSource.setPassword("admin");
        dataSource.setDatabaseName("toilet_locations");
        dataSource.setServerName("localhost");
        dataSource.setPortNumber(3306);
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @RequestMapping(value = "createUser", method = RequestMethod.POST)
    public void createUser(@RequestBody CreateAccountRequest request) {
        HashMap hashMap = new HashMap();
        hashMap.put("username", request.getUsername());
        hashMap.put("password", request.getPassword());
       // jdbcTemplate.update("insert into locations (username, password) VALUES(:username, :password)", hashMap);
    }

}

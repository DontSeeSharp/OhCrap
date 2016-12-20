package controllers;

import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;
import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import domain.Account;
import domain.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.security.Principal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Taavi on 30.10.2016.
 */
@RestController
public class AccountController {
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public AccountController(DataSource dataSource1) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser("dontsees_guest");
        dataSource.setPassword("1Forgot1t");
        dataSource.setDatabaseName("dontsees_ohcrap");
        dataSource.setServerName("ns8527.hostgator.com");
        dataSource.setPortNumber(3306);
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }


    @RequestMapping(value = "getUsers")
    public List<Account> getUsers() {
        return jdbcTemplate.query("select * from userdata", new AccountMapper());
    }

    @RequestMapping(value = "createUser", method = RequestMethod.POST)
    public Map createUser(@RequestBody Account request) {
        HashMap hashMap;
        if (checkIfUserExists(request.getUsername())) {
            return Collections.singletonMap("result", "-1");
        } else {
            hashMap = new HashMap();
            hashMap.put("username", request.getUsername());
            hashMap.put("password", request.getPassword());
            jdbcTemplate.update("insert into users (username, password) VALUES(:username, :password)", hashMap);
            hashMap = new HashMap();
            hashMap.put("username", request.getUsername());
            hashMap.put("role", "ROLE_USER");
            jdbcTemplate.update("insert into user_roles (username, role) VALUES(:username, :role)", hashMap);
            return Collections.singletonMap("result", "0");
        }
    }

    private boolean checkIfUserExists(String username) {
        String sql = "SELECT * FROM users WHERE username = '" + username + "'";
        boolean result = false;

        List<Account> accountList = jdbcTemplate.query(sql, new AccountMapper());
        System.out.println(accountList.size());
        if (accountList.size() > 0) {
            result = true;
        }

        return result;
    }

    private static class AccountMapper implements RowMapper<Account> {
        public Account mapRow(ResultSet res, int rowNum) throws SQLException {
            Account account = new Account();
            account.setUsername(res.getString("username"));
            account.setPassword(res.getString("password"));
            return account;
        }

    }
}

package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Taavi on 31.10.2016.
 */
public class AccountControllerTest {

    private AccountController accountController;
    private MysqlDataSource dataSource;

    @Before
    public void runBeforeEachTest() {
        dataSource = new MysqlDataSource();
        accountController = new AccountController(dataSource);
    }
    @Test
    public void testIfUserIsCreated() {
    }
}
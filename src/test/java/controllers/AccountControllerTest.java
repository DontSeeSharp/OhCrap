package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import controllers.AccountController;
import domain.Account;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;


import java.security.Principal;
import java.sql.Timestamp;
import java.util.Collections;
import java.util.HashMap;

import static org.junit.Assert.assertEquals;


@RunWith(MockitoJUnitRunner.class)
public class AccountControllerTest {


    @InjectMocks
    public AccountController accountController;

    @Before
    public void setUp() {
        accountController = new AccountController(new MysqlDataSource());
    }

    @Test
    public void getUsersWork(){
        assertEquals("DontSeeSharp", accountController.getUsers().get(0).toString());
    }

    @Test
    public void createNewUserAndCheckIfItIsRegistered(){
        /*Account request = new Account();
        request.setUsername(new Timestamp(System.currentTimeMillis()).toString());
        String username = request.getUsername();
        request.setPassword("saldfkjsadlfjasdlfkjsaldkfjasldf");
        assertEquals(Collections.singletonMap("result", "0"), accountController.createUser(request));

        request = new Account();
        request.setUsername(username);
        request.setPassword("saldfkjsadlfjasdlfkjsaldkfjasldf");
        assertEquals(Collections.singletonMap("result", "-1"), accountController.createUser(request));*/
    }

    @Test
    public void checkIfUserAuthenticates() {
        //User user = new User("user", "user", );

        //System.out.println(accountController.user(hashMap));
    }



}
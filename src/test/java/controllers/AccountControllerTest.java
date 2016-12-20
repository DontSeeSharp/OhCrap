package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import domain.Account;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;


import java.security.Principal;
import java.sql.Timestamp;
import java.util.Collections;

import static org.junit.Assert.assertEquals;


@RunWith(MockitoJUnitRunner.class)
public class AccountControllerTest {

    private String tempUserName;

    @InjectMocks
    public AccountController accountController;

    @Before
    public void setUp() {
        accountController = new AccountController(new MysqlDataSource());
    }


    @Test
    public void createNewUser(){
        Account request = new Account();
        request.setUsername(new Timestamp(System.currentTimeMillis()).toString());
        tempUserName = request.getUsername();
        request.setPassword("saldfkjsadlfjasdlfkjsaldkfjasldf");
        assertEquals(Collections.singletonMap("result", "0"), accountController.createUser(request));
    }

    @Test
    public void failOnCreatingSameUser() {
        createNewUser();
        Account request = new Account();
        request.setUsername(tempUserName);
        request.setPassword("saldfkjsadlfjasdlfkjsaldkfjasldf");
        assertEquals(Collections.singletonMap("result", "-1"), accountController.createUser(request));
    }

    @Test
    public void testUserPrincipal() {
        Principal principal = new Principal() {
            @Override
            public String getName() {
                return "TEST_PRINCIPAL";
            }
        };
        assertEquals("TEST_PRINCIPAL", accountController.user(principal).getName());
    }



}
import controllers.AccountController;
import domain.Account;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;


import java.sql.Timestamp;
import java.util.Collections;

import static org.junit.Assert.assertEquals;


@RunWith(MockitoJUnitRunner.class)
public class Test1 {


    @InjectMocks
    public AccountController service;

    @Before
    public void setService() {
        service = new AccountController();
    }

    @Test
    public void getUsersWork(){
        assertEquals("DontSeeSharp", service.getUsers().get(0).toString());
    }

    @Test
    public void createNewUserAndCheckIfItIsRegistered(){
        Account request = new Account();
        request.setUsername(new Timestamp(System.currentTimeMillis()).toString());
        String username = request.getUsername();
        request.setPassword("saldfkjsadlfjasdlfkjsaldkfjasldf");
        assertEquals(Collections.singletonMap("result", "0"), service.createUser(request));

        request = new Account();
        request.setUsername(username);
        request.setPassword("saldfkjsadlfjasdlfkjsaldkfjasldf");
        assertEquals(Collections.singletonMap("result", "-1"), service.createUser(request));
    }

    @Test
    public void checkIfCreatedUserGoesToDatabase() {

    }



}
package domain;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


/**
 * Created by Taavi on 20.12.2016.
 */
public class AccountTest {

    private Account account;

    @Before
    public void setUp() {
        account = new Account();
    }

    @Test
    public void testUserName() {
        account.setUsername("UserTest");
        assertEquals("UserTest", account.getUsername());
    }
    @Test
    public void testPassword() {
        account.setPassword("pAsSw0rD");
        assertEquals("pAsSw0rD",account.getPassword());
    }
    @Test
    public void testGetId() {
        assertEquals(0, account.getId());
        account.setId(1);
        assertEquals(1, account.getId());

    }

}
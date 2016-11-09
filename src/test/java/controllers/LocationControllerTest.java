package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import com.sun.gjc.spi.jdbc30.DataSource30;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.sql.DataSource;

import static org.junit.Assert.*;

/**
 * Created by Hendrig on 09.11.2016.
 */
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = { DaoTestConfig.class })
public class LocationControllerTest {

    LocationController locationController;

    @Before
    public void setUp() throws Exception {
        MysqlDataSource mySqlDataSource = new MysqlDataSource();
        locationController = new LocationController(mySqlDataSource);
    }

    @Test
    public void getLocations() throws Exception {
        assertEquals(1,2);

        //System.out.println(locationController.getLocations());
    }

}
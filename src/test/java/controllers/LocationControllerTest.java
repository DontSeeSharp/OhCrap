package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import dto.save.SaveLocationRequest;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Taavi on 31.10.2016.
 */
public class LocationControllerTest {

    private LocationController locationController;
    private MysqlDataSource dataSource;
    //private SaveLocationRequest saveLocationRequest;

    @Before
    public void runBeforeEachTest(){
        locationController = new LocationController(dataSource);
      //  saveLocationRequest = new SaveLocationRequest();
    }
    @Test
    public void testIfLocationIsAdded(){

    }

}
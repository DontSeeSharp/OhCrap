package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import domain.Account;
import domain.Location;
import dto.save.GetNearestLocationRequest;
import dto.save.SaveLocationRequest;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * Created by Hendrig on 20.12.2016.
 */
@RunWith(MockitoJUnitRunner.class)
@WithMockUser
public class LocationControllerTest {

    @InjectMocks
    private LocationController locationController;

    @Before
    public void setUp() {
        locationController = new LocationController(new MysqlDataSource());


    }

    @Test
    public void getUniqueLocations() throws Exception {
        Location expectedLocation = new Location();
        expectedLocation.setLatitude(59.403);
        expectedLocation.setLongitude(24.6944);
        List<Location> locationList = locationController.getUniqueLocations();
        assertEquals(expectedLocation.getLatitude(), locationList.get(0).getLatitude(), 0.001);
        assertEquals(expectedLocation.getLongitude(), locationList.get(0).getLongitude(), 0.001);
    }

    @Test
    public void addToiletSuccessfully() throws Exception {
        List<GrantedAuthority> list = new ArrayList<GrantedAuthority>();
        list.add(new SimpleGrantedAuthority("ROLE_USER"));
        String uniqueUsername = new Timestamp(System.currentTimeMillis()).toString();
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(uniqueUsername, "password" ,list);
        SecurityContextHolder.getContext().setAuthentication(auth);

        SaveLocationRequest saveLocationRequest = new SaveLocationRequest();
        saveLocationRequest.setAddress("Akadeemia tee 3, 12611 Tallinn, Eesti");
        saveLocationRequest.setLat(59.396408431731025);
        saveLocationRequest.setLng(24.670130137806716);
        saveLocationRequest.setRating(4);
        saveLocationRequest.setFree("yes");
        Map result = locationController.addToilet(saveLocationRequest);
        Map expectedResult = Collections.singletonMap("result", "Location successfully added to database!");
        assertEquals(expectedResult, result);
    }

    @Test
    public void failAddingToiletWithSameUserToSameLocation() throws Exception {
        addToiletSuccessfully();

        SaveLocationRequest saveLocationRequest = new SaveLocationRequest();
        saveLocationRequest.setAddress("Akadeemia tee 3, 12611 Tallinn, Eesti");
        saveLocationRequest.setLat(59.396408431731025);
        saveLocationRequest.setLng(24.670130137806716);
        saveLocationRequest.setRating(4);
        saveLocationRequest.setFree("yes");
        Map result = locationController.addToilet(saveLocationRequest);
        Map expectedResult = Collections.singletonMap("result", "You can't enter same location twice!");
        assertEquals(expectedResult, result);
    }

    @Test
    public void getNearestLocation() throws Exception {
        GetNearestLocationRequest getNearestLocationRequest = new GetNearestLocationRequest();
        getNearestLocationRequest.setLat(59.403);
        getNearestLocationRequest.setLng(59.403);
        locationController.getNearestLocation(getNearestLocationRequest);
    }

}
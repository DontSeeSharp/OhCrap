package controllers;

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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;

import java.sql.Timestamp;
import java.util.Collections;
import java.util.List;

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
        locationController = new LocationController();
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
    @WithMockUser(username = "ram", roles={"ADMIN"})
    public void addToilet() throws Exception {

        SaveLocationRequest saveLocationRequest = new SaveLocationRequest();
        saveLocationRequest.setAddress("lalaa");
        saveLocationRequest.setLat(59.403);
        saveLocationRequest.setLng(24.6944);
        saveLocationRequest.setRating(4);
        saveLocationRequest.setFree("yes");
        locationController.addToilet(saveLocationRequest);

    }

    @Test
    public void getNearestLocation() throws Exception {
        GetNearestLocationRequest getNearestLocationRequest = new GetNearestLocationRequest();
        getNearestLocationRequest.setLat(59.403);
        getNearestLocationRequest.setLng(59.403);
        locationController.getNearestLocation(getNearestLocationRequest);
    }

}
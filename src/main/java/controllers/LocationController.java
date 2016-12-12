package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import domain.Location;
import dto.save.SaveLocationRequest;
import dto.save.getNearestLocationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.sql.DataSource;
import java.security.Principal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

/**
 * Created by Taavi on 10.10.2016.
 */
@RestController
public class LocationController {
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public LocationController(DataSource dataSource2) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser("dontsees_guest");
        dataSource.setPassword("1Forgot1t");
        dataSource.setDatabaseName("dontsees_ohcrap");
        dataSource.setServerName("ns8527.hostgator.com");
        dataSource.setPortNumber(3306);
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }



    @RequestMapping(value = "toilets")
    public List<Location> getUniqueLocations() {
        return filterUniqueLocations(getLocations());
    }


    @RequestMapping(value = "addToilet", method = RequestMethod.POST, produces = "application/json")
    public Map addToilet(@RequestBody SaveLocationRequest request) {
        String adder = getLoggedInUsername();
        boolean hasAddedThisLocation = checkIfUserHasAddedThisLocation(getLocations(), request.getAddress(), adder);
        if (hasAddedThisLocation) {
            return Collections.singletonMap("result", "You can't enter same location twice!");
        } else {
            HashMap hashMap = new HashMap();
            hashMap.put("address", request.getAddress());
            hashMap.put("lat", request.getLat());
            hashMap.put("lng", request.getLng());
            hashMap.put("free", request.getFree());
            hashMap.put("rating", request.getRating());
            hashMap.put("adder", adder);
            jdbcTemplate.update("insert into locations (address, adder, lat, lng, free, rating) " +
                    "VALUES(:address, :adder, :lat, :lng, :free, :rating)", hashMap);
            return Collections.singletonMap("result", "Location successfully added to database!");
        }
    }

    @RequestMapping(value = "getNearestLocation", method = RequestMethod.POST, produces = "application/json")
    public Map getNearestLocation(@RequestBody getNearestLocationRequest request) {
        List<Location> uniqueLocations = getUniqueLocations();
        double currentLat = request.getLat();
        double currentLng = request.getLng();
        double minDistance = 999999;
        Location closestLocation = null;
        for (Location location : uniqueLocations) {
            double markerLat = location.getLatitude();
            double markerLng = location.getLongitude();
            double theta = currentLng - markerLng;
            double dist = Math.sin(deg2rad(currentLat)) * Math.sin(deg2rad(markerLat)) + Math.cos(deg2rad(currentLat)) * Math.cos(deg2rad(markerLat)) * Math.cos(deg2rad(theta));
            dist = Math.acos(dist);
            dist = rad2deg(dist);
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            if (dist < minDistance) {
                closestLocation = location;
            }
        }
        HashMap hashMap = new HashMap();
        if (closestLocation != null) {
            System.out.println("----------------------------------------------- success");
            hashMap.put("result", "success");
            hashMap.put("lat", closestLocation.getLatitude());
            hashMap.put("lng", closestLocation.getLongitude());
        } else {
            System.out.println("----------------------------------------------- fail");
            hashMap.put("result", "fail");
        }

        return hashMap;
    }

    public List<Location> getLocations() {
        return jdbcTemplate.query("select * from locations", new LocationRowMapper());
    }

    private String getLoggedInUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName(); //get logged in username

    }

    private boolean checkIfUserHasAddedThisLocation(List<Location> locationList, String address, String username) {
        if (!locationList.isEmpty()) {
            for (Location location : locationList) {
                if (location.getAdder().equals(username) && location.getAddress().equals(address)) {
                    return true;
                }
            }
        }
        return false;
    }

    private List<Location> filterUniqueLocations(List<Location> locationList) {
        List<Location> uniqueLocations = new ArrayList<Location>();
        List<String> uniqueAddressList = new ArrayList<String>();
        List<String> addressList = new ArrayList<String>();

        for (Location location : locationList) {
            addressList.add(location.getAddress());
        }

        for (Location location : locationList) {
            if (!uniqueAddressList.contains(location.getAddress())) {
                if (Collections.frequency(addressList, location.getAddress()) >= 5) {
                    uniqueLocations.add(location);
                    uniqueAddressList.add(location.getAddress());
                }
            }
        }
        return uniqueLocations;
    }

    private static class LocationRowMapper implements RowMapper<Location> {
        public Location mapRow(ResultSet res, int rowNum) throws SQLException {
            Location location = new Location();
            location.setId(res.getInt("id"));
            location.setLatitude(res.getDouble("lat"));
            location.setLongitude(res.getDouble("lng"));
            location.setAddress(res.getString("address"));
            location.setFree(res.getString("free"));
            location.setRating(res.getInt("rating"));
            location.setAdder(res.getString("adder"));
            return location;
        }
    }

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	/*::	This function converts decimal degrees to radians						 :*/
	/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    private static double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	/*::	This function converts radians to decimal degrees						 :*/
	/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    private static double rad2deg(double rad) {
        return (rad * 180 / Math.PI);
    }
}

package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import domain.Location;
import dto.save.SaveLocationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.sql.DataSource;
import java.security.Principal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Taavi on 10.10.2016.
 */
@RestController
public class LocationController {
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public LocationController(DataSource dataSource2) {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser("admin");
        dataSource.setPassword("admin");
        dataSource.setDatabaseName("toilet_locations");
        dataSource.setServerName("localhost");
        dataSource.setPortNumber(3306);
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }


    @RequestMapping(value = "toilets")
    public List<Location> getLocations() {
        return jdbcTemplate.query("select * from locations", new LocationRowMapper());
    }

    @RequestMapping(value = "toilets2")
    public List<Location> getLocations2() {
        return jdbcTemplate.query("select * from locations", new LocationRowMapper());
    }

    @RequestMapping(value = "addToilet", method = RequestMethod.POST)
    public void addToilet(@RequestBody SaveLocationRequest request) {
        HashMap hashMap = new HashMap();
        hashMap.put("address", request.getAddress());
        hashMap.put("lat", request.getLat());
        hashMap.put("lng", request.getLng());
        jdbcTemplate.update("insert into locations (address, lat, lng) VALUES(:address, :lat, :lng)", hashMap);
    }

    private static class LocationRowMapper implements RowMapper<Location> {
        public Location mapRow(ResultSet res, int rowNum) throws SQLException {
            Location location = new Location();
            location.setId(res.getInt("id"));
            location.setLatitude(res.getDouble("lat"));
            location.setLongitude(res.getDouble("lng"));
            location.setAddress(res.getString("address"));
            return location;
        }
    }
}

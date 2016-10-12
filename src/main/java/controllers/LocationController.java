package controllers;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import domain.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by Taavi on 10.10.2016.
 */
@RestController
public class LocationController {
    private NamedParameterJdbcTemplate  jdbcTemplate;

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

    @RequestMapping(value="/",method = RequestMethod.GET)
    public ModelAndView homepage(){
        return new ModelAndView("redirect:/index.html");
    }

    @RequestMapping(value = "toilets")
    public List<Location> getLocations() {
        return jdbcTemplate.query("select * from locations", new LocationRowMapper());
    }

    private static class LocationRowMapper implements RowMapper<Location> {
        public Location mapRow(ResultSet res, int rowNum) throws SQLException {
            Location location = new Location();
            location.setId(res.getInt("id"));
            location.setLatitude(res.getDouble("lat"));
            location.setLongitude(res.getDouble("len"));
            location.setAddress(res.getString("address"));
            return location;
        }
    }
}

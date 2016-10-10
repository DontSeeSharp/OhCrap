package com.trey.addrbook.bootstrap.dataaccessobjects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.WebApplicationInitializer;
import com.trey.addrbook.bootstrap.domain.Location;
import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Taavi on 06.10.2016.
 */
public class LocationDao {
    // private static final Logger logger = LoggerFactory.getLogger(WebApplicationInitializer.class);

    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public LocationDao(DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public Location getAllBathrooms() {
        List<Location> list = jdbcTemplate.query("select * from locations", new LocationRowMapper());
        return list.get(0);
    }

    private static class LocationRowMapper implements RowMapper<Location> {
        public Location mapRow(ResultSet resultSet, int i) throws SQLException {

            Location location = new Location();
            location.setId(resultSet.getInt("id"));
            location.setName(resultSet.getString("name"));
            location.setAddress(resultSet.getString("address"));
            location.setLatitude(resultSet.getFloat("lat"));
            location.setLongitude(resultSet.getFloat("len"));

            return location;
        }
    }
}

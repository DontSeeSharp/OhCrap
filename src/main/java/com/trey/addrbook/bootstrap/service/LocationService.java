package com.trey.addrbook.bootstrap.service;

import com.trey.addrbook.bootstrap.dataaccessobjects.LocationDao;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Taavi on 10.10.2016.
 */
public class LocationService {
    private LocationDao locationDao;

    @Autowired
    public LocationService(LocationDao locationDao) {
        super();
        this.locationDao = locationDao;
    }


}


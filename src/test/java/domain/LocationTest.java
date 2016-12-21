package domain;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created by Taavi on 20.12.2016.
 */
public class LocationTest {

    private Location location;

    @Before
    public void setUp() {
        location = new Location();
    }

    @Test
    public void testLocationAddress() {
        location.setAddress("Akadeemia tee 1");
        assertEquals("Akadeemia tee 1", location.getAddress());
    }
    @Test
    public void testLocationId() {
        location.setId(1);
        assertEquals(1, location.getId());
    }
    @Test
    public void testAdder() {
        location.setAdder("User");
        assertEquals("User", location.getAdder());
    }
    @Test
    public void testRating() {
        location.setRating(4);
        assertEquals(4, location.getRating());
    }
    @Test
    public void testFree() {
        location.setFree("Yes");
        assertEquals("Yes", location.getFree());
    }
    @Test
    public void testName() {
        location.setName("TTU vets");
        assertEquals("TTU vets", location.getName());
    }


}

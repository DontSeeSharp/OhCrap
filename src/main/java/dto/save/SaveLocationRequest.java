package dto.save;

/**
 * Created by Hendrig on 23.10.2016.
 */
public class SaveLocationRequest {

    private String address;
    private double lat;
    private double lng;
    private int rating;
    private String free;


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public String getFree() {
        return free;
    }


    public void setFree(String free) {
        this.free = free;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}

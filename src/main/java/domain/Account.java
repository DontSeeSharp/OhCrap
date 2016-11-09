package domain;

/**
 * Created by Taavi on 30.10.2016.
 */
public class Account {

    private int id;
    private String username;
    private String password;

    public void setId(int id) {
        this.id = id;

    }
    public int getId() {
        return id;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

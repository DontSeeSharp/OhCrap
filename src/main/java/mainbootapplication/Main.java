package mainbootapplication;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
//import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;


@SpringBootApplication
@ComponentScan("controllers")
public class Main {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Main.class, args);
        Class<?> c = org.slf4j.spi.LocationAwareLogger.class;
        String path = c.getResource(c.getSimpleName() + ".class").getPath().replace(c.getSimpleName() + ".class", "");
        System.out.println("locationawarelogger: " + path);

        c = org.apache.commons.logging.impl.SLF4JLocationAwareLog.class;
        path = c.getResource(c.getSimpleName() + ".class").getPath().replace(c.getSimpleName() + ".class", "");
        System.out.println("SLF4JLocationAwareLog: " + path);

        c = org.slf4j.Marker.class;
        path = c.getResource(c.getSimpleName() + ".class").getPath().replace(c.getSimpleName() + ".class", "");
        System.out.println("org.slf4j.Marker: " + path);
    }


    @Configuration
    @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
    @EnableGlobalMethodSecurity(prePostEnabled = true)
    protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {


        @Override
        protected void configure(HttpSecurity http) throws Exception {
            // @formatter:off
            http
                    .httpBasic()
                    .and()
                    .authorizeRequests()
                    .antMatchers("/toilets", "/user", "/#/login", "/index.html", "/home.html", "/partials/login.html", "/lib/**", "/",
                            "/css", "/images", "/createUser", "/js","/login", "/partials/SignIn.html", "/partials/home.html").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .csrf()
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
                    //.addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
                    // .csrf().csrfTokenRepository(csrfTokenRepository())

            // @formatter:on
        }

        @Autowired
        public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
            MysqlDataSource dataSource = new MysqlDataSource();
            dataSource.setUser("dontsees_guest");
            dataSource.setPassword("1Forgot1t");
            dataSource.setDatabaseName("dontsees_ohcrap");
            dataSource.setServerName("ns8527.hostgator.com");
            dataSource.setPortNumber(3306);
            auth.jdbcAuthentication().dataSource(dataSource)
                    .usersByUsernameQuery(
                            "select username,password, enabled from users where username=?")
                    .authoritiesByUsernameQuery(
                            "select username, role from user_roles where username=?");
        }
    }

    private static CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName("X-XSRF-TOKEN");
        return repository;
    }

}

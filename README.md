ohcrap  
========  
### Instructions to get project running  
1)Export dontsees_ohcrap.sql to database  
2)Change database configuration in AccountController and LocationController  
  
3)open command prompt in project root  
4)run "npm install"  
5)run "mvn install"  
6)compile project

Project works with spring boot so just compile and run Main


## Testing  
###Works with karma for javascript test and Istanbul for coverage
1)open command prompt in project root  
2)npm install angular@1.5.9  
3)angular-mocks@1.5.9  
4)angular-route@1.5.9  
5)run "karma start"  
6)coverage is saved under "/coverage"    
   
For some reason karma doesn't work with angular 1.5.9+
  
Additionally, this project contains no XML. Spring config is fully annotation driven and the web.xml is omitted per Servlet 3.0 spec.  


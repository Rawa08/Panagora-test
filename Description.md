
This application took about 7 houers to build.

I made use of my React knowledge to structure the application and  
Started with creating components for each screen (Products-page, About-page and Individual proucts-page).

I mounted the Navigation element and Logo directly and then each component manually to test and Style.

I attached  Event listeners for the "DOMContentLoaded", "popstate", Form submission and click events where the a-tag contains data-Link attribute.

Based on the Event the  browser's session history will be changed and then calling a helperfunction (Navigate) witch decide 
witch component should be mounted based on the "location.pathname"
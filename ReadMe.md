# Atlas automation project
Automation suite, created using Protractor

## Assumptions
To run this suite locally you must previous have installed:

 - Node.js
 - NPM
 - Protractor
 
## Getting Started

* Open a terminal and run "webdriver-manager update"
* Run "webdriver-manager start"
* Once terminal informs you that Selenium is up and running
* Go to directory where is the project
    ```
    cd [route to downloaded project]
    ```
* Run the protractor.conf.js
    ```
    protractor protractor.conf.js
    ```

-----

* Structure:
    * *formal_programs:* contains the test who develop the workflow for the formal programs divided into different files
    
    * *international_programs:* contains the test who develop the workflow for the international programs divided into different files
    
    * *languages:* contains all test data, and test options. Is divided into 3 different JSONs (the only who contains for the moment is español.json)
    
    * *POM:* this project use Page Object pattern, into POM folder are all page objects from the project
    
    * *report:* is where the report is displayed after test finish to run
    
    * *resources:* auxiliary folder, contains text files to upload during tests.
        * *phases.json:* is a json who maps all test to have identify how should be run in a sequentially way
        
    * *screenshots:* folder who stores screenshots of failed test
    
    * *protractor.conf.js:* Protractor configuration file, specify the configurations about driver, reports, etc.
    
    * *ReadMe.md:* file that you are reading right now
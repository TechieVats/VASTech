## VASTech Assessment

This README would normally document whatever steps are necessary to get application up and running.


## Set up

clone the repository into Visual Studio Code using version control
- https://github.com/TechieVats/VASTech.git 

## Execution
Use Cypress Test Runner to execute the test and to generate the reports
- commands to open the test runner: node_modules/.bin/cypress open
- Once test runner is open there are three tests will be visible
    - SortByFilter.js
    - PriceFilter.js
    - RatingFilter.js
    Click on the same to start the execution

- To run through terminal/command line, please follow the below command
    - node_modules/.bin/cypress run --headed

### What is this repository for? ###
Assessment for VASTech
Write an automated end-2-end UI test suite that would fully test:
	•	the Sort by: Price High to Low feature. -> SortByFilter.js
	•	the Sort by: Price Low to High feature. -> SortByFilter.js
	•	End-2-end UI test suite that would fully test the Price Filter feature. -> PriceFilter.js
	•	End-2-end UI test suite that would fully test the Rating Filter feature.-> RatingFilter.js



## Validations performed

All the required validations as per the documentation has been performed using javascript and mocha library.


## Coding Standards

1.Reusable functions: Reusable functions has been defined in the "support" folder under "commands.js". To decrease the
complexity of the code.
2.Clean code: to make sure the code should look clean and will be easy to maintain , all the functions has been
named meaningfully to avoid unnecessary comments within the code.
3. Page Facoty design pattern has been used to handle the webelements.

## Logging

Cypress Dashboard is used to perform logging:
Cypress Dashboard link(Accessible) : https://dashboard.cypress.io/projects/vmvrb1/runs/1/overview

## Report
Moachawesome reports has been used to perform reporting.

## Configuration
cypress.config.js is provided by Cypress to declare variables globally

## Videos
All executions videos are stored under video folder for reference.

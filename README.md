# DmojTestSetter
This repo automates creating subtasks in [dmoj]([https://link-url-here.org](https://dmoj.ca)https://dmoj.ca) platform 

## What you need to know !
- It always add lines to the current lines in the tests data , so if you have some lines already you need to delete them manually
- All the tests the input file should match the name of the output file for example `file.in` and `file.out` so they get matched automatically

## How to use it:
You need to update the list called tests in `test_setter.js`, every item of the list contains a subtask. 

Each item is a list of 2 elements: 
- The first element is an array of the input file names of the subtask
- The second element is the points awarded to the subtask

Finally you need to just copy pase the whole code in the console of page of the test data in dmog and it will fill them automaticall!

Don't forget to star the project if it helped you! 

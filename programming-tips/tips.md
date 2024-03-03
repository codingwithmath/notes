# Motivation
this is a file to write some of my own thougths in my programming workflow. 

# Tips
### If a project work with monetary numbers verify:
  - it follows any pattern?
  - the values are converted to integer? (multiplied by 100)
  - if the application is in javascript, does it deal with float point number? it uses `toFixed()`?

### Race Conditions
  - How the application deal with race conditions?
  - What kinda of database the application work with?
  - What is the level of lock in the database?
  - Single operation succeeds, response fails, Consumer tries again, what happens?
  - Operation fails, response fails, Consumer tries again, what happens?
  - Operation succeeds, response succeeds, but Consumer fails after the response, what happens?

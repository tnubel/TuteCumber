var reporter = require('cucumber-junit-reporter');
 
module.exports = reporter({
  reportDir: 'build/test_results/'
});
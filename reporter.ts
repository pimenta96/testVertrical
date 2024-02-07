import { Reporter, TestCase, TestResult } from '@playwright/test/reporter'
import * as fs from 'fs'

/* class MyReporter implements Reporter {
    onBegin (config,suite) {
        console.log(`Execution of ${suite.allTests().length},tests`)
    }

    onEnd(result) {
        console.log(`Execution finished with status of ${result.status}`)
    }

    onTestBegin(test) {
        console.log(`Execution of ${test.title} started`)
    }

    onTestEnd (test,result) {
        const execTime = result.duration

        const data = {
            test: test.title,
            status: result.status,
            executionTime: execTime,
            error: result.errors,

        }

        const dataToString = JSON.stringify(data,null ,2)
        console.log(dataToString)

       fs.writeFileSync("test-result.json", dataToString)
      // fs.appendFileSync('test-result.json', dataToString + '\n');
    }

}

export default MyReporter
*/
class MyReporter implements Reporter {
    private testResults: any[] = [];
  
    onBegin(config, suite) {
      console.log(`Execution of ${suite.allTests().length} tests`);
    }
  
    onEnd(result) {
      console.log(`Execution finished with a status of ${result.status}`);
  
      const dataToString = JSON.stringify(this.testResults, null, 2);
      fs.writeFileSync('test-result.json', dataToString);
    }
  
    onTestBegin(test) {
      console.log(`Execution of ${test.title} started`);
    }
  
    onTestEnd(test, result) {
      const execTime = result.duration;
  
      const testResult = {
        test: test.title,
        status: result.status,
        executionTime: execTime,
        error: result.errors,
      };
  
      this.testResults.push(testResult);
      console.log(testResult)
    }
   
  }

  export default MyReporter;
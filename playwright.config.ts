import { PlaywrightTestConfig , TestInfo} from "@playwright/test";


interface CustomProperties {
    baseURL: string;
    userEmail: string;
}



const config: PlaywrightTestConfig<CustomProperties> = {
    timeout: 120000,
    retries: 0,
    fullyParallel: false,
    workers: 1,
    use: {
        headless: true,
        viewport:{width: 1280, height: 720},
        actionTimeout: 30000,
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        video: 'off',
        screenshot: 'on',
    },
    expect: {
        timeout: 9000,
    },
    /* Run tests in files in parallel */
   
    projects: [
        {
            name: 'test1',
            testDir: './tests/web/',
            use: {
                browserName: 'chromium',
                baseURL: 'https://the-internet.herokuapp.com/',
            },
        },

        {
            name: 'test2',
            testDir: './tests/API/test2',
            use: {
                browserName: 'chromium',
                baseURL:'https://jsonplaceholder.typicode.com/users'
            }
        }
       
    ],
    reporter: [['html', { outputFile: 'report.html' }]],
   
}
export default config


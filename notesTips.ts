/*
------------ NODE SCRIPTS -----------------------------
to set the commands (Node scripts) in package.json use below SyntaxError:
"tests:chrome:html":"playwright test login_FMW-1186.spec.ts --config=playwright.config.ts --project=Chromium --headed --reporter=html",
or use 
"tests:chrome":"playwright test login_FMW-1186.spec.ts --config=playwright.config.ts --project=Chromium ",
add any other commands by adding '--' < npm run tests:chrome  -- --headed --reporter=html etc 

-------------Helpers CUSTOM FUNCTIONS -------------------
make sure to export and import in proper manner and pass <page> object 

------------INSPECTOR -----------------------------------
await page.pause()

------------ ARTIFACTS ON FAIL -------------------------
to set video and ss on/off open playwright.config.ts, in use object change settings -recommended to set as <Retain/only -on-failure >

--------------PARALLEL TEST EXECUTION --------------------
To run in parallel put tests in Describe block to make one suite and add <.parallel> annotation


------------View PORT default sizes ----------------------
Chromium (Google Chrome): Default viewport size is 1280x720 pixels.
Firefox: Default viewport size is 1024x768 pixels.
WebKit (Safari): Default viewport size is 1280x960 pixels.
*/
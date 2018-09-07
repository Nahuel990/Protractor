let phases = require('./resources/phases.json'),
    jasmineReporters = require('jasmine-reporters'),
    fs = require('fs-extra'),
    HTMLReport = require('protractor-html-reporter');

exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites:{
        a: [phases.formal.a,phases.formal.b,phases.formal.c,phases.formal.d,phases.formal.committee,phases.formal.f,phases.formal.g,phases.formal.committee2,phases.formal.i,phases.formal.j,phases.formal.k,phases.formal.committee3,phases.formal.m,phases.formal.n, phases.formal.o,phases.formal.p,phases.formal.q,phases.formal.r,phases.formal.s,phases.formal.t],
        b: [phases.international.a,phases.international.b, phases.international.c, phases.international.d],
        c: [phases.formal.a,phases.formal.b,phases.formal.c,phases.formal.d,phases.formal.committee,phases.formal.f,phases.formal.g],
        d: [phases.formal.a,phases.formal.b]
    },
    capabilities: {
        browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--window-size=1366,768'
                ]
        }
    },
    allScriptsTimeout: 29000,

    onPrepare: function() {


        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './report',
            filePrefix: 'xmlresults'
        }));
        fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });
        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    let capsPromise = browser.getCapabilities();
                    capsPromise.then(function (caps) {
                        let browserName = caps.get('browserName');
                        browser.takeScreenshot().then(function (png) {
                            let stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },

    onComplete: function() {
        let browserName,
            browserVersion,
            capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            testConfig = {
                reportTitle: '                                 Atlas',
                outputPath: './report',
                screenshotPath: '../screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('./report/xmlresults.xml', testConfig);
        });
    }
};


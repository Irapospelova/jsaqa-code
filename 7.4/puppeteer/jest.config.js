 module.exports = {
    verbose: true,
    preset: 'jest-puppeteer',
    testMatch: ['**/*.test.js'], 
    setupFilesAfterEnv: ['./jest.setup.js']
  };
  
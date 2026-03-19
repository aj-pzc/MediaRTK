module.exports= {
    verbose: true,
    setupFilesAfterEnv: ['./setupTest.js'],
    moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/fileMock.js"
  } 

}
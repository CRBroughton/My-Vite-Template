// jest.config.js
module.exports = {
    rootDir: "src",
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/$1"
    },
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.vue$': 'vue-jest'
    }
  }
const { Script } = require("vm");

module.exports = {
  apps: [
    {
      name: 'inventory-mangement',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        ENV_VAR1: 'enviroment-variable',
      }

    }
  ]
}
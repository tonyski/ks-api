module.exports = {
  apps: [
    {
      name: 'ks-api',
      script: './src/index.ts',
      interpreter: 'node',
      interpreterArgs: '--import tsx',
    },
  ],
}

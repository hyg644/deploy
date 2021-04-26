module.exports = {
  projectName: 'jacob-deploy',
  passphrase: '',
  cluster: [],
  dev: {
    name: '开发环境',
    script: 'npm run build:dev',
    host: '',
    port: 22,
    username: 'root',
    password: '',
    distPath: 'dist',
    webDir: '',
    bakDir: '',
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true,
    privateKey: 'C:\\Users\\86728/.ssh/id_rsa'
  }
}

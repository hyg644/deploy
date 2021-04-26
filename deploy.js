module.exports = {
  projectName: 'deploy-cli-service',
  // privateKey: 'C:\\Users\\86728/.ssh/id_rsa',
  passphrase: '',
  cluster: [],
  dev: {
    name: '开发环境',
    script: '',
    host: '192.168.100.11',
    port: 22,
    username: 'root',
    password: 'gkjxhz888',
    distPath: 'dist',
    webDir: '/opt/demo/html',
    bakDir: '/opt/demo/backup',
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true,
    privateKey:'C:\\Users\\86728/.ssh/id_rsa'
  }
}

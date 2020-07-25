// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    // Yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your projecr name',
        default: this.appname // appname 为项目生成目录名称
      }
    ])
      .then(answer => {
        // answer => { name: '用户输入的内容'}
        this.answer = answer
      })
  }
  writing() {
    // Yeoman自动生成文件阶段调用此方法


    // // 通过模板方式，并且接收用户输入
    // // 模板文件路径
    // const tmpl = this.templatePath('bar.html')
    // // 输出文件路径
    // const output = this.destinationPath('bar.html')
    // // 上下文对象
    // const context = this.answer

    // this.fs.copyTpl(tmpl, output, context)

    const templates = [
      'public/favicon.ico',
      'public/index.html',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
      'yarn.lock',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js'
    ]
    templates.forEach(item => {
      const tmpl = this.templatePath(item) // 模板文件路径
      const output = this.destinationPath(item) // 输出文件路径
      const context = this.answer // 上下文对象
      this.fs.copyTpl(tmpl, output, context)
    })
  }
}
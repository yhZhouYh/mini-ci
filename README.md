# @shu-fe/mini-ci 小程序一键发布功能

## 安装
```
// registry 述信
npm i @shu-fe/mini-ci -D

```

## 项目配置

项目需要配置mini-ci-config.json文件

```
// mini-ci-config.json
[{
  "appid": "xxxx",
  "name": "测试",
  "version": "1.0.0",
  "projectPath": "./dist/build/mp-weixin",
  "privateKeyPath": "./private.xxx.key"
}]
```

```
// type: IConfig | IConfig[]
export interface IConfig {
  appid: string // 项目appid
  name?: string // 选择别名
  version?: string //默认版本号，每次自动加1
  projectPath?: string // 项目上传目录
  privateKeyPath?: string // 上传私钥路径
  description?: string // 暂时为''
}
```

## 交互命令行
```
// package.json
// "mini": "mini"

? 请选择以下小程序 (Use arrow keys)
❯ 测试
版本号为：1.0.1 (1.0.1)
...
上传成功
```

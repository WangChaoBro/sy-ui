# 快速开始

----

`SY-UI` 是基于 `Vue.js 2.0` 的前端组件库

##  安装

```bash
npm install sy-ui --save-dev
```

##  使用

#### 全局使用
```bash
import SYUI from 'syui' 

import '../node_modules/SYUI/packages/style/lib/index.css'

Vue.use(SYUI)
```

#### 单个组件使用
```bash
import { Button } from 'SYUI'

export default {
  components: {
    Button
  }
}
```

## 作者

数智源前端

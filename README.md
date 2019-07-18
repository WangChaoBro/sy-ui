# sy-ui

> A Vue.js project


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


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

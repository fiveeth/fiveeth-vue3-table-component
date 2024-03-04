import Table from "./Table/src/index.vue";

// 按需导入组件
export { Table }

const components = [Table]
const install = (App) => {
    components.forEach(component => {
        App.component(component.__name, component)
    })
}

// 全局导入所有组件
export default {
    install
}

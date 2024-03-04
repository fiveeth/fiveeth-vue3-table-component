import Table from "./src/Table/index.vue";

Table.install = (App) => {
    App.component(Table, __name, Table)
}

export default Table;
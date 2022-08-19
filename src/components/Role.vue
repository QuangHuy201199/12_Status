<template>
    <div class="inputStatus">
        <a-input v-model:value="name_Role" placeholder="name_Role" />
    </div>
    <div class="butonStatus">
        <a-button type="primary" class="editable-add-btn buttonAdd" style="margin-bottom: 8px"
            @click="handleAdd({ name_Role })">Add
        </a-button>
        <a-button type="primary" class="editable-add-btn" style="margin-bottom: 8px"
            @click="handleUpdate({ id_Role, name_Role })">UPDATE
        </a-button>
    </div>
    <p>DANH SÁCH ROLE</p>
    <a-table bordered :data-source="dataRole" :columns="columns">
        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'operation'">
                <a-button type="primary" @click="handlePut(record)">
                    SELECT</a-button>
                <a-button type="primary" @click="handleDelete(record.id_Role)">
                    DELETE</a-button>
            </template>
        </template>
    </a-table>
</template>
<script>
import { computed, defineComponent,  ref } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { getDataRole, addDataRole, updateDataRole, deleteDataRole } from '../Saga/RoleSaga'
import { useStoreRole } from '../reducers/RoleReducer'
import { useMenu } from '../stores/useMenu'
export default defineComponent({
    components: {
        CheckOutlined,
        EditOutlined,
    },

    setup() {
        getDataRole();
        useMenu().onSelectedKeys(['role'])
        const RoleReducer = useStoreRole()
        const columns = [{
            title: 'STT',
            dataIndex: 'key',
            width: '30%',
        }, {
            title: 'Tên Role',
            dataIndex: 'name_Role',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
        }
        ];
        const dataRole = computed(() => RoleReducer.listRole.map((item, key) => ({
            key: key + 1,
            id_Role: item.id_Role,
            name_Role: item.name_Role
        })))
    
        const name_Role = ref("")
        const id_Role = ref("")

        return {
            dataRole,
            columns,
            RoleReducer,
            name_Role,
            id_Role
        };
    },
    methods: {
        handleAdd(data) {
            addDataRole(data)
        },
        handlePut(data) {
            console.log(data, "hello");
            this.id_Role = data.id_Role;
            this.name_Role = data.name_Role;
        },
        handleUpdate(data) {
            updateDataRole(data)
        },
        handleDelete(id_Role) {
            deleteDataRole(id_Role)
        }
    }

});
</script>


<style lang="less">
.editable-cell {
    position: relative;

    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
        padding-right: 24px;
    }

    .editable-cell-text-wrapper {
        padding: 5px 24px 5px 5px;
    }

    .editable-cell-icon,
    .editable-cell-icon-check {
        position: absolute;
        right: 0;
        width: 20px;
        cursor: pointer;
    }

    .editable-cell-icon {
        margin-top: 4px;
        display: none;
    }

    .editable-cell-icon-check {
        line-height: 28px;
    }

    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
        color: #108ee9;
    }

    .editable-add-btn {
        margin-bottom: 8px;
    }
}

.editable-cell:hover .editable-cell-icon {
    display: inline-block;
}

.home {
    width: 100%;

}

.inputStatus {
    display: flex;
}

.butonStatus {
    display: flex;
    flex-direction: row-reverse;
    padding: 10px;
}

.buttonAdd {
    margin-left: 10px;
}

.ant-input:placeholder-shown {
    text-overflow: ellipsis;
    border-radius: 8px;
    margin-left: 10px;
}

p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;

}

.ant-layout-header {
    height: 0% !important;
}

.ant-btn-primary {
    border-radius: 50px !important;
}

.ant-table-thead>tr>th,
.ant-table-tbody>tr>td,
.ant-table tfoot>tr>th,
.ant-table tfoot>tr>td {
    text-align: center !important;
}
</style>
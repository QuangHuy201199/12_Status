<template>
  <div class="inputUser">
    <a-input class="inputNameUser" v-model:value="name_User" placeholder="name_User" />


      <a-select ref="select" v-model:value="level" style="width: 120px" @change="handleChange">
            <a-select-option v-for="(item, key) in StatusReducer.listStatus" :key="key" :value="item.level">
                {{ item.name_Status }}</a-select-option>
        </a-select>

  </div>
  <div class="butonStatus">
    <a-button type="primary" class="editable-add-btn buttonAdd" style="margin-bottom: 8px"
      @click="handleAdd({ name_User, id_Status })">Add
    </a-button>
    <a-button type="primary" class="editable-add-btn" style="margin-bottom: 8px"
      @click="handleUpdate({ id_User, name_User, id_Status })">UPDATE
    </a-button>
  </div>
  <p>DANH SÁCH USER</p>
  <a-table bordered :data-source="data" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-button type="primary" @click="handlePut(record)">
          SELECT</a-button>
        <a-button type="primary" @click="handleDelete(record.id_User)">
          DELETE</a-button>
      </template>
    </template>
  </a-table>
</template>
<script>
import { computed, defineComponent, ref} from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { getDataUser, addDataUser, updateDataUser, deleteDataUser } from '../Saga/userSaga'
import { getData } from '../Saga/StatusSaga'
import { useStore } from '../reducers/statusReducer'
import { useStoreUser } from '../reducers/userReducer'
import {useMenu} from '../stores/useMenu'
export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },

  setup() {
    getDataUser()
    getData()

    const UserReducer = useStoreUser()
    const StatusReducer = useStore()
    useMenu().onSelectedKeys(['user'])

    const columns = [{
      title: 'STT',
      dataIndex: 'key',
      width: '30%',
    }, {
      title: 'Tên user',
      dataIndex: 'name_User',
    }, {
      title: 'Level',
      dataIndex: 'level',
    }, {
      title: 'Hr_Hold',
      dataIndex: 'Chưa Có',
    }, {
      title: 'Date',
      dataIndex: 'update_At',
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
    }
    ];
    const data = computed(()=> UserReducer.listUser.map((item,key)=>({
      key : key + 1,
      id_User:item.id_User,
      name_User:item.name_User,
      level:item.level,
      update_At:item.update_At,
    })))
   
    const handleChange = value => {
      console.log(`selected ${value}`);
      id_Status.value = value
    };
   


    const name_User = ref("")
    const id_Status = ref("")
    const id_User = ref("")
    const name_Status = ref("")
    const level = ref("")


    return {
      data,
      handleChange,
      columns,
      UserReducer,
      StatusReducer,
      name_Status,
      name_User,
      id_Status,
      id_User,
      level
    };
  },
  methods: {
    handleAdd(data) {
      addDataUser(data)
    },
    handlePut(data) {
      console.log(data, "hello");
      this.id_User = data.id_User;
      this.name_User = data.name_User;
      this.id_Status = data.id_Status;
      this.level = data.level
    },
    handleUpdate(data) {
      updateDataUser(data)
    },
    handleDelete(id) {
      deleteDataUser(id)
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

.inputUser {
  display: flex;
  margin: 10px;
  justify-content: space-around;
}

.ant-input {
  width: 50% !important;
  margin-right: 10px !important;
}

.ant-select-selector {
  border-radius: 8px !important;
}

.butonStatus {
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
}

.buttonAdd {
  margin-left: 8px;
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
  margin: 3px;
}

.ant-table-thead>tr>th,
.ant-table-tbody>tr>td,
.ant-table tfoot>tr>th,
.ant-table tfoot>tr>td {
  text-align: center !important;
}
</style>
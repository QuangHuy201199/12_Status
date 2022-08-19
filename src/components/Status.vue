<template>
  <div class="inputStatus">
    <a-input v-model:value="name_Status" placeholder="name_Status" />
    <a-input v-model:value="level" placeholder="level" />
  </div>
  <div class="butonStatus">
    <a-button type="primary" class="editable-add-btn buttonAdd" style="margin-bottom: 8px"
      @click="handleAdd({ name_Status, level })">Add
    </a-button>
    <a-button type="primary" class="editable-add-btn" style="margin-bottom: 8px"
      @click="handleUpdate({ id_Status, name_Status, level })">UPDATE
    </a-button>
  </div>
  <p>DANH SÁCH TRẠNG THÁI</p>
  <a-table bordered :data-source="dataStatus" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-button type="primary" @click="handlePut(record)">
          SELECT</a-button>
      </template>
    </template>
  </a-table>
</template>
<script>
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { getData, addData, updateData } from '../Saga/StatusSaga'
import { useStore } from '../reducers/statusReducer'
import {useMenu} from '../stores/useMenu'
export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },

  setup() {
    getData();
    useMenu().onSelectedKeys(['status'])
    const statusReducer = useStore()
    const columns = [{
      title: 'STT',
      dataIndex: 'key',
      width: '30%',
    }, {
      title: 'Tên Trạng Thái',
      dataIndex: 'name_Status',
    }, {
      title: 'Level',
      dataIndex: 'level',
    }, {
      title: 'Operation',
      dataIndex: 'operation',
    }
    ];

    const dataStatus = computed(()=> statusReducer.listStatus.map((item, key)=>({
      key: key+ 1,
      id_Status: item.id_Status,
      name_Status: item.name_Status,
      level: item.level,
    })))
    const name_Status = ref("")
    const level = ref("")
    const id_Status = ref("")

    return {
      dataStatus,
      columns,
      statusReducer,
      name_Status,
      level,
      id_Status
    };
  },
  methods: {
    handleAdd(data) {
      addData(data)
    },
    handlePut(data) {
      console.log(data, "hello");
      this.id_Status = data.id_Status;
      this.name_Status = data.name_Status;
      this.level = data.level;
    },
    handleUpdate(data) {
      updateData(data)
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
<template>
  <div class="q-pa-md">
    <!-- Search Bar Only -->
    <div class="row q-mb-md">
      <q-input
        dense
        outlined
        v-model="search"
        placeholder="Search..."
        class="search-input"
      >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </div>

    <!-- User Access Table -->
    <q-table
      flat
      bordered
      :rows="filteredUsers"
      :columns="columns"
      row-key="id"
      class="user-access-table"
      :pagination="{ rowsPerPage: 25 }"
    >
      <!-- Custom Actions Column -->
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="actions-column">
          <q-btn
            class="access-btn"
            color="green"
            label="Access"
            size="sm"
            @click="editAccess(props.row)"          
          />
        </q-td>
      </template>
    </q-table>

    <!-- Access Management Modal -->
    <q-dialog v-model="accessModal.show" persistent>
  <q-card style="width: 350px">
    <q-card-section>
      <div class="text-h6">User Access</div>
      <div class="text-subtitle1 q-mt-sm">Username: <strong>{{ accessModal.selectedRow?.username || 'telecomxy3' }}</strong></div>
    </q-card-section>

    <q-card-section class="q-pt-none q-pb-none">
      <div class="access-grid">
        <div class="access-row">
          <span class="access-label">Access View:</span>  
          <q-toggle v-model="accessModal.access.view" color="green" size="lg" />
        </div>
        <div class="access-row">
          <span class="access-label">Access Add:</span>
          <q-toggle v-model="accessModal.access.add" color="green" size="lg" />
        </div>
        <div class="access-row">
          <span class="access-label">Access Edit:</span>
          <q-toggle v-model="accessModal.access.edit" color="green" size="lg" />
        </div>
        <div class="access-row">
          <span class="access-label">Access Delete:</span>  
          <q-toggle v-model="accessModal.access.delete" color="green" size="lg" />
        </div>
        <div class="access-row">
          <span class="access-label">Access Print:</span>
          <q-toggle v-model="accessModal.access.print" color="green" size="lg" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right" class="q-pa-md">
      <q-btn
        unelevated
        label="CANCEL"
        color="primary"
        @click="accessModal.show = false"
        class="q-mr-sm"
      />
      <q-btn
        unelevated
        label="SAVE"
        color="green"
        @click="saveAccess"
      />
    </q-card-actions>
  </q-card> 
</q-dialog>
</div>
</template>

<script>
export default {
  name: 'UserAccessPage',
  data() {
    return {
      search: '',
      users: [
        {
          id: 1,
          fullname: 'Mitch Navarro',
          position: 'Senior Programmer',
          username: 'Mitch'
        },
        // Add more users as needed
      ],
      columns: [
        { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
        { name: 'fullname', label: 'User Fullname', field: 'fullname', align: 'left', sortable: true },
        { name: 'position', label: 'Position', field: 'position', align: 'left', sortable: true },
        { name: 'username', label: 'Username', field: 'username', align: 'left', sortable: true },
        { name: 'actions', label: 'Actions', align: 'center', sortable: false }
      ],
      accessModal: {
        show: false,
        selectedRow: null,
        access: {
          view: false,
          edit: false,
          add: false,
          delete: false,
          print: false
        }
      }
    }
  },
  computed: {
    filteredUsers() {
      const searchTerm = this.search.toLowerCase()
      return this.users.filter(user => 
        user.fullname.toLowerCase().includes(searchTerm) ||
        user.position.toLowerCase().includes(searchTerm) ||
        user.username.toLowerCase().includes(searchTerm)
      )
    }
  },
  methods: {
    editAccess(row) {
      this.accessModal.selectedRow = row;
      // Load existing access permissions if available
      if (row.access) {
        this.accessModal.access = { ...row.access };
      }
      this.accessModal.show = true;
    },
    saveAccess() {
      // Save logic here
      console.log('Saving access for:', this.accessModal.selectedRow.username);
      console.log('Access settings:', this.accessModal.access);
      
      // Close modal
      this.accessModal.show = false;
      
      // Show notification
      this.$q.notify({
        type: 'positive',
        message: 'Access permissions saved successfully'
      });
    }
  }
}
</script>

<style scoped>
.search-input {
  width: 250px;
  margin-bottom: 15px;
}

.user-access-table {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.user-access-table thead th) {
  background-color: #f5f5f5;
  font-weight: bold;
  color: #333;
}

.actions-column {
  white-space: nowrap;
}

.access-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.access-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.access-btn {
  text-transform: capitalize;
  padding: 4px 16px;
  border-radius: 4px;
  font-weight: 500;
  color: white;
}

.username-box {
  font-family: monospace;
  background-color: #f5f5f5;
  padding: 2px 8px;
  border-radius: 4px;
  color: #333;
}

.access-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.access-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.access-label {
  font-size: 1rem;
  color: #333;
}

.action-btn {
  min-width: 80px;
  padding: 6px 12px;
}

/* Larger toggle switches */
:deep(.q-toggle__track) {
  width: 40px;
  height: 23px;
}

:deep(.q-toggle__thumb) {
  width: 25px;
  height: 25px;
}

</style>
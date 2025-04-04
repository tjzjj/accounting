<template>
  <div class="q-pa-md">
    <!-- Search Bar -->
    <q-input dense outlined v-model="search" placeholder="Search..." class="search-bar">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <!-- User Table -->
    <q-table
      flat
      bordered
      :rows="filteredUsers"
      :columns="columns"
      row-key="username"
      class="user-table"
    >
      <!-- Custom Status Column -->
      <template v-slot:body-cell-status="props">
        <q-td :props="props" class="text-center">
          <q-badge color="green" label="Accepted" />
        </q-td>
      </template>

      <!-- Custom Actions Column -->
      <template v-slot:body-cell-action="props">
        <q-td :props="props" class="action-buttons">
          <q-btn dense round flat color="blue-8" icon="visibility" size="sm" />
          <q-btn 
            dense 
            round 
            flat 
            color="red" 
            icon="delete" 
            size="sm" 
            @click="openDeleteModal(props.row)" 
          />
        </q-td>
      </template>
    </q-table>

    <!-- Delete Confirmation Modal -->
    <q-dialog v-model="deleteModal.show" persistent>
      <q-card style="min-width: 350px">
        <q-card-section class="column items-center">
          <div class="text-h6 q-mb-md">Are you sure you want to delete</div>
          <div class="text-h6 text-weight-bold q-mb-md">{{ deleteModal.selectedRow?.username}}?</div>
        </q-card-section>

        <q-card-actions align="center" class="q-pb-md">
          <q-btn
            unelevated
            label="Yes"
            color="red"
            @click="confirmDelete"
            class="q-mx-sm"
            style="min-width: 80px;"
          />
          <q-btn
            unelevated
            label="Cancel"
            color="grey-8"
            v-close-popup
            class="q-mx-sm"
            style="min-width: 80px;"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserControlAcceptedPage',
  data() {
    return {
      search: "",
      users: [
        { username: "elecomvp34", email: "elkencp@gmail.com", status: "Accepted", action: "View" },
        { username: "elecomvp33", email: "elkencp@gmail.com", status: "Accepted", action: "Edit" },
        { username: "elecomvp32", email: "elkencp@gmail.com", status: "Accepted", action: "Edit" }
      ],
      columns: [
        { name: "username", label: "Username", field: "username", align: "left", sortable: true },
        { name: "email", label: "Email", field: "email", align: "left", sortable: true },
        { name: "status", label: "Status", field: "status", align: "center" },
        { name: "action", label: "Actions", field: "action", align: "center" }
      ],
      deleteModal: {
        show: false,
        selectedRow: null
      }
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.username.toLowerCase().includes(this.search.toLowerCase()) ||
        user.email.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    openDeleteModal(row) {
      this.deleteModal.selectedRow = row;
      this.deleteModal.show = true;
    },
    confirmDelete() {
      // Remove the user from the array
      this.users = this.users.filter(user => user.username !== this.deleteModal.selectedRow.username);
      
      // Close the modal
      this.deleteModal.show = false;
      this.deleteModal.selectedRow = null;
      
      // Show success notification
      this.$q.notify({
        type: 'positive',
        message: 'User deleted successfully'
      });
    }
  }
};
</script>

<style scoped>
/* (Your existing styles remain unchanged) */
.search-bar {
  width: 250px;
  margin-bottom: 15px;
}

.user-table {
  border-radius: 10px;
  overflow: hidden;
}

:deep(.q-table thead th) {
  background: linear-gradient(to bottom, #a3c19f, #e6f5d6);
  color: black;
  font-weight: bold;
}

:deep(.q-table tbody td) {
  padding: 8px 16px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 8px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .search-bar {
    width: 100%;
  }
  
  .action-buttons {
    flex-wrap: wrap;
  }
}
</style>
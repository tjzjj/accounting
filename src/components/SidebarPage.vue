<template>
  <q-drawer
    show-if-above
    bordered
    :width="200"
    class="sidebar bg-green"
  >
    <q-list>
      <!-- Logo -->
      <div class="logo-container">
        <q-img src="/icons/Tagum.png" class="logo"/>
        <div class="text-logo">
               Electronic Registry of Appropriation and Commitment (ERAC)
          </div>
          </div>
          <br>
      <!-- Menu Items -->
      <q-item clickable v-ripple to="/app/dashboard" exact active-class="active-menu">
        <q-item-section avatar>
          <q-icon name="bar_chart" />
        </q-item-section>
        <q-item-section>Dashboard</q-item-section>
      </q-item>

      <q-expansion-item
        expand-separator
        icon="supervisor_account"
        label="Users Control"
        :default-opened="$route.path.includes('/app/users/pending')"
        header-class="text-bold"
      >
        <q-list class="q-pl-lg">
          <q-item clickable v-ripple to="/app/users/pending" active-class="active-submenu">
            <q-item-section avatar>
              <q-icon name="pending" size="xs" />
            </q-item-section>
            <q-item-section>Pending</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/app/users/accepted" active-class="active-submenu">
            <q-item-section avatar>
              <q-icon name="check_circle" size="xs" />
            </q-item-section>
            <q-item-section>Accepted</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-item clickable v-ripple to="/app/access" exact active-class="active-menu">
        <q-item-section avatar>
          <q-icon name="vpn_key" />
        </q-item-section>
        <q-item-section>User Access</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/app/logs" exact active-class="active-menu">
        <q-item-section avatar>
          <q-icon name="article" />
        </q-item-section>
        <q-item-section>Logs</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: 'SideBarPage'
}
</script>

<style scoped>
.logo {
  width: 130px;
  display: block;    
  margin: 0 auto; 
  margin-top: 30px;
    
}
.text-logo {  
  font-size: 13px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin-top: 0px;

}

.q-item {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.q-item:hover {
  background-color: rgba(163, 193, 159, 0.5);
}

.active-menu {
  background-color: #066406!important;
  color: #f1f1f1 !important;
  font-weight: bold;
  border-radius: 5px;
}

.active-submenu {
  background-color: #066406 !important;
  color: #f1f1f1 !important;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 10px;
}

:deep(.sidebar) {
  background: linear-gradient(to bottom, #e9f3e6, #c8e6c9, #58B265) !important;
}

/* This will make the Users Control text bold */
:deep(.text-bold) {
  font-weight: bold !important;
}
</style>
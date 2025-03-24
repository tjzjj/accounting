<template>
  <q-layout view="hHh Lpr lff">
    <!-- Header -->
    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="/icons/Ph_seal_Tagum.png" style="height: 40px; width: auto; margin-right: 10px;" />
          City Government of Tagum - Budget Monitoring
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer show-if-above class="sidebar">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-img src="/icons/Ph_seal_Tagum.png" class="logo" />
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="group" /></q-item-section>
          <q-item-section>Users Control</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="key" /></q-item-section>
          <q-item-section>User Access</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="list" /></q-item-section>
          <q-item-section>Logs</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container>
      <q-page class="q-pa-lg">
        <!-- Top Navbar -->
        <div class="row justify-between items-center q-mb-md">
          <q-btn-dropdown color="green" :label="selectedBarangay" class="q-mr-md">
            <q-list>
              <q-item v-for="barangay in barangays" :key="barangay" clickable v-close-popup @click="updateGraph(barangay)">
                <q-item-section>{{ barangay }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn color="red" icon="logout" label="Log Out" @click="logout" />
        </div>

        <!-- Summary Cards -->
        <div class="row q-col-gutter-md">
          <q-card class="col-4 summary-card">
            <q-card-section>
              <q-icon name="account_balance" class="summary-icon" />
              <div class="summary-text">Total Expenses</div>
              <div class="summary-value">{{ selectedData.expenses }}</div>
            </q-card-section>
          </q-card>
          <q-card class="col-4 summary-card">
            <q-card-section>
              <q-icon name="payment" class="summary-icon" />
              <div class="summary-text">Total Budget</div>
              <div class="summary-value">{{ selectedData.budget }}</div>
            </q-card-section>
          </q-card>
          <q-card class="col-4 summary-card">
            <q-card-section>
              <q-icon name="balance" class="summary-icon" />
              <div class="summary-text">Total Balance</div>
              <div class="summary-value">{{ selectedData.balance }}</div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Charts -->
        <div class="row q-mt-md q-col-gutter-md">
          <q-card class="col-6 chart-card">
            <q-card-section>
              <canvas ref="pieChart"></canvas>
            </q-card-section>
          </q-card>
          <q-card class="col-6 chart-card">
            <q-card-section>
              <canvas ref="barChart"></canvas>
            </q-card-section>
          </q-card>
        </div>

        <!-- Barangay Summary Table -->
        <q-card class="q-mt-md">
          <q-card-section>
            <div class="text-h6">Barangay Summary</div>
            <q-table
              flat
              bordered
              :rows="barangaySummary"
              :columns="summaryColumns"
              row-key="barangay"
              hide-bottom
            />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  data() {
    return {
      barangays: ["Apokon", "Magugpo", "San Isidro"],
      selectedBarangay: "Apokon",
      data: {
        Apokon: { expenses: "39,000,000,000.00", budget: "39,000,000,000.00", balance: "39,000,000,000.00" },
        Magugpo: { expenses: "29,000,000,000.00", budget: "40,000,000,000.00", balance: "11,000,000,000.00" },
        SanIsidro: { expenses: "20,000,000,000.00", budget: "35,000,000,000.00", balance: "15,000,000,000.00" },
      },
      selectedData: {},
      pieChartInstance: null,
      barChartInstance: null,

      // Barangay Summary Table Data
      summaryColumns: [
        { name: "barangay", label: "Barangay", align: "left", field: "barangay" },
        { name: "appropriation", label: "Appropriation", align: "right", field: "appropriation" },
        { name: "balance", label: "Balance", align: "right", field: "balance" }
      ],
      barangaySummary: [
        { barangay: "Apokon", appropriation: "28,000.00", balance: "28,000.00" }
      ]
    };
  },
  mounted() {
    this.updateGraph(this.selectedBarangay);
  },
  methods: {
    updateGraph(barangay) {
      this.selectedBarangay = barangay;
      this.selectedData = this.data[barangay.replace(" ", "")] || this.data["Apokon"];
      this.renderCharts();
    },
    renderCharts() {
      if (this.pieChartInstance) this.pieChartInstance.destroy();
      if (this.barChartInstance) this.barChartInstance.destroy();

      const pieCanvas = this.$refs.pieChart;
      const barCanvas = this.$refs.barChart;

      this.pieChartInstance = new Chart(pieCanvas, {
        type: "doughnut",
        data: {
          labels: ["Salaries", "Infrastructure", "Health", "Others"],
          datasets: [{ data: [30, 20, 25, 25], backgroundColor: ["red", "blue", "yellow", "green"] } ],
        },
      });

      this.barChartInstance = new Chart(barCanvas, {
        type: "bar",
        data: {
          labels: ["Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [{ label: "Budget Usage", data: [25, 35, 45, 30, 28], backgroundColor: "rgba(54, 162, 235, 0.5)" }],
        },
      });
    },
    logout() {
      alert("Logging out...");
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f5f5f5;
}
.logo {
  width: 60px;
  height: auto;
}
.summary-card,
.chart-card {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}
.summary-icon {
  font-size: 30px;
  color: green;
}
.summary-text {
  font-size: 16px;
  font-weight: bold;
}
.summary-value {
  font-size: 18px;
  color: #333;
}
</style>
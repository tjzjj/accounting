<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Page Container -->
    <q-page-container>
      <q-page class="q-pa-lg">
        <!-- Summary Cards -->
        <div class="row q-col-gutter-md q-mb-md">
          <q-card class="col-4 summary-card">
            <div class="card-top-strip"></div>
            <q-card-section>
              <q-icon name="account_balance" class="summary-icon" />
              <div class="summary-text">Total Budget</div>
              <div class="summary-value">{{ selectedData.expenses }}</div>
            </q-card-section>
          </q-card>
          <q-card class="col-4 summary-card ">
            <div class="card-top-strip"></div>
            <q-card-section>
              <q-icon name="payment" class="summary-icon" />
              <div class="summary-text">Total Expenses</div>
              <div class="summary-value">{{ selectedData.budget }}</div>
            </q-card-section>
          </q-card>
          <q-card class="col-4 summary-card">
            <div class="card-top-strip"></div>
            <q-card-section>
              <q-icon name="balance" class="summary-icon" />
              <div class="summary-text">Total Balance</div>
              <div class="summary-value">{{ selectedData.balance }}</div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Barangay Summary Table -->
        <q-card>
          <q-card-section>
            <div class="text-h6">Barangay Summary</div>
            <q-table
              flat
              bordered
              :rows="barangaySummary"
              :columns="summaryColumns"
              row-key="barangay"
              :pagination="{ rowsPerPage: 0 }"
              class="my-sticky-header-table"
            >
            </q-table>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      selectedData: {
        expenses: "39,000,000,000.00", 
        budget: "39,000,000,000.00", 
        balance: "39,000,000,000.00"
      },
      
      summaryColumns: [
        { name: "barangay", label: "Barangay", align: "left", field: "barangay" },
        { name: "budget", label: "Total Budget", align: "left", field: "appropriation" },  
        { name: "appropriation", label: "Total Expenses", align: "right", field: "appropriation" },
        { name: "balance", label: "Total Balance", align: "right", field: "balance" }
      ],
      barangaySummary: [
        { barangay: "Apokon", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Bincungan", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Busaon", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Canocotan", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Cuambogan", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "La Filipina", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Liboganon", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Madsum", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Magugpo Pobledon", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Magugpo East", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Magugpo North", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Magugpo Poblacion", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Magugpo South", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Magugpo West", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Mankilam", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "New Balamban", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Nueva Fuerza", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Pagsabangan", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Pandapan", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "San Agustin", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "San Isidro", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "San Miguel (Camp 4)", appropriation: "28,000.00", balance: "28,000.00" },
        { barangay: "Visayan Village", appropriation: "28,000.00", balance: "28,000.00" }
      
        
      ]
    };
  }
};
</script>

<style scoped>
.summary-card {
  width: 320px; 
  height: 130px; 
  background-color: #fffffff8; 
  border-radius: 15px; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; 
  margin:12px;

  }

  .card-top-strip {
  height: 8px;
  width: 100%;
  background-color: #2e7d32; 
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; 
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

.my-sticky-header-table {
  max-height: 500px;
}


.my-sticky-header-table thead tr:first-child th {
  top: 0;
}

.my-sticky-header-table.q-table--loading thead tr:last-child th {
  top: 48px;
}
</style>

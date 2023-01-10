<script setup>
import { ref, reactive, onMounted, computed, toRefs } from 'vue'

// props
const props = defineProps(['transactionsList'])
const { transactionsList } = toRefs(props)

// methods

// LC hooks
</script>
<template>
  <div class="h-screen">
    <div class="bg-gray-200 p-5">
      <div class="bg-white p-6 rounded-lg shadow-lg mt-4">
        <!-- <pre>{{ transactionsList }}</pre> -->
        <table class="table-auto">
          <thead>
            <tr>
              <th>
                <label class="block">
                  <input class="mr-2 leading-tight" type="checkbox" />
                </label>
              </th>
              <th>Stock#</th>
              <th>Agent</th>
              <th>Chassis #</th>
              <th>Year</th>
              <th>Color</th>
              <th>CC</th>
              <th>FOB Price</th>
              <th>Freight</th>
              <th>Total Sale</th>
              <th>Paid Amount</th>
              <th>Remaining Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, idx) in transactionsList" :key="idx">
              <td>
                <label class="block">
                  <input class="mr-2 leading-tight" type="checkbox" />
                </label>
              </td>
              <td>#748409</td>
              <td>{{ transaction.agent }}</td>
              <td>{{ transaction.vehicle?.chassis_no }}</td>
              <td>
                {{ new Date(transaction?.vehicle.make_at).getFullYear() }}
              </td>
              <td>Yellow</td>
              <td>{{ transaction.vehicle.displacement }}</td>
              <td>{{ transaction.vehicle.fob_price }}</td>
              <td>85,999</td>
              <td>19,999</td>
              <td>{{ transaction?.paidAmount || 0 }}</td>
              <td>{{ transaction?.status?.balanceAmount || 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>

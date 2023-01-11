<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import httpResource from '@/http/httpResource'
import camelCase from 'camelcase'
import StockCard from '../../components/portal/StockCard.vue'
import FinancialInformationTransactions from '../../components/portal/FinancialInformationTransactions.vue'

// data

const selections = ref([
  {
    id: 1,
    name: 'My Stock',
    imagePath: '/sidebar/fin_repo.svg',
    content: '',
    selected: true,
  },
  {
    id: 2,
    name: 'Transactions',
    imagePath: '/sidebar/fi.svg',
    content: '',
    selected: false,
  },
  {
    id: 3,
    name: 'Ledger',
    imagePath: '/sidebar/send_inq.svg',
    content: 'Total Balance : $ 738,373.00',
    selected: false,
  },
  {
    id: 4,
    name: 'Inquiry',
    imagePath: '/sidebar/make_inv.svg',
    content: '',
    selected: false,
  },
])
const stockList = ref([])
const transactionList = ref([])
const ledgerList = ref([])

// computed
const selectedSelection = computed(() => {
  const selected = selections.value.find((s) => s.selected)
  if (selected) return selected
  return selections.value[0]
})
const selectionComputed = computed(() => {
  const myStockCount = stockList.value.length
  const transactionCount = transactionList.value.length
  const ledgerCount = ledgerList.value.length

  const selectionArray = selections.value
  selectionArray[0].content = `Total Units : ${myStockCount}`
  selectionArray[1].content = `Total Transactions : ${transactionCount}`

  return selectionArray
})

// methods
const changeSelection = async (selection) => {
  selections.value.forEach((s) => {
    s.selected = s.id === selection.id
  })

  if (selection.id === 1) {
    await getStockList()
  } else if (selection.id === 2) {
    await getTransactionList()
  } else if (selection.id === 3) {
    await getLedgerList()
  }
}

function camelCaseKeys(object) {
  return Object.entries(object).reduce((carry, [key, value]) => {
    carry[camelCase(key)] = value
    return carry
  }, {})
}

const getStockList = async () => {
  try {
    const {
      data: { data },
      status,
    } = await httpResource.get('/api/stock')
    if (status === 200) {
      stockList.value = data.map((obj) => {
        return camelCaseKeys(obj)
      })
    }
    console.log(stockList.value)
  } catch (error) {
    console.error(error)
  }
}

const getTransactionList = async () => {
  try {
    const {
      data: { data },
      status,
    } = await httpResource.get('/api/transaction')
    if (status === 200) {
      transactionList.value = data.map((obj) => {
        return camelCaseKeys(obj)
      })
    }
    console.log(transactionList.value)
  } catch (error) {
    console.error(error)
  }
}

const getLedgerList = async () => {
  try {
    const {
      data: { data },
      status,
    } = await httpResource.get('/api/ledger')
    if (status === 200) {
      ledgerList.value = data.map((obj) => {
        return camelCaseKeys(obj)
      })
    }
    console.log(ledgerList.value)
  } catch (error) {
    console.error(error)
  }
}

// LC hooks
onMounted(async () => {
  await getStockList()
  await getTransactionList()
  await getLedgerList()
})
</script>

<template>
  <div class="financial_information_home">
    <div class="h-screen">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="grid grid-cols-4 gap-4">
          <div
            class="bg-blue-800 p-6 rounded-lg shadow-lg cursor-pointer"
            @click="changeSelection(selection)"
            v-for="(selection, idx) in selectionComputed"
            :key="idx"
          >
            <div class="flex justify-items-center content-center">
              <div class="shape border-2 border-white mx-2">
                <img
                  :src="selection.imagePath"
                  :alt="`image-${selection.name}`"
                />
              </div>
              <div>
                <h2 class="text-xl my-auto text-white">{{ selection.name }}</h2>
                <p class="text-sm text-white">{{ selection.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="selection-data mt-4">
          <div class="flex">
            <h2 class="title text-xl text-blue-800 mb-2">
              {{ selectedSelection.name }}
            </h2>
            <div class="border rounded-full overflow-hidden flex ml-auto">
              <input
                type="text"
                class="px-4 py-2"
                placeholder="Search Vehical..."
              />
              <button
                class="flex items-center justify-center px-4 border-l bg-blue-800"
              >
                <svg
                  class="h-4 w-4 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-2">
            <div v-if="selectedSelection.id === 1">
              <StockCard
                v-for="(stock, idx) in stockList"
                :key="idx"
                class="mb-1"
                :stock="stock"
              >
              </StockCard>
            </div>
            <div v-else-if="selectedSelection.id === 2">
              <FinancialInformationTransactions
                :transactionsList="transactionList"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

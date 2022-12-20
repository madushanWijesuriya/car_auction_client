<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from '@mdi/js'
import * as chartConfig from '@/components/admin/Charts/chart.config.js'
import LineChart from '@/components/admin/Charts/LineChart.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import CardBoxWidget from '@/components/admin/CardBoxWidget.vue'
import CardBox from '@/components/admin/CardBox.vue'
import TableSampleClients from '@/components/admin/TableSampleClients.vue'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import CardBoxTransaction from '@/components/admin/CardBoxTransaction.vue'
import CardBoxClient from '@/components/admin/CardBoxClient.vue'
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionBannerStarOnGitHub from '@/components/admin/SectionBannerStarOnGitHub.vue'
import { useStyleStore } from '@/stores/style.js'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const styleStore = useStyleStore()

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  console.log('ssssss')
  router.push({
    name: 'add-car',
  })
  fillChartData()
})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 4))

const transactionBarItems = computed(() => mainStore.history)

onBeforeMount(() => {
  styleStore.setStyle('white')
})
</script>

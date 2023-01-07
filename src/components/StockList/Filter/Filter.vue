<script setup>
import { toRefs, ref, reactive, onMounted, nextTick } from 'vue'
import { isEmpty } from 'lodash-es'
const props = defineProps([
  'makers',
  'models',
  'drives',
  'resultCount',
  'filters',
])
const { makers, models, drives } = toRefs(props)
const emit = defineEmits(['maker-changed', 'apply-filters', 'reset-filters'])
const valueChanged = (e) => {
  emit('maker-changed', e)
}
const conditions = ref([
  {
    label: 'Brand new',
    id: 1,
  },
  {
    label: 'Used',
    id: 2,
  },
])
const make_at = ref(0)

const conditionModel = ref()
const mileageModel = ref([1, 2])
const initialState = {
  maker: '',
  model: '',
  region: '',
  year: [],
  engine: [],
  lotNo: '',
  auctions: '',
  Chassis: '',
  date1: '',
  date2: '',
  delivery: false,
  make_at: [],
  resource: '',
  desc: '',
  isUsed: '',
}
let form = reactive({ ...initialState })
let formOne = reactive({ ...initialState })
function onSubmit() {
  emit('apply-filters', form)
}
function onReset() {
  Object.assign(form, initialState)
  emit('reset-filters')
}

onMounted(async () => {
  await nextTick()
  if (!isEmpty(props.filters)) {
    form.maker =
      props.filters?.brands && Array.isArray(props.filters?.brands)
        ? props.filters?.brands.map(Number)
        : props.filters?.brands && !Array.isArray(props.filters?.brands)
        ? [Number(props.filters?.brands)]
        : ''
    form.model =
      props.filters?.models && Array.isArray(props.filters?.models)
        ? props.filters?.models.map(Number)
        : props.filters?.models && !Array.isArray(props.filters?.models)
        ? [Number(props.filters?.models)]
        : ''
    if (props.filters?.drive_type_id) {
      form.drive = Number(props.filters?.drive_type_id)
    }
    if (props.filters?.condition_id) {
      conditionModel.value = props.filters?.condition_id
    }
    onSubmit()
  }
})
</script>

<template>
  <div
    class="hidden xl:flex w-full lg:w-[30%] xl:w-[20%] h-fit text-blackborder border-[#E7E7E7] pt-[60px]"
  >
    <div class="filter-box">
      <div class="filter-heading flex flex-row items-center">
        <div class="heading basis-1/3">
          <h2 class="text-[20px] font-semibold text-black">Filters</h2>
        </div>
        <div class="filter-result basis-2/3">
          <h2 class="text-sm font-semibold text-end text-black">
            Show Results <span class="primary-blue">{{ resultCount }}</span>
          </h2>
        </div>
      </div>
      <div class="filter-form mt-5">
        <el-form label-position="top" label-width="100%" style="width: 100%">
          <el-form-item label="Brand Name">
            <el-select
              v-model="form.maker"
              multiple
              style="width: 100%"
              placeholder="Any"
              @change="valueChanged"
            >
              <el-option
                v-for="maker in makers"
                :key="maker.id"
                :label="maker.label"
                :value="maker.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Model">
            <el-select
              v-model="form.model"
              multiple
              style="width: 100%"
              placeholder="Any"
            >
              <el-option
                v-for="model in models"
                :key="model.id"
                :label="model.label"
                :value="model.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Chassis">
            <el-select
              v-model="form.Chassis"
              placeholder="Any"
              style="width: 100%"
            >
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Condition">
            <el-select
              v-model="form.isUsed"
              placeholder="Any"
              style="width: 100%"
            >
              <el-option
                v-for="condition in conditions"
                :key="condition.id"
                :label="condition.label"
                :value="condition.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <div>
            <el-form-item label="Year From - To"> </el-form-item>
            <div class="slider-demo-block">
              <el-slider max="2023" range v-model="make_at" />
            </div>
          </div>

          <el-form-item label="Drive">
            <el-select
              v-model="form.drive"
              placeholder="Select Drive"
              style="width: 100%"
            >
              <el-option
                v-for="drive in drives"
                :key="drive.id"
                :label="drive.label"
                :value="drive.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Gearbox">
            <el-select
              v-model="make_at"
              placeholder="Select Gearbox"
              style="width: 100%"
            >
              <el-option
                v-for="item in []"
                :key="item.make_at"
                :label="item.label"
                :value="item.make_at"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Lot Number">
            <el-select
              v-model="form.lotNo"
              placeholder="Select Lot Number"
              style="width: 100%"
            >
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Auctions">
            <el-select
              v-model="form.auctions"
              placeholder="Select Auctions"
              style="width: 100%"
            >
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Select Dates">
            <el-radio-group v-model="form.resource">
              <el-radio style="width: 100%" :label="1">Monday</el-radio>
              <el-radio style="width: 100%" :label="2">Tuesday</el-radio>
              <el-radio style="width: 100%" :label="3">Wednesday</el-radio>
              <el-radio style="width: 100%" :label="4">Thursday</el-radio>
              <el-radio style="width: 100%" :label="5">Friday</el-radio>
              <el-radio style="width: 100%" :label="6">Saturday</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Shipping Country">
            <el-select placeholder="Select Country" style="width: 100%">
              <el-option label="Sri Lanka" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Fort">
            <el-select placeholder="Select Fort" style="width: 100%">
              <el-option label="Hambantota" value="shanghai"></el-option>
            </el-select>
          </el-form-item>

          <!-- end of form -->
        </el-form>
        <div class="w-full mt-2 mb-2">
          <button class="btn-search text-xl" @click="onSubmit">Search</button>
        </div>
        <div class="w-full mt-2 mb-2">
          <button class="btn-reset text-xl" @click="onReset">Reset</button>
        </div>
        <div class="news-letter">
          <div class="head mb-2">
            <h2 class="text-xl">News Letter</h2>
          </div>
          <div class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            rhoncus sapien, sed nec aenean at molestie vitae dignissim.
          </div>
          <div class="subscribe mt-4">
            <button class="btn-subscribe">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/stock-list/filter.scss';
</style>

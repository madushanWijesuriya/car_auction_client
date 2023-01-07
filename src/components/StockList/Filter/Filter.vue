<script setup>
import { toRefs, ref, reactive, onMounted, nextTick } from 'vue'
import { isEmpty } from 'lodash-es'
import Slider from '@vueform/slider'

const props = defineProps([
  'makers',
  'models',
  'drives',
  'resultCount',
  'filters',
  'engines',
  'chassis',
  'countries',
  'forts',
  'gears',
  'lot_numbers',
  'countries',
])
const { makers, models, drives } = toRefs(props)
const emit = defineEmits([
  'maker-changed',
  'country-changed',
  'apply-filters',
  'reset-filters',
])
const valueChanged = (e) => {
  emit('maker-changed', e)
}
const countryChanged = (e) => {
  emit('country-changed', e)
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

const conditionModel = ref()
const initialState = {
  maker: '',
  model: '',
  Chassis: '',
  isUsed: '',
  make_at: [1900, 2023],
  mileage: [0, 1000000000],
  drive: '',
  // region: '',
  engine: [100, 1000],
  gear: '',
  lot: '',
  // auctions: '',
  // date1: '',
  // date2: '',
  // delivery: false,
  // resource: '',
  // desc: '',
  shipping_country: '',
  fort_id: '',
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
              filterable
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
              filterable
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
              filterable
            >
              <el-option
                v-for="chass in chassis"
                :key="chass.id"
                :label="chass.label"
                :value="chass.label"
              ></el-option>
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
              <Slider
                :min="1900"
                :max="2023"
                v-model="form.make_at"
                class="slider-blue"
                showTooltip="focus"
              />
            </div>
          </div>
          <div class="mt-5">
            <el-form-item label="Mileage From - To"> </el-form-item>
            <div class="slider-demo-block">
              <Slider
                :min="0"
                :max="1000000000"
                v-model="form.mileage"
                class="slider-blue"
                showTooltip="focus"
              />
            </div>
          </div>
          <div class="mt-5 mb-5">
            <el-form-item label="Engine From - To"> </el-form-item>
            <div class="slider-demo-block">
              <Slider
                :min="100"
                :max="1000"
                v-model="form.engine"
                class="slider-blue"
                showTooltip="focus"
              />
            </div>
          </div>
          <el-form-item label="Drive">
            <el-select
              v-model="form.drive"
              placeholder="Select Drive"
              style="width: 100%"
              filterable
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
              filterable
              v-model="gear"
              placeholder="Select Gearbox"
              style="width: 100%"
            >
              <el-option
                v-for="gear in gears"
                :key="gear.id"
                :label="gear.label"
                :value="gear.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Lot Number">
            <el-select
              v-model="form.lot"
              placeholder="Select Lot Number"
              style="width: 100%"
              filterable
            >
              <el-option
                v-for="lot in lot_numbers"
                :key="lot.id"
                :label="lot.label"
                :value="lot.label"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Shipping Country">
            <el-select
              v-model="form.shipping_country"
              multiple
              style="width: 100%"
              placeholder="Any"
              @change="countryChanged"
              filterable
            >
              <el-option
                v-for="country in countries"
                :key="country.id"
                :label="country.label"
                :value="country.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Fort">
            <el-select
              v-model="form.fort_id"
              multiple
              style="width: 100%"
              placeholder="Any"
              filterable
            >
              <el-option
                v-for="fort in forts"
                :key="fort.id"
                :label="fort.label"
                :value="fort.id"
              ></el-option>
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
<style src="@vueform/slider/themes/default.css"></style>

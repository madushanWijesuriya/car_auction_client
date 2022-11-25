<script setup></script>

<template>
  <div class="filter-box">
    <div class="container mx-auto p-5 px-5">

      <el-form ref="form" :model="form" label-position="top" label-width="100%" style="width: 100%;">
        <div class="grid grid-rows-6 grid-flow-col gap-3 md:grid-rows-2 md:gap-2">
          <div class="group">
            <el-form-item label="Search using Keyword">
              <el-input placeholder="Search Car / Brand / Model / Type" v-model="input" style="width: 100%"></el-input>
            </el-form-item>
          </div>
          <div class="group">
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group" style="width: 100%">
                <el-form-item label="Year From">
                  <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Year To">
                  <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
                  </el-date-picker>
                </el-form-item>
              </div>
            </div>

          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <el-form-item label="Brand Name">
                  <el-select v-model="form.region" placeholder="please select your zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Model">
                  <el-select v-model="form.region" placeholder="please select your zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <el-form-item label="Engine CC">
                  <el-select v-model="form.region" placeholder="please select your zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Lot Number">
                  <el-select v-model="form.region" placeholder="please select your zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <el-form-item label="Vehicle Type">
                  <el-select v-model="form.region" placeholder="please select your zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Driver">
                  <el-select v-model="form.region" placeholder="please select your zone" style="width: 100%">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <button class="btn-search">Search</button>
              </div>
              <div class="inner-group">
                <button class="btn-clear">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/filterBox.scss";
</style>

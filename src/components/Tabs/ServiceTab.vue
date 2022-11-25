<script setup>
import StepperServices from '../Steppers/StepperServices.vue';</script>
<template>
    <div class="service-tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Auction-Grade" name="first">
                <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
                    <div>
                        <StepperServices>
                            <el-step title="New car" />
                            <el-step title="Same as the New car" />
                            <el-step title="Excellent grade with least or no issue in it" />
                            <el-step title="Great condition with only minor issues in it" />
                            <el-step title="Good grade car with some repair needed" />
                            <el-step title="Average grade that has issue and needed fixes" />
                            <el-step title="Poor or Bad grade" />
                        </StepperServices>
                    </div>
                    <div>
                        <StepperServices>
                            <el-step title="New car" />
                            <el-step title="Same as the New car" />
                            <el-step title="Excellent grade with least or no issue in it" />
                            <el-step title="Great condition with only minor issues in it" />
                            <el-step title="Good grade car with some repair needed" />
                            <el-step title="Average grade that has issue and needed fixes" />
                            <el-step title="Poor or Bad grade" />
                        </StepperServices>
                    </div>
                </div>

            </el-tab-pane>
            <el-tab-pane label="Inside-Grade" name="second">INSIDE GRADE</el-tab-pane>
            <el-tab-pane label="Detailed-Body-Condition" name="third">DETAILED BODY CONDITION</el-tab-pane>
            <el-tab-pane label="Vehicle-Options" name="fourth">VEHICLE OPTIONS</el-tab-pane>
            <el-tab-pane label="Transmission" name="fifith">TRANSMISSION</el-tab-pane>
        </el-tabs>
    </div>

</template>
<script>
export default {
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/ServiceTab";
</style>

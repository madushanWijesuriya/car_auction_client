<script setup>
import SectionFullScreen from "@/components/admin/SectionFullScreen.vue";
import CardBox from "@/components/admin/CardBox.vue";
import BaseButton from "@/components/admin/BaseButton.vue";
import BaseButtons from "@/components/admin/BaseButtons.vue";
import LayoutGuest from "@/components/layout/admin/LayoutGuest.vue";
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="pinkRed">
      <CardBox :class="cardClass">
        <div class="space-y-3">
          <h1 class="text-2xl">Unhandled exception</h1>

          <p>An Error Occurred</p>
        </div>

        <template #footer>
          <BaseButtons>
            <BaseButton label="Done" to="/admin/dashboard" color="danger" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>

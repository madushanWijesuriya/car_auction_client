<script setup></script>

<template>
  <div class="stock_card flex flex-nowrap w-full p-4">
    <div class="image-container w-[123px] grow-0 mr-4">
      <div class="flex flex-col h-[132px]">
        <img src="/placeholderstock.png" alt="image-001" />
        <span
          class="bg-color-01 text-white flex gap-2 justify-center items-center h-[32px]"
        >
          <span class="font-size-12">Stock No</span>
          <span class="font-size-16">#5749</span>
        </span>
      </div>
    </div>
    <div>
      <div class="flex items-center">
        <div class="font-size-20 color-01 font-bold">
          Toyota Mark II E-JZX100 1997/08
        </div>
        <div
          class="text-white font-size-16 font-normal bg-[#FF7A00] py-[5px] px-[20px] rounded-3xl ml-6"
        >
          Balance : ¥ 8,563.00
        </div>
      </div>
      <div class="flex gap-14 mt-4">
        <div class="flex gap-6">
          <div class="flex flex-col flex-nowrap">
            <div>Engine Capacity : 2,490 CC</div>
            <div>Grade : i</div>
            <div>Year/Month : 1997/08</div>
          </div>
          <div class="flex flex-col flex-nowrap">
            <div>Mileage : 81,000 KM</div>
            <div>Transmission : AT</div>
            <div>Model : ALSIKS</div>
          </div>
          <div class="flex flex-col flex-nowrap">
            <div>Chassis No. : JZX100-6036994</div>
            <div>Seats : 4</div>
            <div>Odometer : Normal</div>
          </div>
          <div class="flex flex-col flex-nowrap">
            <div>Now On Sale : Ref# 22830T</div>
            <div>2WD/4WD : 2</div>
            <div>Fuel : Hybrid</div>
          </div>
          <div class="flex flex-col flex-nowrap">
            <div>Make : BMW</div>
            <div>Exterior Cond. : 3.5</div>
            <div>Drive : Right Hand</div>
          </div>
          <div class="flex flex-col flex-nowrap">
            <div>Type : i8</div>
            <div>Color : White</div>
            <div>Interior Cond. : D</div>
          </div>
        </div>
        <button
          class="button bg-color-01 text-white px-[30px] py-[15px] font-size-20 rounded-md"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stock_card {
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
  border: 1px solid #e7e7e7;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.03), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
</style>

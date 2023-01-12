<template>
  <div class="h-screen">
    <header
      class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between"
    >
      <div class="flex items-center h-full mx-5">
        <div class="flex items-center text-center h-full w-60 border-grey-dark">
          <img src="../../assets/images/portal/sidebar/image.png" alt="" />
        </div>
        <div class="flex items-center w-64 mx-5">
          <h2 class="text-primary">Dashboard</h2>
        </div>
      </div>
      <div class="flex items-center h-full text-sm divide-x-2 h-8">
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-calculator.svg"
              alt=""
            />
          </a>

          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/new.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-task.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-comment.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-settings.svg"
              alt=""
            />
          </a>
        </div>
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-dark h-full px-4"
            >Admin.M</a
          >
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/avatar/man/Icon/icon-account.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>

    <div id="main" class="pt-16">
      <!-- Sidebar -->

      <!-- Content -->
      <div class="bg-white h-full pt-8">
        <div class="text-start w-full text-grey-darkest">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="mb-4 p-2">
                <label for="">Are you an individual or a car dealer?</label>
                <div class="mb-4">
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      class="form-radio"
                      name="accountType"
                      value="1"
                      checked
                    />
                    <span class="ml-2">Yes</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      class="form-radio"
                      name="accountType"
                      value="2"
                    />
                    <span class="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Enter Your Full Name</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Hana Kaito Takashi "
                />
              </div>
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Enter Your Contact Number</label
                >
                <div class="flex">
                  <select
                    class="w-2/6 block appearance-none bg-white-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option selected>Sri Lanka +94</option>
                    <option>With options</option>
                  </select>
                  <input
                    class="w-4/6 mx-2 border rounded outline-none focus:shadow-outline"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="014 56 7808"
                  />
                </div>
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Enter Your Email Address</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Hanakaito@jamex.com"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1">Company Name</label>
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="JAMEX AUCTION HOUSE"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Company Address</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="No 44, JAMEX AUCTION HOUSE pvt, Wellawatta, Colombo"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Contact Person</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="tel"
                  name="email"
                  id="email"
                  placeholder="+94 738 49 3094"
                />
              </div>
            </div>
            <!-- ... -->
            <div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Contact Number</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="tel"
                  name="email"
                  id="email"
                  placeholder="+94 738 49 3094"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Company Email Address</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Hanakaito@jamex.com"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1"
                  >Select Country</label
                >
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="JAMEX AUCTION HOUSE"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1">Port</label>
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="No 44, JAMEX AUCTION HOUSE pvt, Wellawatta, Colombo"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1">Requested Car</label>
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="+94 738 49 3094"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1">Requested Car</label>
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="+94 738 49 3094"
                />
              </div>
              <!--  -->
              <div class="mb-4 p-2">
                <label for="email" class="text-start mb-1">Requested Car</label>
                <input
                  class="w-full border rounded outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="+94 738 49 3094"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>

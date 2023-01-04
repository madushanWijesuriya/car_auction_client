<template>
    <div class="h-screen">
        <header class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between">
            <div class="flex items-center h-full mx-5">
                <div class="flex items-center text-center h-full w-60 border-grey-dark">
                    <img src="../../assets/images/portal/sidebar/image.png" alt="">
                </div>
                <div class="flex items-center w-64 mx-5">
                    <h2 class="text-primary">Dashboard</h2>
                </div>
            </div>
            <div class="flex items-center h-full text-sm divide-x-2 h-8">
                <div class="flex items-center h-full">
                    <a href="#" class="flex items-center text-white h-full px-4">
                        <img src="../../assets/images/portal/sidebar/notifications/icon-calculator.svg" alt="">
                    </a>

                    <a href="#" class="flex items-center text-white h-full px-4">
                        <img src="../../assets/images/portal/sidebar/notifications/new.svg" alt="">
                    </a>
                    <a href="#" class="flex items-center text-white h-full px-4">
                        <img src="../../assets/images/portal/sidebar/notifications/icon-task.svg" alt="">
                    </a>
                    <a href="#" class="flex items-center text-white h-full px-4">
                        <img src="../../assets/images/portal/sidebar/notifications/icon-comment.svg" alt="">
                    </a>
                    <a href="#" class="flex items-center text-white h-full px-4">
                        <img src="../../assets/images/portal/sidebar/notifications/icon-settings.svg" alt="">
                    </a>
                </div>
                <div class="flex items-center h-full">
                    <a href="#" class="flex items-center text-dark h-full px-4">Admin.M</a>
                    <a href="#" class="flex items-center text-white h-full px-4">
                        <img src="../../assets/images/portal/sidebar/avatar/man/Icon/icon-account.svg" alt="">
                    </a>
                </div>
            </div>
        </header>

        <div id="main" class="pt-16">
            <!-- Sidebar -->
            <div class="bg-white relative h-full min-h-screen w-full">
                <div class="xl:py-2">
                    <div class="group relative sidebar-item with-children py-4">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary">
                            <img src="../../assets/images/portal/sidebar/dashbord.svg" alt="">
                            <div class="text-primary text-xs mx-2 fs-18">Dashboard</div>
                        </a>
                    </div>
                    <div class="group relative sidebar-item with-children">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary">
                            <img src="../../assets/images/portal/sidebar/fin_repo.svg" alt="">
                            <div class="text-dark text-xs mx-2 fs-18">Financial Information</div>
                        </a>
                    </div>
                    <div class="group relative sidebar-item with-children py-3">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary">
                            <img src="../../assets/images/portal/sidebar/fi.svg" alt="">
                            <div class="text-dark text-xs mx-2 fs-18">Shipping Document</div>
                        </a>
                    </div>
                    <div class="group relative sidebar-item with-children py-3">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary">
                            <img src="../../assets/images/portal/sidebar/send_inq.svg" alt="">
                            <div class="text-Financial information
6 text-xs mx-2 fs-18">Send Inquiry</div>
                        </a>
                    </div>
                    <div class="group relative sidebar-item with-children py-3">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary">
                            <img src="../../assets/images/portal/sidebar/make_inv.svg" alt="">
                            <div class="text-Financial information
6 text-xs mx-2 fs-18">Make Invoices</div>
                        </a>
                    </div>
                    <div class="group relative sidebar-item with-children pt-3">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary">
                            <img src="../../assets/images/portal/sidebar/settings.svg" alt="">
                            <div class="text-Financial information
6 text-xs mx-2 fs-18">Settings</div>
                        </a>
                    </div>
                    <!-- <div class="group relative sidebar-item with-children">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-blue-dark xl:bg-black bg-black xl:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                class="h-6 w-6 text-white fill-current xl:mr-2">
                                <path
                                    d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"
                                    class="heroicon-ui"></path>
                            </svg>
                            <div class="text-white text-xs">Notifications</div>
                        </a>
                        <div
                            class="absolute xl:relative hidden xl:block pin-t left-full xl:pin-none w-48 xl:w-auto group-hover:block bg-black z-50 xl:z-auto">
                            <a href="#"
                                class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:text-blue-dark text-xs">
                                All Notification
                            </a>
                            <a href="#"
                                class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:text-blue-dark text-xs">
                                Friends
                            </a>
                            <a href="#"
                                class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:text-blue-dark text-xs">
                                Other
                            </a>
                        </div>
                    </div> -->
                </div>
            </div>

            <!-- Content -->
            <div class="bg-white h-full pt-8">
                <div class="text-start w-full text-grey-darkest">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <div class="mb-4 p-2">
                                <label for="">Are you an individual or a car dealer?</label>
                                <div class="mb-4">

                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="accountType" value="1" checked>
                                        <span class="ml-2">Yes</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="2">
                                        <span class="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Enter Your Full Name</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email" placeholder="Hana Kaito Takashi ">
                            </div>
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Enter Your Contact Number</label>
                                <div class="flex">
                                    <select
                                        class="w-2/6 block appearance-none bg-white-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option selected> Sri Lanka +94</option>
                                        <option>With options</option>
                                    </select>
                                    <input class="w-4/6 mx-2 border rounded outline-none focus:shadow-outline"
                                        type="text" name="email" id="email" placeholder="014 56 7808">

                                </div>

                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Enter Your Email Address</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="email"
                                    name="email" id="email" placeholder="Hanakaito@jamex.com">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Company Name</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email" placeholder="JAMEX AUCTION HOUSE">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Company Address</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email"
                                    placeholder="No 44, JAMEX AUCTION HOUSE pvt, Wellawatta, Colombo">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Contact Person</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="tel"
                                    name="email" id="email" placeholder="+94 738 49 3094">
                            </div>
                        </div>
                        <!-- ... -->
                        <div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Contact Number</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="tel"
                                    name="email" id="email" placeholder="+94 738 49 3094">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Company Email Address</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="email"
                                    name="email" id="email" placeholder="Hanakaito@jamex.com">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Select Country</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email" placeholder="JAMEX AUCTION HOUSE">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Port</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email"
                                    placeholder="No 44, JAMEX AUCTION HOUSE pvt, Wellawatta, Colombo">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Requested Car</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email" placeholder="+94 738 49 3094">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Requested Car</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email" placeholder="+94 738 49 3094">
                            </div>
                            <!--  -->
                            <div class="mb-4 p-2">
                                <label for="email" class="text-start mb-1">Requested Car</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="email" id="email" placeholder="+94 738 49 3094">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/clientPortalSidebarOther.scss";
</style>

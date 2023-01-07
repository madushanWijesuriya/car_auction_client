<template>
    <div class="h-screen">
        <header class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between">
            <div class="flex items-center h-full mx-5">
                <div class="flex items-center text-center h-full w-60 border-grey-dark">
                    <img src="../../assets/images/portal/sidebar/image.png" alt="">
                </div>
                <div class="flex items-center w-64 mx-5">
                    <h2 class="text-primary text-2xl">Shipping Document</h2>
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
            <div class="bg-gray-200 p-5">
                <div class="bg-white p-6 rounded-lg shadow-lg ">
                    <div class="flex flex-row">
                        <div class="basis-1/6">
                            <div class="mb-4 p-1">
                                <label for="edt_from" class="text-start mb-1">ETD From</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="date"
                                    name="edt_from" id="edt_from" placeholder="ETD From">
                            </div>
                        </div>
                        <div class="basis-1/6">
                            <div class="mb-4 p-1">
                                <label for="edt_to" class="text-start mb-1">ETD To</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="date"
                                    name="edt_to" id="edt_to" placeholder="EDT To ">
                            </div>
                        </div>
                        <div class="basis-1/3">
                            <div class="mb-4 p-1">
                                <label for="chassis_number" class="text-start mb-1">Chassis Number</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="chassis_number" id="chassis_number" placeholder="Enter Chassis Number">
                            </div>
                        </div>
                        <div class="basis-1/3">
                            <div class="mb-4 p-1">
                                <label for="vessel_name" class="text-start mb-1">Vessel Name</label>
                                <input class="w-full border rounded outline-none focus:shadow-outline" type="text"
                                    name="vessel_name" id="vessel_name" placeholder="Enter Vessel Name">
                            </div>
                        </div>
                        <div class="basis-1/6  mx-2">
                            <button
                                class="bg-blue-800 w-full py-2 border rounded text-white text-xl mt-7">Search</button>
                        </div>
                        <div class="basis-1/6 mx-2"> <button
                                class="border-blue-800 w-full py-2 border rounded text-blue-800 text-xl mt-7">Clear</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg mt-4">
                    <div class="flex justify-between">
                        <div class="">
                            <h2 class="text-xl text-blue-800">Transactions</h2>
                        </div>
                        <div class="font-sans text-black bg-white flex items-center justify-center">
                            <div class="border rounded-full overflow-hidden flex">
                                <input type="text" class="px-4 py-2" placeholder="Search Vehical...">
                                <button class="flex items-center justify-center px-4 border-l  bg-blue-800">
                                    <svg class="h-4 w-4 text-white" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>
                                    <label class="block">
                                        <input class="mr-2 leading-tight" type="checkbox">
                                    </label>
                                </th>
                                <th> Downlaod</th>
                                <th>ETD</th>
                                <th>Vessel Name</th>
                                <th>Voy.No</th>
                                <th>POL</th>
                                <th>Uploaded</th>
                                <th>Chassis No </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label class="block">
                                        <input class="mr-2 leading-tight" type="checkbox">
                                    </label>
                                </td>
                                <td>Sri Lanka</td>
                                <td>JZX100-6036994</td>
                                <td>04/08/2022</td>
                                <td>24/11/2022</td>
                                <td>NAGURA</td>
                                <td>24/11/2022</td>
                                <td>段ちきぽ写心べが</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/clientPortalSidebarOther.scss";
</style>

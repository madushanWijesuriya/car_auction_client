<template>
    <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div
            class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div class="flex-coloum">
                <div class="ml-3 mt-3 text-2xl text-blue-900 font-bold tracking-wider text-center">
                    <a href="#">New User Registration</a>
                </div>
                <div
                    class="p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly mt-10">
                    <div class="img">
                        <img src="../../assets/images/portal/register/image_68.png" alt="">
                    </div>
                </div>
            </div>
            <div class="p-5 bg-white md:flex-1">
                <div class="img">
                    <img src="../../assets/images/portal/login/image_2.png" alt="">
                </div>
                <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-sm font-semibold text-gray-500">Are you an individual or a car
                            dealer?</label>
                        <div class="mb-4">
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="accountType" value="1">
                                <span class="ml-2">Individual</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="2">
                                <span class="ml-2">Car Dealer</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-sm font-semibold text-gray-500">Enter Your Full Name</label>
                        <input type="email" id="email" autofocus
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-sm font-semibold text-gray-500">Enter Your Contact Number</label>
                        <input type="text" id="password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <div class="flex items-center justify-between">
                            <label for="password" class="text-sm font-semibold text-gray-500">Enter Your Email
                                Address</label>
                        </div>
                        <input type="text" id="password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-900 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

  
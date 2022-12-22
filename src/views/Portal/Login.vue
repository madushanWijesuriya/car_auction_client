<template>
    <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div
            class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div class="ml-3 mt-3 text-2xl text-blue-900 font-bold tracking-wider text-center">
                <a href="#">Log In</a>
            </div>
            <div
                class="p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                <div class="img">
                    <img src="../../assets/images/portal/login/white_car.svg" alt="">
                </div>
            </div>
            <div class="p-5 bg-white md:flex-1">
                <div class="img">
                    <img src="../../assets/images/portal/login/image_2.png" alt="">
                </div>
                <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-sm font-semibold text-gray-500">User Name</label>
                        <input type="email" id="email" autofocus
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <div class="flex items-center justify-between">
                            <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                        </div>
                        <input type="password" id="password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <div class="flex items-center justify-end mt-4 mb-4">
                            <a href="#" class="text-sm text-blue-900 hover:underline focus:text-blue-600">Forgot
                                Password?</a>
                        </div>
                        <div class="recapture mt-6">
                            <img src="../../assets/images/portal/login/image_69.png" alt="">
                        </div>

                    </div>
                    <div>
                        <button type="submit"
                            class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-900 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                            Log in
                        </button>
                        <p class="text-sm mt-2 text-blue-900">
                            <span>if you don't have and account?</span>
                            <a href="#" class="underline mr-3">User Registration</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

  
<script setup>
</script>
<template>
    <div class=" text-black md:hidden">
        <div
            class="space-y-5">
            <div>
                <a class="font-semibold" href="https://car-auction-staging.netlify.app//">Home</a>
            </div>
            <div class="flex items-center gap-2">
                <div class="font-semibold">
                    <a href="" class="font-semibold">
                        <Services title="Services" />
                    </a>
                </div>
                <div class="w-[10px] h-[10px]">
                    <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div class="font-semibold">
                <a class="font-semibold"
                    href="https://car-auction-staging.netlify.app//countries-vehicle-details">Countries</a>
            </div>
            <div class="font-semibold">How to Order</div>
            <div class="flex items-center gap-2">
                <a class="font-semibold" href="https://car-auction-staging.netlify.app//about">About Us</a>
                <div class="w-[10px] h-[10px]">
                    <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div class="font-semibold">
                <a class="font-semibold" href="https://car-auction-staging.netlify.app//reachus">Reach Us</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: ['title'],
}
</script>

<style>
.dropdown-menu {
    position: absolute;
    z-index: 1000;
    min-width: 10rem;
    padding: 1rem 0;
    margin: 0;
    font-size: .75rem;
    color: #08246C;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid transparent;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 12px;
}

.dropdown-item {
    display: flex;
    width: 100%;
    padding: 0.3rem 1.5rem;
    clear: both;
    font-weight: 600;
    font-size: 20px;
    color: #08246C;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    justify-content: space-between;
}

.dropdown-submenu:hover>.dropdown-menu {
    top: 0;
    pointer-events: all;
    visibility: visible;
    opacity: 1;
    transition: all .25s ease-in-out;
}

.dropend>.dropdown-menu {
    right: auto;
    left: 100%;
    visibility: hidden;
    margin-top: 0;
    /* margin-left: 0; */
    margin-left: 0.5rem;
}

.dropdown-menu:before {
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    z-index: -1;
}

.dropdown,
.dropend,
.dropstart,
.dropup {
    position: relative
}
</style>
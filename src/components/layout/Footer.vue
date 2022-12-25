<script setup>
import { computed } from '@vue/runtime-core'
</script>
<template>
  <div class="footer">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          class="grid grid-cols-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-10 xl:grid-cols-10 gap-7 m-12 m-2 sm:m-2 md:m-10"
        >
          <div
            class="col-span-2 pt-12 col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-2 xl:col-span-2"
          >
            <div class="flex justify-center sm:justify-center">
              <img
                class="mb-10"
                src="@/assets\images\footer\footer-image-1.svg"
              />
            </div>
            <h1
              class="text-left text-center sm:text-center md:text-left lg:text-left xl:text-left text-white footer-contect-text"
            >
              Jamex Auction House will give you due assistance regarding the
              procedure with which you can place your bids and control them for
              the deposit, auction,and payments
            </h1>
            <div class="">
              <iframe
                class="w-11/12 mt-4"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjamexcojp%2F&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=577622146523366"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div
            class="col-span-8 col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-8 xl:col-span-8"
          >
            <div
              class="grid grid-cols-8 grid-cols-10 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-8 xl:grid-cols-8 gap-7"
            >
              <div
                class="col-span-1 md:col-start-2 sm:col-start-2 col-span-5 sm:col-span-4 md:col-span-5 lg:col-span-1 xl:col-span-1 pt-12"
              >
                <h1 class="text-left footer-topic">About Us</h1>
                <br />
                <div class="mb-20">
                  <div class="mb-5">
                    <routerLink
                      :to="'/why-us'"
                      class="text-left text-white footer-contect-text underline"
                      >Why Choose Us?
                    </routerLink>
                  </div>
                  <div class="mb-5">
                    <routerLink
                      :to="'/company-profile'"
                      class="text-left text-white footer-contect-text underline"
                      >Company Profile
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/about'"
                      class="text-left text-white footer-contect-text underline"
                      >Corporate Philosophy
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/ServicesQualityControlView'"
                      class="text-left text-white footer-contect-text underline"
                      >Quality Control
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/customer-feedback'"
                      class="text-left text-white footer-contect-text underline"
                      >Customer Reviews
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/reachus'"
                      class="text-left text-white footer-contect-text underline"
                      >Contact Us</routerLink
                    >
                  </div>
                </div>
              </div>
              <div
                class="col-span-2 md:col-start-7 col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-1 xl:col-span-2 pt-12 sm:pl-5 md:pl-5 lg:pl-0 xl:pl-20"
              >
                <h1 class="text-left footer-topic">Auctions</h1>
                <br />
                <div class="mb-20 sm:mb-0 md:mb-0">
                  <div class="mb-5">
                    <routerLink
                      :to="'/countries-vehicle-details'"
                      class="text-left text-white footer-contect-text underline"
                      >Auction Calendar
                    </routerLink>
                  </div>
                  <div class="mb-5">
                    <routerLink
                      :to="'/services-auction-houses'"
                      class="text-left text-white footer-contect-text underline"
                      >Auction Houses
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/services-auction-guru'"
                      class="text-left text-white footer-contect-text underline"
                      >Auction Guide
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/services-auction-vs-stock'"
                      class="text-left text-white footer-contect-text underline"
                      >Auction Vs Stock
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <routerLink
                      :to="'/how-to-ordering'"
                      class="text-left text-white footer-contect-text underline"
                      >How to order
                    </routerLink>
                  </div>

                  <div class="mb-5">
                    <a
                      href="#"
                      class="text-left text-white footer-contect-text underline"
                      >Latest News</a
                    >
                  </div>
                  <div class="mb-5">
                    <a
                      href="#"
                      class="text-left text-white footer-contect-text underline"
                      >FAQ</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="col-span-3 md:col-start-3 col-start-2 sm:col-start-2 col-span-9 sm:col-span-9 md:col-span-10 lg:col-span-3 xl:col-span-3 xl:pt-12 lg:pt-12 md:pt-0 pt-0 sm:pt-0"
              >
                <div class="justify-center">
                  <h1
                    class="footer-topic text-center sm:text-center md:text-left lg:text-left lx:text-left"
                  >
                    Support over the world
                  </h1>
                  <br />
                  <div>
                    <div
                      class="grid grid-rows-7 grid-rows-11 sm:grid-rows-11 md:grid-rows-11 lg:grid-rows-7 xl:grid-rows-7 grid-flow-col gap-4"
                    >
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\twemoji_flag-bangladesh.svg"
                          />Bangladesh
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-malawi.svg"
                          />Malawi
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-trinidad-and-tobago.svg"
                          />Trinidad & Tobago
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-botswana.svg"
                          />Botswana
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-malta.svg"
                          />Malta
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-tanzania.svg"
                          />Tanzania
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-congo-brazzaville.svg"
                          />DR Congo
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-new-zealand.svg"
                          />New Zealand
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-turkey.svg"
                          />Turkey
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\twemoji_flag-cyprus.svg"
                          />Cyprus
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-pakistan.svg"
                          />Pakistan
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-myanmar.svg"
                          />Myanmar
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-fiji.svg"
                          />Fiji
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-russia.svg"
                          />Russia
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-uganda.svg"
                          />Uganda
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-jamaica.svg"
                          />Jamaica
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-sri-lanka.svg"
                          />Srilanka
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-united-kingdom.svg"
                          />United Kingdom
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-kenya.svg"
                          />Kenya
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-haiti.svg"
                          />Haiti
                        </h1>
                      </div>
                      <div>
                        <h1 class="text-white footer-contect-text">
                          <img
                            class="inline mr-2"
                            src="@\assets\images\footer\flags\emojione-v1_flag-for-zambia.svg"
                          />Zambia
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-span-2 col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-2 xl:col-span-2 pt-12 pt-12 sm:pt-12 pb-12 sm:pb-12 ml-10 ml-10 sm:ml-10 md:ml-10"
              >
                <h1
                  class="footer-topic text-center sm:text-center md:text-center lg:text-left xl:text-left"
                >
                  Reach us
                </h1>
                <br />
                <h1 class="text-white footer-contect-text">
                  <div
                    class="flex sm:flex justify-center sm:justify-center md:flex md:justify-center lg:pr-16 xl:pr-16"
                  >
                    <img
                      class="inline mr-2"
                      src="@\assets\images\footer\logos_whatsapp-icon.svg"
                    />
                    <div class="lg:pt-2">+81 3 6712 4147</div>
                  </div>
                </h1>
                <br />
                <div
                  class="flex sm:flex justify-center sm:justify-center md:flex md:justify-center lg:pr-16 xl:pr-16"
                >
                  <img
                    class="mr-2"
                    src="@\assets\images\footer\QR_code_for_mobile_English_Wikipedia1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-3 md:gap-0">
        <div
          class="text-white bottom-7 font-size-14 md:font-size-16 text-center md:text-left"
        >
          Tokyo Public Safety Commission No. 302151306342
        </div>
        <div class="text-white bottom-7 font-size-14 md:font-size-16 m-auto">
          © 2022 Jamex Auction House
        </div>
        <div class="flex gap-5">
          <a href="https://www.facebook.com/jamexcojp/" target="_blank">
            <img
              src="/home/facebook.svg"
              alt="facebook-logo"
              class="bottom-7 cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="/home/twitter.svg"
              alt="twitter-logo"
              class="bottom-7 cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="/home/linkedIn.svg"
              alt="linkedIn-logo"
              class="bottom-7 cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="/home/instagram.svg"
              alt="instagram-logo"
              class="bottom-7 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/footer.scss';
</style>

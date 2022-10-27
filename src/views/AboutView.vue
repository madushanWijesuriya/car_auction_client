<template>

  <div class="text-white text-sm">
    <div class="flex flex-row p-3 px-2 md:px-5 lg:px-10 justify-between item-center w-full text-[#08246C]">
      <div class="visible md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 24 24"
             style=" fill:#000000;">
          <path
              d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>
      </div>
      <div class="flex items-center">
        logo
      </div>
      <div class="hidden md:flex lg:flex flex-row gap-10 items-center">
        <div class="font-semibold">
          Home
        </div>
        <div class="font-semibold">
          Service
        </div>
        <div class="font-semibold">
          Countries
        </div>
        <div class="font-semibold">
          How to Order
        </div>
        <div class="font-semibold">
          About Us
        </div>
        <div class="font-semibold">
          Reach Us
        </div>
      </div>
      <div class="hidden md:flex lg:flex flex-row gap-2 items-center justify-center">
        <div class="flex flex-row justify-center font-semibold items-center">
          Log in
        </div>
        <div class="rounded bg-[#08246C] text-white p-1 px-3">
          Register
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-centers w-full md:lg:px-20 md:mt-10">
      <div class="relative w-full">
        <img
            class="md:lg:rounded-[15px] w-full"
            src="../assets/images/aboutus/aboutus-img-1.svg"
        />
        <div class="absolute text-white top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2">
          <div class="text-white text-xs">
            <div class="flex flex-col md:flex-row lg:flex-row md:gap-2 lg:gap-2">
              <div>
                <h1 class="text-lg md:text-2xl lg:text-7xl">Corporate </h1>
              </div>
              <div>
                <h1 class="text-lg md:lg:text-7xl">Philosophy</h1>
              </div>
            </div>
            <p class="md:lg:text-lg text-xs">Our company strives to assure the provision of affordable and good quality
              cars to our</p>
            <p class="md:lg:text-lg text-xs"> customers all over the world.</p>
          </div>
        </div>
      </div>
      <div class="mt-5 md:px-20 p-5 md:lg:p-0">
        <div class="flex flex-col text-black gap-5 md:gap-10 ">

          <div
              class="flex flex-col gap-3 border border-[#E7E7E7] rounded-md p-3 md:lg:p-0 md:border-0">
            <div
                class="flex justify-start md:lg:justify-center text-lg md:text-xl font-bold text-bold text-[#08246C] items-center">
              Vision Statement
            </div>
            <div class="flex justify-start items-center text-black">
              Jamex Auction House has the vision to create awareness about the used cars and their affordability to
              assure access of customers to these vehicles. We intend to improve our market share in the automobile
              industry and make our company the market leader.
            </div>
          </div>

          <div class="hidden md:flex justify-start md:lg:justify-center text-xl font-bold text-bold text-[#08246C] items-center">
            Core Values
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-5">
            <div class="flex flex-col flex-1 gap-3 p-3 md:lg:p-0">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.6328 4.64689C20.3187 3.91948 19.8657 3.2603 19.2992 2.70627C18.7323 2.15058 18.064 1.70898 17.3305 1.40549C16.5699 1.08953 15.7541 0.927808 14.9305 0.929704C13.775 0.929704 12.6477 1.24611 11.668 1.84377C11.4336 1.98674 11.2109 2.14377 11 2.31486C10.7891 2.14377 10.5664 1.98674 10.332 1.84377C9.35234 1.24611 8.225 0.929704 7.06953 0.929704C6.2375 0.929704 5.43125 1.08908 4.66953 1.40549C3.93359 1.71017 3.27031 2.14845 2.70078 2.70627C2.13359 3.25968 1.6805 3.91901 1.36719 4.64689C1.04141 5.40392 0.875 6.20783 0.875 7.03517C0.875 7.81564 1.03438 8.62892 1.35078 9.45627C1.61563 10.1477 1.99531 10.8649 2.48047 11.5891C3.24922 12.7352 4.30625 13.9305 5.61875 15.1422C7.79375 17.1508 9.94766 18.5383 10.0391 18.5945L10.5945 18.9508C10.8406 19.1078 11.157 19.1078 11.4031 18.9508L11.9586 18.5945C12.05 18.536 14.2016 17.1508 16.3789 15.1422C17.6914 13.9305 18.7484 12.7352 19.5172 11.5891C20.0023 10.8649 20.3844 10.1477 20.6469 9.45627C20.9633 8.62892 21.1227 7.81564 21.1227 7.03517C21.125 6.20783 20.9586 5.40392 20.6328 4.64689ZM11 17.0969C11 17.0969 2.65625 11.7508 2.65625 7.03517C2.65625 4.64689 4.63203 2.71095 7.06953 2.71095C8.78281 2.71095 10.2688 3.6672 11 5.06408C11.7313 3.6672 13.2172 2.71095 14.9305 2.71095C17.368 2.71095 19.3438 4.64689 19.3438 7.03517C19.3438 11.7508 11 17.0969 11 17.0969Z"
                    fill="#CE2832"/>
              </svg>
              <div
                  class="flex justify-start text-lg font-bold text-bold text-[#08246C] items-center">
                Gratitude
              </div>
              <div class="text-start  text-black">
                We consider our customers as an asset and strive hard to keep them satisfied with our services. Our
                customers come at the top of our priority list and for that purpose, AHJ team has always promoted
                customer-driven corporate environment.
              </div>
            </div>

            <div
                class="flex flex-col flex-1 gap-3 p-3 md:lg:p-0">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.6328 4.64689C20.3187 3.91948 19.8657 3.2603 19.2992 2.70627C18.7323 2.15058 18.064 1.70898 17.3305 1.40549C16.5699 1.08953 15.7541 0.927808 14.9305 0.929704C13.775 0.929704 12.6477 1.24611 11.668 1.84377C11.4336 1.98674 11.2109 2.14377 11 2.31486C10.7891 2.14377 10.5664 1.98674 10.332 1.84377C9.35234 1.24611 8.225 0.929704 7.06953 0.929704C6.2375 0.929704 5.43125 1.08908 4.66953 1.40549C3.93359 1.71017 3.27031 2.14845 2.70078 2.70627C2.13359 3.25968 1.6805 3.91901 1.36719 4.64689C1.04141 5.40392 0.875 6.20783 0.875 7.03517C0.875 7.81564 1.03438 8.62892 1.35078 9.45627C1.61563 10.1477 1.99531 10.8649 2.48047 11.5891C3.24922 12.7352 4.30625 13.9305 5.61875 15.1422C7.79375 17.1508 9.94766 18.5383 10.0391 18.5945L10.5945 18.9508C10.8406 19.1078 11.157 19.1078 11.4031 18.9508L11.9586 18.5945C12.05 18.536 14.2016 17.1508 16.3789 15.1422C17.6914 13.9305 18.7484 12.7352 19.5172 11.5891C20.0023 10.8649 20.3844 10.1477 20.6469 9.45627C20.9633 8.62892 21.1227 7.81564 21.1227 7.03517C21.125 6.20783 20.9586 5.40392 20.6328 4.64689ZM11 17.0969C11 17.0969 2.65625 11.7508 2.65625 7.03517C2.65625 4.64689 4.63203 2.71095 7.06953 2.71095C8.78281 2.71095 10.2688 3.6672 11 5.06408C11.7313 3.6672 13.2172 2.71095 14.9305 2.71095C17.368 2.71095 19.3438 4.64689 19.3438 7.03517C19.3438 11.7508 11 17.0969 11 17.0969Z"
                    fill="#CE2832"/>
              </svg>
              <div
                  class="flex justify-start text-lg font-bold text-bold text-[#08246C] ">
                Integrity
              </div>
              <div class="text-start text-black">
                The values of honesty, morality, and suitability are kept forward and we assure to make them evident in
                all of our corporate operations.
              </div>
            </div>

            <div
                class="flex flex-col flex-1 gap-3 p-3 md:lg:p-0">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.6328 4.64689C20.3187 3.91948 19.8657 3.2603 19.2992 2.70627C18.7323 2.15058 18.064 1.70898 17.3305 1.40549C16.5699 1.08953 15.7541 0.927808 14.9305 0.929704C13.775 0.929704 12.6477 1.24611 11.668 1.84377C11.4336 1.98674 11.2109 2.14377 11 2.31486C10.7891 2.14377 10.5664 1.98674 10.332 1.84377C9.35234 1.24611 8.225 0.929704 7.06953 0.929704C6.2375 0.929704 5.43125 1.08908 4.66953 1.40549C3.93359 1.71017 3.27031 2.14845 2.70078 2.70627C2.13359 3.25968 1.6805 3.91901 1.36719 4.64689C1.04141 5.40392 0.875 6.20783 0.875 7.03517C0.875 7.81564 1.03438 8.62892 1.35078 9.45627C1.61563 10.1477 1.99531 10.8649 2.48047 11.5891C3.24922 12.7352 4.30625 13.9305 5.61875 15.1422C7.79375 17.1508 9.94766 18.5383 10.0391 18.5945L10.5945 18.9508C10.8406 19.1078 11.157 19.1078 11.4031 18.9508L11.9586 18.5945C12.05 18.536 14.2016 17.1508 16.3789 15.1422C17.6914 13.9305 18.7484 12.7352 19.5172 11.5891C20.0023 10.8649 20.3844 10.1477 20.6469 9.45627C20.9633 8.62892 21.1227 7.81564 21.1227 7.03517C21.125 6.20783 20.9586 5.40392 20.6328 4.64689ZM11 17.0969C11 17.0969 2.65625 11.7508 2.65625 7.03517C2.65625 4.64689 4.63203 2.71095 7.06953 2.71095C8.78281 2.71095 10.2688 3.6672 11 5.06408C11.7313 3.6672 13.2172 2.71095 14.9305 2.71095C17.368 2.71095 19.3438 4.64689 19.3438 7.03517C19.3438 11.7508 11 17.0969 11 17.0969Z"
                    fill="#CE2832"/>
              </svg>
              <div
                  class="flex justify-start text-lg font-bold text-bold text-[#08246C] items-center">
                Collaboration
              </div>
              <div class="text-start text-black">
                We believe in creating strong business networks. Our quality of maintaining strong ties with other
                business partners has always brought exceptional corporate benefits to us.
              </div>
            </div>

            <div
                class="flex flex-col flex-1 gap-3 p-3 md:lg:p-0">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.6328 4.64689C20.3187 3.91948 19.8657 3.2603 19.2992 2.70627C18.7323 2.15058 18.064 1.70898 17.3305 1.40549C16.5699 1.08953 15.7541 0.927808 14.9305 0.929704C13.775 0.929704 12.6477 1.24611 11.668 1.84377C11.4336 1.98674 11.2109 2.14377 11 2.31486C10.7891 2.14377 10.5664 1.98674 10.332 1.84377C9.35234 1.24611 8.225 0.929704 7.06953 0.929704C6.2375 0.929704 5.43125 1.08908 4.66953 1.40549C3.93359 1.71017 3.27031 2.14845 2.70078 2.70627C2.13359 3.25968 1.6805 3.91901 1.36719 4.64689C1.04141 5.40392 0.875 6.20783 0.875 7.03517C0.875 7.81564 1.03438 8.62892 1.35078 9.45627C1.61563 10.1477 1.99531 10.8649 2.48047 11.5891C3.24922 12.7352 4.30625 13.9305 5.61875 15.1422C7.79375 17.1508 9.94766 18.5383 10.0391 18.5945L10.5945 18.9508C10.8406 19.1078 11.157 19.1078 11.4031 18.9508L11.9586 18.5945C12.05 18.536 14.2016 17.1508 16.3789 15.1422C17.6914 13.9305 18.7484 12.7352 19.5172 11.5891C20.0023 10.8649 20.3844 10.1477 20.6469 9.45627C20.9633 8.62892 21.1227 7.81564 21.1227 7.03517C21.125 6.20783 20.9586 5.40392 20.6328 4.64689ZM11 17.0969C11 17.0969 2.65625 11.7508 2.65625 7.03517C2.65625 4.64689 4.63203 2.71095 7.06953 2.71095C8.78281 2.71095 10.2688 3.6672 11 5.06408C11.7313 3.6672 13.2172 2.71095 14.9305 2.71095C17.368 2.71095 19.3438 4.64689 19.3438 7.03517C19.3438 11.7508 11 17.0969 11 17.0969Z"
                    fill="#CE2832"/>
              </svg>
              <div
                  class="flex justify-start text-lg font-bold text-bold text-[#08246C] items-center">
                Accountability
              </div>
              <div class="text-start items-center text-black">
                Jamex Auction House has the vision to create awareness about the used cars and their affordability to
                assure access of customers to these vehicles. We intend to improve our market share in the automobile
                industry and make our company the market leader.
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

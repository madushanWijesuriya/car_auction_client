<template>

  <div class="text-white text-sm">
    <div class="flex flex-row md:p-3 lg:p-10 px-2 md:px-3 lg:px-10 justify-between item-center w-full text-[#08246C]">
      <div class="visible md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
          style=" fill:#000000;">
          <path
            d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z">
          </path>
        </svg>
      </div>
      <div class="flex items-center">
        <div class="lg:w-[150px] xl:w-[200px] md:w-[120px]">
          <img class="w-full" src="@/assets/images/logo.svg" />
        </div>

      </div>
      <div class="hidden md:flex flex-row md:gap-7 xl:gap-13 items-center font-semibold md:text-[12px] lg:text-[15px] xl:text-[20px]">
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
      <div class="hidden md:flex lg:flex flex-row gap-5 items-center justify-center">
        <div class="flex flex-row justify-center md:text-[12px] lg:text-[15px] xl:text-[20px] font-semibold items-center">
          Log in
        </div>
        <div class="rounded bg-[#08246C] px-5 p-1 md:text-[12px] lg:text-[15px] xl:text-[20px] text-white lg:p-2 lg:px-8 xl:px-10">
          Register
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-centers w-full md:px-[60px] lg:px-[80px] xl:px-[180px] md:mt-2 xl:mt-2">
      <div class="relative w-full">
        <img class="lg:rounded-[15px] md:rounded-[10px] w-full" src="@/assets/images/aboutus/aboutus-img-1.svg" />
        <div class="absolute text-white top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2">
          <div class="text-white">
            <div class="flex flex-col md:flex-row md:gap-2 lg:gap-2">
              <div>
                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">Corporate </h1>
              </div>
              <div>
                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">Philosophy</h1>
              </div>
            </div>
            <p class="mt-1 text-[12px] md:text-sm md:mt-3 font-Nunito">Our company strives to assure the provision of affordable and
              good quality cars to our customers all over the world.</p>
          </div>
        </div>
      </div>
      <div class="md:mt-[25px] xl:mt-[80px]">
        <div class="flex flex-col text-black gap-5 md:gap-5 xl:gap-10 p-4 md:p-0 ">
          <div class="flex flex-col gap-3 border border-[#E7E7E7] rounded-md p-3 md:p-0 md:border-0">
            <div
              class="flex justify-start md:justify-center text-xl lg:text-2xl xl:text-4xl font-nunito font-bold text-[#08246C] items-center">
              Vision Statement
            </div>
            <div class="flex justify-start font-nunito leading-normal text-black md:text-md xl:text-[24px] ">
              Jamex Auction House has the vision to create awareness about the used cars and their affordability to
              assure access of customers to these vehicles. We intend to improve our market share in the automobile
              industry and make our company the market leader.
            </div>
          </div>

          <div
            class="hidden md:flex justify-start md:justify-center font-bold  text-[#08246C] text-xl lg:text-2xl xl:text-4xl p-3 md:p-0 items-center">
            Core Values
          </div>

          <div class="flex flex-col md:flex-row justify-between md:gap-5 xl:gap-[7%]">
            <div class="flex flex-col flex-1 gap-3 p-3 md:p-0">
              <div class="w-[20px] h-[20px] md:w-[34px] md:h-[34px]">
                <svg width="100%" height="100%" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.0547 7.07815C32.5311 5.8658 31.7761 4.76717 30.832 3.84378C29.8872 2.91763 28.7733 2.18163 27.5508 1.67581C26.2831 1.14922 24.9235 0.879681 23.5508 0.88284C21.625 0.88284 19.7461 1.41018 18.1133 2.40628C17.7227 2.64456 17.3516 2.90628 17 3.19143C16.6484 2.90628 16.2773 2.64456 15.8867 2.40628C14.2539 1.41018 12.375 0.88284 10.4492 0.88284C9.0625 0.88284 7.71875 1.14847 6.44922 1.67581C5.22266 2.18362 4.11719 2.91409 3.16797 3.84378C2.22264 4.76613 1.46749 5.86502 0.945313 7.07815C0.402344 8.33987 0.125 9.67972 0.125 11.0586C0.125 12.3594 0.390625 13.7149 0.917969 15.0938C1.35938 16.2461 1.99219 17.4414 2.80078 18.6485C4.08203 20.5586 5.84375 22.5508 8.03125 24.5703C11.6563 27.918 15.2461 30.2305 15.3984 30.3242L16.3242 30.918C16.7344 31.1797 17.2617 31.1797 17.6719 30.918L18.5977 30.3242C18.75 30.2266 22.3359 27.918 25.9648 24.5703C28.1523 22.5508 29.9141 20.5586 31.1953 18.6485C32.0039 17.4414 32.6406 16.2461 33.0781 15.0938C33.6055 13.7149 33.8711 12.3594 33.8711 11.0586C33.875 9.67972 33.5977 8.33987 33.0547 7.07815ZM17 27.8282C17 27.8282 3.09375 18.918 3.09375 11.0586C3.09375 7.07815 6.38672 3.85159 10.4492 3.85159C13.3047 3.85159 15.7813 5.44534 17 7.77346C18.2188 5.44534 20.6953 3.85159 23.5508 3.85159C27.6133 3.85159 30.9063 7.07815 30.9063 11.0586C30.9063 18.918 17 27.8282 17 27.8282Z"
                    fill="#CE2832" />
                </svg>
              </div>

              <div class="flex justify-start text-lg font-bold text-bold text-[#08246C] lg:text-2xl xl:text-[32px]">
                Gratitude
              </div>
              <div class="text-start font-nunito md:text-md xl:text-[20px] text-[#393939] font-nunito leading-normal">
                We consider our customers as an asset and strive hard to keep them satisfied with our services. Our
                customers come at the top of our priority list and for that purpose, AHJ team has always promoted
                customer-driven corporate environment.
              </div>
            </div>

            <div class="flex flex-col flex-1 gap-3 p-3 md:p-0">
              <div class="w-[20px] h-[20px] md:w-[34px] md:h-[34px]">
                <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 5V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35H35V31.6667H8.33333V5H5Z"
                    fill="#CE2832" />
                  <path
                    d="M25.4876 24.5117C25.6423 24.6666 25.826 24.7895 26.0281 24.8733C26.2303 24.9572 26.4471 25.0003 26.666 25.0003C26.8849 25.0003 27.1016 24.9572 27.3038 24.8733C27.506 24.7895 27.6897 24.6666 27.8443 24.5117L36.1776 16.1783L33.821 13.8217L26.666 20.9767L22.8443 17.155C22.6897 17.0001 22.506 16.8772 22.3038 16.7933C22.1016 16.7095 21.8849 16.6663 21.666 16.6663C21.4471 16.6663 21.2303 16.7095 21.0281 16.7933C20.8259 16.8772 20.6423 17.0001 20.4876 17.155L12.1543 25.4883L14.511 27.845L21.666 20.69L25.4876 24.5117Z"
                    fill="#CE2832" />
                </svg>
              </div>

              <div class="flex justify-start text-lg font-nunito font-bold text-bold text-[#08246C] lg:text-2xl xl:text-[32px]">
                Integrity
              </div>
              <div class="text-start md:text-md xl:text-[20px] text-[#393939] font-nunito leading-normal">
                The values of honesty, morality, and suitability are kept forward and we assure to make them evident in
                all of our corporate operations.
              </div>
            </div>

            <div class="flex flex-col flex-1 gap-3 p-3 md:p-0">
              <div class="w-[20px] h-[20px] md:w-[34px] md:h-[34px]">
                <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.5 24.25V23H3V24.25C3 26.5706 3.92187 28.7962 5.56282 30.4372C7.20376 32.0781 9.42936 33 11.75 33H15.5V30.5H11.75C10.0924 30.5 8.50268 29.8415 7.33058 28.6694C6.15848 27.4973 5.5 25.9076 5.5 24.25ZM28 11.75V13H30.5V11.75C30.5 9.42936 29.5781 7.20376 27.9372 5.56282C26.2962 3.92187 24.0706 3 21.75 3H18V5.5H21.75C22.5708 5.5 23.3835 5.66166 24.1418 5.97576C24.9001 6.28985 25.5891 6.75022 26.1694 7.33059C26.7498 7.91095 27.2102 8.59995 27.5242 9.35823C27.8383 10.1165 28 10.9292 28 11.75ZM11.75 11.75H4.25C3.25544 11.75 2.30161 12.1451 1.59835 12.8484C0.895088 13.5516 0.5 14.5054 0.5 15.5V18H3V15.5C3 15.1685 3.1317 14.8505 3.36612 14.6161C3.60054 14.3817 3.91848 14.25 4.25 14.25H11.75C12.0815 14.25 12.3995 14.3817 12.6339 14.6161C12.8683 14.8505 13 15.1685 13 15.5V18H15.5V15.5C15.5 14.5054 15.1049 13.5516 14.4017 12.8484C13.6984 12.1451 12.7446 11.75 11.75 11.75ZM8 10.5C8.98891 10.5 9.9556 10.2068 10.7779 9.65735C11.6001 9.10794 12.241 8.32705 12.6194 7.41342C12.9978 6.49979 13.0969 5.49446 12.9039 4.52455C12.711 3.55465 12.2348 2.66373 11.5355 1.96447C10.8363 1.26521 9.94536 0.789002 8.97545 0.596076C8.00555 0.40315 7.00021 0.502166 6.08658 0.880605C5.17295 1.25904 4.39206 1.89991 3.84265 2.72215C3.29324 3.5444 3 4.5111 3 5.5C3 6.82609 3.52678 8.09785 4.46447 9.03554C5.40215 9.97322 6.67392 10.5 8 10.5ZM8 3C8.49445 3 8.9778 3.14662 9.38893 3.42133C9.80005 3.69603 10.1205 4.08648 10.3097 4.54329C10.4989 5.00011 10.5484 5.50278 10.452 5.98773C10.3555 6.47268 10.1174 6.91814 9.76777 7.26777C9.41814 7.6174 8.97268 7.8555 8.48773 7.95197C8.00277 8.04843 7.50011 7.99892 7.04329 7.8097C6.58648 7.62048 6.19603 7.30005 5.92133 6.88893C5.64662 6.4778 5.5 5.99446 5.5 5.5C5.5 4.83696 5.76339 4.20108 6.23223 3.73223C6.70107 3.26339 7.33696 3 8 3ZM31.75 29.25H24.25C23.2554 29.25 22.3016 29.6451 21.5983 30.3484C20.8951 31.0516 20.5 32.0054 20.5 33V35.5H23V33C23 32.6685 23.1317 32.3505 23.3661 32.1161C23.6005 31.8817 23.9185 31.75 24.25 31.75H31.75C32.0815 31.75 32.3995 31.8817 32.6339 32.1161C32.8683 32.3505 33 32.6685 33 33V35.5H35.5V33C35.5 32.0054 35.1049 31.0516 34.4016 30.3484C33.6984 29.6451 32.7446 29.25 31.75 29.25ZM23 23C23 23.9889 23.2932 24.9556 23.8427 25.7779C24.3921 26.6001 25.173 27.241 26.0866 27.6194C27.0002 27.9978 28.0055 28.0969 28.9755 27.9039C29.9454 27.711 30.8363 27.2348 31.5355 26.5355C32.2348 25.8363 32.711 24.9454 32.9039 23.9755C33.0969 23.0055 32.9978 22.0002 32.6194 21.0866C32.241 20.173 31.6001 19.3921 30.7779 18.8427C29.9556 18.2932 28.9889 18 28 18C26.6739 18 25.4021 18.5268 24.4645 19.4645C23.5268 20.4022 23 21.6739 23 23ZM30.5 23C30.5 23.4945 30.3534 23.9778 30.0787 24.3889C29.804 24.8001 29.4135 25.1205 28.9567 25.3097C28.4999 25.4989 27.9972 25.5484 27.5123 25.452C27.0273 25.3555 26.5819 25.1174 26.2322 24.7678C25.8826 24.4181 25.6445 23.9727 25.548 23.4877C25.4516 23.0028 25.5011 22.5001 25.6903 22.0433C25.8795 21.5865 26.2 21.196 26.6111 20.9213C27.0222 20.6466 27.5055 20.5 28 20.5C28.663 20.5 29.2989 20.7634 29.7678 21.2322C30.2366 21.7011 30.5 22.337 30.5 23Z"
                    fill="#CE2832" />
                </svg>
              </div>

              <div
                class="flex justify-start text-lg font-nunito font-bold text-bold text-[#08246C] items-center lg:text-2xl xl:text-[32px]">
                Collaboration
              </div>
              <div class="text-start md:text-md xl:text-[20px] text-[#393939] font-nunito leading-normal">
                We believe in creating strong business networks. Our quality of maintaining strong ties with other
                business partners has always brought exceptional corporate benefits to us.
              </div>
            </div>

            <div class="flex flex-col flex-1 gap-3 p-3 md:p-0">
              <div class="w-[20px] h-[20px] md:w-[34px] md:h-[34px]">
                <svg width="100%" height="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M28.907 11H30.5C31.2956 11 32.0587 11.316 32.6213 11.8787C33.1839 12.4413 33.5 13.2043 33.5 14V20C33.5 20.7956 33.1839 21.5587 32.6213 22.1213C32.0587 22.6839 31.2956 23 30.5 23H28.907C28.5413 25.8999 27.1299 28.5667 24.9376 30.5C22.7453 32.4332 19.9229 33.4999 17 33.5V30.5C19.3869 30.5 21.6761 29.5518 23.364 27.8639C25.0518 26.1761 26 23.8869 26 21.5V12.5C26 10.113 25.0518 7.82384 23.364 6.13601C21.6761 4.44818 19.3869 3.49997 17 3.49997C14.6131 3.49997 12.3239 4.44818 10.636 6.13601C8.94821 7.82384 8 10.113 8 12.5V23H3.5C2.70435 23 1.94129 22.6839 1.37868 22.1213C0.816071 21.5587 0.5 20.7956 0.5 20V14C0.5 13.2043 0.816071 12.4413 1.37868 11.8787C1.94129 11.316 2.70435 11 3.5 11H5.093C5.45905 8.10032 6.87062 5.43388 9.06286 3.50099C11.2551 1.56809 14.0773 0.501587 17 0.501587C19.9227 0.501587 22.7449 1.56809 24.9371 3.50099C27.1294 5.43388 28.541 8.10032 28.907 11ZM3.5 14V20H5V14H3.5ZM29 14V20H30.5V14H29ZM10.64 22.6775L12.23 20.1335C13.6596 21.029 15.313 21.5027 17 21.5C18.687 21.5027 20.3404 21.029 21.77 20.1335L23.36 22.6775C21.4539 23.8717 19.2493 24.5034 17 24.5C14.7507 24.5034 12.5461 23.8717 10.64 22.6775Z"
                    fill="#CE2832" />
                </svg>
              </div>

              <div class="flex justify-start text-lg font-bold text-[#08246C] lg:text-2xl xl:text-[32px] items-center">
                Accountability
              </div>
              <div
                class="text-start text-[Nunito] items-center md:text-md xl:text-[20px] text-[#393939] font-nunito leading-normal">
                Jamex Auction House has the vision to create awareness about the used cars and their affordability to
                assure access of customers to these vehicles. We intend to improve our market share in the automobile
                industry and make our company the market leader.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:grid-col-8 md:grid md:grid-rows-2 md:place-items-stretch md:h-[300px] xl:h-[450px] md:gap-10 xl:gap-20 md:mt-10 ">
        <div class="md:col-span-5 md:col-start-4 px-7 md:px-0">
          <div class="flex flex-col gap-2 md:gap-5 ">
            <div class="text-[#08246C] lg:text-2xl xl:text-4xl text-[20px] font-bold ">
              President’s Message
            </div>
            <p class="text-black text-[12px] md:text-[15px] xl:text-[22px] font-nunito leading-6 md:leading-2 xl:leading-7">
              The aim of our company since its inception has been the provision of affordability and exceptional
              services to gain a leading position in the market. In pursuit of these objects we always keep our
              customers at the top. We have come across several challenges but our team’s capabilities have always
              benefitted us. Our corporate culture, positive environment and sustainable efforts have given us various
              chances to improve. Our team is our proud and we can confidently say that our customers can expect bigger
              things from us.
            </p>
          </div>
        </div>

        <div class="md:row-span-2 col-span-3 md:row-start-1 px-7 md:px-0">
          <div class="md:row-span-2 md:col-span-3 md:row-start-1 ">
            <img class="pt-3 w-full md:p-0 object-fill md:h-[300px] xl:h-[450px]"
              src="../assets/images/aboutus/president-image.svg" />
          </div>
        </div>
        <div class="md:col-span-5 md:col-start-4 px-6 md:px-0 pt-2 text-center">
          <div class="md:flex md:flex-col md:h-[100%] justify-end items-start">
            <div class="text-lg font-semibold text-black lg:text-2xl xl:text-4xl">
              Sajjad Akbar
            </div>
            <div class="text-black">
              CEO
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

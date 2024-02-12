<template>
  <section>
            <span
              id="ready-solutions"
              class="block absolute -mt-32 lg:-mt-24"
            ></span>
    <div class="mx-auto px-6">
      <app-title>ГОТОВЫЕ КОМПЛЕКСНЫЕ РЕШЕНИЯ</app-title>
       <div class="max-sm:flex-col flex gap-x-[30px] max-sm:mt-[18px] sm:mt-[61px]">
         <div>
           <div class="flex items-start sm:items-center">
             <img
               class="hidden sm:block"
               src="img/ready-icon1.svg"
               width="70"
               height="70"
               alt="#"
             />
             <img
               class="sm:hidden"
               src="img/ready-icon1mob.svg"
               width="48"
               height="48"
               alt="#"
             />
             <ul class="ml-[18px] sm:ml-[30px]">
               <li class="text-[16px] font-semibold sm:text-[21px]">
                 Для наружных работ
               </li>
               <li class="text-[16px] max-sm:leading-[15px] sm:text-[21px]">
                 Цвет + Защита от огня, плесени, растрескивания, старения,
                 <span class="max-sm:hidden">выцветания, влаги</span>
               </li>
             </ul>
           </div>
         <img
           class="mt-[46px]"
           src="img/ready1.png"
           width="570"
           height="428"
           alt="#"
         />
         </div>
         <div class="max-sm:mt-[36px]">
           <div class="flex items-start sm:items-center">
             <img
               class="hidden sm:block"
               src="img/ready-icon1.svg"
               width="70"
               height="70"
               alt="#"
             />
             <img
               class="sm:hidden"
               src="img/ready-icon1mob.svg"
               width="48"
               height="48"
               alt="#"
             />
             <ul class="ml-[18px] sm:ml-[30px]">
               <li class="text-[16px] font-semibold sm:text-[21px]">
                 Для наружных работ
               </li>
               <li class="text-[16px] max-sm:leading-[15px] sm:text-[21px]">
                 Цвет + Защита от огня, плесени, растрескивания, старения,
                 <span class="max-sm:hidden">выцветания, влаги</span>
               </li>
             </ul>
           </div>
         <img
           class="mt-[46px]"
           src="img/ready2.png"
           width="570"
           height="428"
           alt="#"
         />
         </div>
       </div>
    </div>
    <AppButton
    link="https://www.nort-udm.ru/mesta-prodazh/"
    class="mt-[66px]"
    >Узнайте где купить</AppButton>
  </section>
</template>
<script>
import AppTitle from '@/components/global/AppTitle.vue'
import AppButton from '@/components/global/AppButton.vue'

export default {
  name: 'AppReady',
  components: { AppButton, AppTitle },
}
</script>

<template>
  <header
    class="fixed top-0 z-[101] mx-auto w-full border-b border-gray bg-white px-3"
  >
    <div class="mx-auto lg:max-w-[600] 2xl:max-w-[1380px]">
      <div class="my-2 flex items-center justify-between">
        <div class="flex items-center gap-x-2 lg:gap-x-4">
          <a href="/" aria-label="Pirilax Special — на главную" @click.prevent="closeMenu">
            <nuxt-img
              format="webp"
              quality="100"
              width="145"
              height="68"
              src="img/logo.png"
              alt="Pirilax Special"
              class="hidden lg:block"
            />
            <nuxt-img
              format="webp"
              quality="100"
              width="76"
              height="35"
              src="img/logo-mob.png"
              alt="Pirilax Special"
              class="lg:hidden"
            />
          </a>
          <div
            class="text-left text-[21px] leading-[13px] sm:text-lg max-sm:text-left max-sm:text-[11px]"
          >
            <p class="font-normal">
              <a href="mailto:special@ooonort.ru" class="underline"
                >special@ooonort.ru</a
              >
            </p>
            <p class="font-semibold">
              <a href="tel:88006009998" class="underline">8 (800) 600 999 8</a>
            </p>
          </div>
        </div>

        <nav class="only-md:hidden max-lg:hidden" aria-label="Основная навигация">
          <ul class="flex gap-x-8 text-lg">
            <li v-for="item in link" :key="item.link" class="hover:underline">
              <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
            <li>
              <a
                href="https://www.nort-udm.ru/mesta-prodazh/"
                target="_blank"
                rel="noopener noreferrer"
                >Где купить</a
              >
            </li>
          </ul>
        </nav>

        <div class="flex gap-x-3 sm:gap-x-5 lg:hidden">
          <button
            type="button"
            class="z-40 ml-auto w-6 items-center justify-center text-white"
            :aria-expanded="openMenu ? 'true' : 'false'"
            aria-controls="mobile-menu"
            aria-label="Открыть меню"
            @click="openMenu = !openMenu"
          >
            <svg
              v-if="!openMenu"
              class="block cursor-pointer fill-current"
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="21" height="2" fill="#000000" />
              <rect y="5" width="21" height="2" fill="#000000" />
              <rect y="10" width="21" height="2" fill="#000000" />
            </svg>
            <svg
              v-else
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                width="20.6739"
                height="1.72282"
                transform="matrix(0.699746 -0.714391 0.699746 0.714391 0.328125 14.769)"
                fill="#000000"
              />
              <rect
                width="20.6739"
                height="1.72282"
                transform="matrix(-0.699746 -0.714391 -0.699746 0.714391 15.6719 14.769)"
                fill="#000000"
              />
            </svg>
          </button>
          <div
            id="mobile-menu"
            class="fixed left-0 top-[3rem] h-full w-full transition-all sm:static sm:block sm:bg-[rgba(0,0,0,0)]"
            :class="[{ hidden: !openMenu }, { 'z-100 block': openMenu }]"
            @click="closeMenu"
          >
            <nav aria-label="Мобильная навигация">
              <ul
                class="absolute right-0 top-0 w-[200px] flex-nowrap items-end justify-center bg-white p-4 pb-[24px] text-left transition-opacity duration-200 ease-in-out sm:opacity-100 md:w-auto lg:static lg:flex lg:justify-end lg:p-0 lg:text-xs xl:w-[45rem] xl:text-sm 2xl:w-[38rem]"
                :class="{
                  'max-lg:pointer-events-none max-lg:opacity-0': !openMenu,
                  'max-lg:opacity-100': openMenu,
                }"
                @click="openMenu = false"
              >
                <li v-for="item in link" :key="item.link" class="mt-[10px]">
                  <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                </li>
                <li class="mt-[10px]">
                  <a
                    href="https://www.nort-udm.ru/mesta-prodazh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Где купить</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      openMenu: false,
      link: [
        { name: 'О продукте', link: '#about' },
        { name: 'Свойства', link: '#property' },
        { name: 'Как работает', link: '#works' },
        { name: 'Готовые решения', link: '#ready-solutions' },
        { name: 'Отзывы', link: '#reviews' },
      ],
    }
  },
  watch: {
    openMenu(isOpen) {
      if (!process.client) return
      document.body.style.overflow = isOpen ? 'hidden' : ''
    },
  },
  mounted() {
    this.onKeyup = (e) => {
      if (e.key === 'Escape') this.openMenu = false
    }
    document.body.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy() {
    if (process.client) {
      document.body.style.overflow = ''
      document.body.removeEventListener('keyup', this.onKeyup)
    }
  },
  methods: {
    closeMenu() {
      this.openMenu = false
    },
  },
}
</script>

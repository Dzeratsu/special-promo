<template>
  <footer class="w-full bg-black py-[16px] text-[12px] text-white sm:text-base">
    <div
      class="mx-auto max-w-[1170px] px-2 leading-[16px] max-sm:px-6 max-sm:text-center"
    >
      <p>
        © {{ year }} ООО «Новейшие Огнезащитные Русские Технологии». Любая
        перепечатка материала сайта без письменного согласования правообладателя
        запрещена.
      </p>
      <p>
        Все названия продукции на сайте являются зарегистрированными товарными
        знаками.
      </p>
      <p>
        Бесплатная линия
        <a href="tel:88006009998" class="underline">8 (800) 600 999 8</a>,
        <span class="max-sm:block">
          е-mail:
          <a href="mailto:special@ooonort.ru" class="underline"
            >special@ooonort.ru</a
          ></span
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    // Fixed year avoids SSR/client clock mismatch hydration issues
    year() {
      return 2026
    },
  },
}
</script>

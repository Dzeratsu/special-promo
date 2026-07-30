<template>
  <div
    class="w-[342px] sm:w-[410px] bg-white mx-auto p-5 sm:p-6 2xl:p-8 relative z-50 rounded-lg text-[16px] max-h-[670px] overflow-auto"
    :class="[{
      'sm:w-[1000px]' : politic || agreement
    }]"
  >
    <div class="flex justify-end">
      <button
        type="button"
        class="rounded-md inline-flex items-center justify-center text-gray-400 duration-300 ease-in hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        @click="$store.dispatch('popup/close')"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div v-if="!politic && !agreement">
      <form v-if="!sending" @submit.prevent="sendForm">
        <div class="text-center px-[31px] leading-[22px]">
          <h3 class="text-[24px] font-semibold">Остались вопросы?</h3>
          <p>Заполните форму и наш специалист вам перезвонит!</p>
        </div>
        <div class="mt-2">
          <input
            v-model="form.name"
            required
            placeholder="Ваше имя"
            class="pb-2 pt-3 pl-2 min-w-full block duration-300 ease-in border border-gray outline-none focus:border-cBorder text-xs lg:text-sm 2xl:base rounded-[10px]"
          />
          <AppDropdown
            :properties="allRegion"
            title="Выберете регион"
            name="region"
            @selectValue="setValue"
          />
          <input
            v-model="form.phone"
            v-mask="'+7 (###)-###-##-##'"
            required
            placeholder="+7(___)___-__-__"
            class="pb-2 pt-3 pl-2 min-w-full block duration-300 ease-in border-gray border-[1px] outline-none focus:border-cBorder text-xs lg:text-sm 2xl:base rounded-[10px]"
          />
          <textarea
            v-model="form.text"
            required
            placeholder="Сообщение"
            class="mt-2 h-[115px] resize-none pb-2 pt-3 pl-2 min-w-full block duration-300 ease-in border border-gray outline-none focus:border-cBorder text-xs lg:text-sm 2xl:base rounded-[10px]"
          />
          <p class="mt-2 text-center text-[12px] text-polit">
            Оставляя свои персональные данные, Вы соглашаетесь с
            <br />
            <span
              class="cursor-pointer text-[#FF802E] underline"
              @click="openPolitic"
            >Политикой конфиденциальности</span>
            <br />
            <span
              class="cursor-pointer text-[#FF802E] underline"
              @click="openAgreement"
            >Пользовательское соглашение</span>
          </p>

          <div ref="smartCaptcha" class="mt-4"></div>
          <p v-if="captchaError" class="mt-2 text-center text-sm text-red-500">
            {{ captchaError }}
          </p>

          <button
            type="submit"
            class="mt-[39px] w-full rounded-[15px] bg-[#FF802E] py-[12px] text-center text-[16px] hover:shadow-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isSubmitting || !form.captchaToken"
          >
            {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
          </button>
        </div>
      </form>
      <div v-else>
        <h3 class="text-center text-[22px]">Ваш вопрос успешно отправлен!</h3>
      </div>
    </div>
    <AppPolitic v-if="politic" />
    <AppAgreement v-if="agreement" />
  </div>
</template>

<script>
import AppDropdown from '~/components/global/AppDropdown'
import AppPolitic from '~/components/global/AppPolitic'
import AppAgreement from '~/components/global/AppAgreement'

export default {
  name: 'LayoutForms',
  components: { AppDropdown, AppPolitic, AppAgreement },
  data() {
    return {
      allRegion: [
        'Адыгея',
        'Алтай',
        'Амурская область',
        'Архангельская область',
        'Астраханская область',
        'Башкортостан республика',
        'Белгородская область',
        'Брянская область',
        'Бурятия республика',
        'Владимирская область',
        'Волгоградская область',
        'Вологодская область',
        'Воронежская область',
        'Дагестан республика',
        'Еврейская автономная область',
        'Забайкальский край',
        'Ивановская область',
        'Ингушетия республика',
        'Иркутская область',
        'Кабардино-Балкария республика',
        'Калининградская область',
        'Калмыкия республика',
        'Калужская область',
        'Камчатский край',
        'Карачаево-Черкесия республика',
        'Карелия республика',
        'Кемеровская область',
        'Кировская область',
        'Коми республика',
        'Костромская область',
        'Краснодарский край',
        'Красноярский край',
        'Крым республика',
        'Курганская область',
        'Курская область',
        'Ленинградская область',
        'Липецкая область',
        'Магаданская область',
        'Марий Эл республика',
        'Мордовия республика',
        'Московская область',
        'Мурманская область',
        'Ненецкий автономный округ',
        'Нижегородская область',
        'Новгородская область',
        'Новосибирская область',
        'Омская область',
        'Оренбургская область',
        'Орловская область',
        'Пензенская область',
        'Пермский край',
        'Приморский край',
        'Псковская область',
        'Ростовская область',
        'Рязанская область',
        'Самарская область',
        'Саратовская область',
        'Саха (Якутия) республика',
        'Сахалинская область',
        'Свердловская область',
        'Северная Осетия - Алания республика',
        'Смоленская область',
        'Ставропольский край',
        'Тамбовская область',
        'Татарстан республика',
        'Тверская область',
        'Томская область',
        'Тульская область',
        'Тыва республика',
        'Тюменская область',
        'Удмуртия республика',
        'Ульяновская область',
        'Хабаровский край',
        'Хакасия республика',
        'Ханты-Мансийский - Югра',
        'Челябинская область',
        'Чечня республика',
        'Чувашия республика',
        'Чукотский автономный округ',
        'Ямало-Ненецкий  автономный округ',
        'Ярославская область'
      ],
      form: {
        name: '',
        phone: '',
        text: '',
        region: '',
        captchaToken: ''
      },
      sending: false,
      politic: false,
      agreement: false,
      isSubmitting: false,
      captchaError: '',
      smartCaptchaWidgetId: null
    }
  },
  mounted() {
    this.initSmartCaptcha()
  },
  beforeDestroy() {
    if (process.client && window.smartCaptcha && this.smartCaptchaWidgetId !== null) {
      window.smartCaptcha.destroy(this.smartCaptchaWidgetId)
    }
  },
  methods: {
    loadSmartCaptchaScript() {
      return new Promise((resolve, reject) => {
        if (process.server) {
          resolve(null)
          return
        }
        if (window.smartCaptcha) {
          resolve(window.smartCaptcha)
          return
        }
        const existing = document.querySelector('script[data-smartcaptcha]')
        if (existing) {
          existing.addEventListener('load', () => resolve(window.smartCaptcha))
          existing.addEventListener('error', () =>
            reject(new Error('SmartCaptcha script failed'))
          )
          return
        }
        const script = document.createElement('script')
        script.src = 'https://smartcaptcha.cloud.yandex.ru/captcha.js'
        script.defer = true
        script.dataset.smartcaptcha = '1'
        script.onload = () => resolve(window.smartCaptcha)
        script.onerror = () => reject(new Error('SmartCaptcha script failed'))
        document.head.appendChild(script)
      })
    },
    waitForSmartCaptcha() {
      return new Promise((resolve, reject) => {
        if (process.server) {
          resolve(null)
          return
        }

        let attempts = 0
        const maxAttempts = 100
        const timer = setInterval(() => {
          attempts += 1
          if (window.smartCaptcha && this.$refs.smartCaptcha) {
            clearInterval(timer)
            resolve(window.smartCaptcha)
          } else if (attempts >= maxAttempts) {
            clearInterval(timer)
            reject(new Error('SmartCaptcha script not loaded'))
          }
        }, 100)
      })
    },
    async initSmartCaptcha() {
      try {
        await this.loadSmartCaptchaScript()
        const smartCaptcha = await this.waitForSmartCaptcha()
        if (!smartCaptcha) return

        const sitekey =
          this.$config.smartCaptchaSiteKey ||
          process.env.NUXT_ENV_SMARTCAPTCHA_SITE_KEY ||
          process.env.SMARTCAPTCHA_SITE_KEY
        if (!sitekey) {
          this.captchaError = 'Не задан ключ SmartCaptcha'
          return
        }

        this.smartCaptchaWidgetId = smartCaptcha.render(this.$refs.smartCaptcha, {
          sitekey,
          hl: 'ru',
          callback: this.onCaptchaSuccess,
          'expired-callback': this.onCaptchaExpired,
          'error-callback': this.onCaptchaError
        })
      } catch (e) {
        this.captchaError = 'Не удалось загрузить SmartCaptcha'
        this.$log.error(e)
      }
    },
    async sendForm() {
      if (!this.form.captchaToken) {
        this.captchaError = 'Подтвердите, что вы не робот'
        return
      }

      try {
        this.isSubmitting = true
        const response = await this.$axios.post('/api/create-lead', this.form)
        if (response.status === 201) {
          this.sending = true
          setTimeout(() => this.$store.dispatch('popup/close'), 3000)
        }
        this.$log.info(response)
      } catch (e) {
        this.$log.error(e)
        this.captchaError = 'Форма не отправилась. Попробуйте ещё раз.'
        if (process.client && window.smartCaptcha && this.smartCaptchaWidgetId !== null) {
          window.smartCaptcha.reset(this.smartCaptchaWidgetId)
        }
        this.form.captchaToken = ''
      } finally {
        this.isSubmitting = false
      }
    },
    onCaptchaSuccess(token) {
      this.form.captchaToken = token
      this.captchaError = ''
    },
    onCaptchaExpired() {
      this.form.captchaToken = ''
      this.captchaError = 'Капча истекла, пройдите проверку ещё раз'
    },
    onCaptchaError(error) {
      this.form.captchaToken = ''
      this.captchaError = 'Ошибка SmartCaptcha'
      this.$log.error('SmartCaptcha error:', error)
    },
    setValue(input) {
      this.$log.info(input)
      this.form.region = input.value
    },
    openPolitic() {
      this.politic = true
    },
    openAgreement() {
      this.agreement = true
    }
  }
}
</script>

import connect from '../libs/nodemailer'
import checkRegion from '../services/checkRegion'

interface Ilead {
    name: string;
    phone: string;
    region: string;
    recaptcha_response_invisible: string;
    text: string;
}
export default async function sendLead(data: Ilead) {
  const email = checkRegion(data.region)
  try {
    return await connect.sendMail({
      from: "SPECIAL.nort-udm.ru",
      to: `a498008@yandex.ru, special@ooonort.ru, ${email}`,
      subject: "Вопрос с сайта special.nort-udm.ru",
      html: `<span>Имя: </span>${data.name} <br> <span>Телефон: </span>${data.phone}, <br> <span>Регион: </span>${data.region} <br> <span>Вопрос: </span>${data.text}`
    })
  }catch(e) {
    console.error(e)
    throw new Error('Ошибка отправки письма')
  }

}

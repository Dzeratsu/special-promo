export default function responseObj(data: any, status = true) {
  return {
    message: data,
    status: status,
  }
}

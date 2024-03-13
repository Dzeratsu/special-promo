export default function exception(err: string, result = false) {
  return {
    message: err,
    status: result,
  }
}

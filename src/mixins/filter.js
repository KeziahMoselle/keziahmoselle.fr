export default function filter (string) {
  return string.toLowerCase().replace(' ', '').replace('.', '').replace('.fr', '')
}

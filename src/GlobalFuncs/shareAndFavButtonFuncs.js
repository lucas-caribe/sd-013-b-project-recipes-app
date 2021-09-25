export default function shareButtonFunc(url) {
  navigator.clipboard.writeText(url);
  // Referência do navigator:
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
}

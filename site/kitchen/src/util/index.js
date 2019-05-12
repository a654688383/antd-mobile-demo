function setTitle(t) {
  document.title = t;
  let iframe = document.createElement('iframe')
  iframe.style.visibility = 'hidden'
  let iframeCallback = function () {
    setTimeout(function () {
      iframe.removeEventListener('load', iframeCallback)
      document.body.removeChild(iframe)
    }, 0)}
  iframe.addEventListener('load', iframeCallback)
  document.body.appendChild(iframe)
}

export default  setTitle

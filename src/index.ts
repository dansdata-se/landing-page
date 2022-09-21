function throttled(callback: () => void, timeout: number = 100) {
  let isThrottling = false;
  return () => {
    if (isThrottling) return;
    else isThrottling = true;

    setTimeout(() => {
      callback();
      isThrottling = false;
    }, timeout);
  };
}

function onResize() {
  // Re-render page plugin to adapt to new size.
  window.FB.XFBML.parse();
}

window.addEventListener("resize", throttled(onResize), false);

export default {};

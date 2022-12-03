# 监视器

## 监视可见情况

```js
const el = document.querySelector("div")!;
const observer = new IntersectionObserver(
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log();
      observer.unobserve(el);
      return;
    }
    return;
  },
  {
    root: null,
    rootMargin: "0 0 0 0",
    threshold: [0, 0.5, 1],
  }
);
observer.observe(el);
observer.disconnect();
```

## 监视尺寸改变

```js
const reObserver = new ResizeObserver(([{ contentBoxSize }]) => {
  reObserver.unobserve(el);
});
reObserver.observe(el);
```

# 监视器

## IntersectionObserver

```js
const dom = document.querySelector("div")!;
const observer = new IntersectionObserver(
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log();
      observer.unobserve(dom);
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
observer.observe(dom);
observer.disconnect();
```

## ResizeObserver

```js
const reObserver = new ResizeObserver(([{ contentBoxSize }]) => {
  reObserver.unobserve(dom);
});
reObserver.observe(dom);
observer.disconnect();
```

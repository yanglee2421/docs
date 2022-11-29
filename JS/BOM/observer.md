# 监视器

- `IntersectionObserver`

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
```

- `ResizeObserver`

```js
const reObserver = new ResizeObserver(([{ contentBoxSize }]) => {
  reObserver.unobserve(el);
});
reObserver.observe(el);
```

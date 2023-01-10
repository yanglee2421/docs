# Provider

```tsx
import { Provider } from "react-redux";
import store from "@/redux/root-store";
function App() {
  return (
    <Provider store={store}>
      <Children />
    </Provider>
  );
}
```

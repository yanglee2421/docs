interface param {
  url: string;
}
export async function useFetch<T = any>() {
  const controller = new AbortController();
  const { signal } = controller;
  // 挂载 params & query 参数
  const params = "list";
  const url = new URL(`/api/joke/${params}`, "https://autumnfish.cn");
  url.searchParams.set("key", "value");
  // 挂载 body参数
  const body = JSON.stringify({});
  // 配置 headers
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  headers.set("Content-Type", "application/json;charset=utf-8");
  // 发送
  try {
    const res = await fetch(url, {
      method: "get",
      headers,
      body,
      signal,
    });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data as unknown as T;
  } catch (err) {
    console.error(err);
  }
}

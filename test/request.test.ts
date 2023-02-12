// @ts-ignore
import axios from "axios";

/**
 * get 是否带 body?
 * 结论：
 * 1. XMLHttpRequest 不带
 * 2. fetch 不带
 * 3. axios 不带（broser）/带（node）
 */

// node执行不了
const xhr = new XMLHttpRequest();

// axios在node和browser中发起请求的手段不一致
async function byAxios() {
  const url = new URL("/get", "http://localhost:3000");
  try {
    const res = await axios({ url, data: { id: "xxxx" } });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

// fetch不带
async function byFetch() {
  const url = new URL("/get", "http://localhost:3000");
  try {
    const res = await fetch(url, { body: JSON.stringify({ id: "xxx" }) });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

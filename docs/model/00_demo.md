# three

## 安装

```powershell
yarn add three @types/three
```

## 场景

```js
const scence = new Scene();
```

## 相机

```js
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);
scence.add(camera);
```

## 形状

```js
const cubeG = new BoxGeometry(1, 1, 1);
```

## 材质

```js
const mater = new MeshBasicMaterial({ color: 0xffff00 });
```

## 物体

```js
const cube = new Mesh(cubeG, mater);
scence.add(cube);
```

## 渲染

```js
const root = document.getElementById("uid");
const render = new WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
root.hasChildNodes() || root.appendChild(render.domElement);
render.render(scence, camera);
```

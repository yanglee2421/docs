# nestjs

## 请求错误

- NotFoundException
- InternalServerErrorException
- BadRequestException
- HttpException

## 连接数据库

```ts
import {} from "";
```

## 文件上传

- UseInterceptors
- UploadedFile
- FileInterceptor

```ts
import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
```

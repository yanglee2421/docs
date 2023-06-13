# react-hook-form

[react-hook-form](https://react-hook-form.com/get-started#Quickstart)是一个用于react表单校验的库。很多UI框架（如antd、element-ui等）中的表单组件已经内置了它的部分功能，包括数据收集、字段校验、数值转化等。不同于这些带UI的表单组件，react-hook-form完全脱离UI，仅关注数据流间的运算逻辑，这意味着你可以在任何react场景使用它，在其它UI框架甚至根本不使用UI框架的场景下这尤为重要。

## useForm

useForm是一个用于管理表单的自定义hook，它接收一个配置对象作为入参。

基本用法如下：

~~~tsx
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const onReset = () => reset();

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <input type="email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      <input type="submit" value="submit" />
      <input type="reset" value="reset" />
    </form>
  );
}

~~~

## register

useForm返回的register用于在对应的表单中注册字段（支持校验、嵌套字段、数组字段）。

它返回一个包含以下四个属性的对象：

| Name     | Type      | Desc                                |
| -------- | --------- | ----------------------------------- |
| onChange | function  | input的onChange handler             |
| onBlur   | function  | input的onBlur handler               |
| ref      | React.Ref | 收集input实例，以支持error时的focus |
| name     | string    | input的name属性                     |

`register`通过它返回的对象接管了对input身上props（仅以上四个）的操作，这使得在大部分input（除radio、submit、image、reset、button外）、select和textarea中，它都能像上例中情况一样直接使用。

自定义组件（尤其是props与register返回的对象不能对应的），则往往不适用。

__NOTE：__ `registery`通过非受控组件的方式捕获`input`。它能在一定程序上自动识别`input`的`type`以自动选择关注`input`的那个属性作为`field`的`value`。例如：当`type`为`checkbox`时，会关注`checked`而非`value`，当`type`为`file`时，会关注`file`而非`value`。

## useController

在不支持直接使用register的情况下，改为使用useController接管组件。

它返回一个包含以下三个属性的对象：

| Name                         | Type      | Desc                                           |
| ---------------------------- | --------- | ---------------------------------------------- |
| field.onChange               | function  | 用来手动触发change event                       |
| field.onBlur                 | function  | 用来手动触发blur event                         |
| field.value                  | T         | 用来手动指定value的使用场景                    |
| field.name                   | string    | 用来手动指定input的name属性                    |
| field.ref                    | React.Ref | 用来手动指定元素的ref                          |
| fieldState.invalid           | boolean   | 当前字段是否无效                               |
| fieldState.isTouched         | boolean   | 当前input是否被touch                           |
| fieldsState.isDirty          | boolean   | 当前字段状态是否为脏数据                       |
| fieldState.error             | error     | 当前字段校验错误时的信息                       |
| formState.isDirty            | boolean   | 表单状态是否为脏数据                           |
| formState.dirtyFields        | object    | 表单中为脏的字段                               |
| formState.touchedFields      | object    | 表单中处于touch的字段                          |
| formState.defaultValues      | object    | 表单数据的默认值（初始表单数据）               |
| formState.isSubmitted        | boolean   | 表单是否已提交                                 |
| formState.isSubmitSuccessful | boolean   | 表单是否已成功提交（提交后运行环境未抛出异常） |
| formState.isSubmitting       | boolean   | 表单是否提交中                                 |
| formState.isLoading          | boolean   | 表单是否正加载初始表单数据                     |
| formState.submitCount        | number    | 表单被提交的次数                               |
| formState.isValid            | boolean   | 表单字段是否没有错误                           |
| formState.isValidating       | boolean   | 表单字段是否正在进行校验                       |
| formState.errors             | boolean   | 表单字段的校验错误信息                         |

它的使用方式与register稍有不同。

~~~tsx
import React from "react";
import { useController, useForm, Control } from "react-hook-form";

interface FieldsValue {
  email: string;
  password: string;
  checkbox: boolean;
}

interface CheckboxProps {
  control: Control<FieldsValue>;
}

type HandleChange = React.ChangeEventHandler<HTMLInputElement>;

export function Checkbox(props: CheckboxProps) {
  const { control } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: "checkbox",
    rules: { required: { value: true, message: "checkbox required" } },
  });

  const handleChange: HandleChange = (evt) => {
    const value = evt.target.checked;
    field.onChange(value);
  };

  return (
    <div>
      <input
        type="checkbox"
        ref={field.ref}
        checked={field.value}
        onChange={handleChange}
        onBlur={field.onBlur}
        name={field.name}
      />
      {error && <p>{error.message}</p>}
    </div>
  );
}
~~~

__NOTE：__ 与`register`不同，`field`通过受控组件的方式来捕获`input`。这意味着，在`type`为`checkbox`的情况下，它会收集`input`的`checked`会为`value`。注意：无论是`register`还是`field`，都不支持`type`为`radio`的情况。

## Controller

Controller组件是useController的组件式API，其作用是useController基本一致。

但使用方法稍有不同：

~~~tsx
import { Controller, Control } from "react-hook-form";

interface FieldsValue {
  email: string;
  password: string;
  checkbox: boolean;
  tel: string;
}

interface ItemEmailProps {
  control: Control<FieldsValue>;
}

export function ItemTell(props: ItemEmailProps) {
  const { control } = props;
  return (
    <Controller
      name="tel"
      control={control}
      defaultValue=""
      rules={{ required: "tel is required" }}
      render={({ field, fieldState: { error } }) => {
        return (
          <div>
            <input
              type="tel"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              name={field.name}
            />
            {error && <p>{error.message}</p>}
          </div>
        );
      }}
    ></Controller>
  );
}

~~~

## Yup

除内置的校验规则以外，react-hook-form还支持接入[Yup](https://github.com/jquense/yup)这样的库进行校验。

以Yup为例，开始前需安装@hookform/resolvers和yup。

~~~tsx
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  date: yup.string().required().min(8).max(18),
});

export function FormAddress() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

    // Not recommoned
    async defaultValues() {
      return {
        date: "2022-01-01",
      };
    },
  });

  return (
    <form action="#" onSubmit={handleSubmit((d) => console.log(d))}>
      <div>
        <input type="date" {...register("date")} />
        {/* @ts-ignore */}
        {errors.date && <p>{errors.date?.message}</p>}
      </div>
      <input type="submit" value="submit" />
    </form>
  );
}

~~~

__NOTE：__ 不能使用yup指定字段的默认值。






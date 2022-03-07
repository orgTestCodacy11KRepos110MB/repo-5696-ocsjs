import { ScriptOptions } from "@ocsjs/scripts";

/**
 * 表单生成器单项
 */
export interface FormItem {
    type: "text" | "password" | "checkbox" | "radio";
    title: string;
}

/**
 * 表单生成器
 */
export type Form<T extends keyof ScriptOptions> = Record<keyof ScriptOptions[T], FormItem>;

/**
 * 脚本的基础登录表单，使用 File.vue 可以自动生成表单内容
 */
export const scriptForms: Record<keyof ScriptOptions, any> = {
    "cx-login-other": {} as Form<"cx-login-other">,
    "cx-login-phone": {
        phone: {
            type: "text",
            title: "手机号",
        },
        password: {
            type: "password",
            title: "密码",
        },
    } as Form<"cx-login-phone">,
    "cx-login-phone-code": {
        phone: {
            type: "text",
            title: "手机号",
        },
    } as Form<"cx-login-phone-code">,
    "cx-login-school": {
        unitname: {
            type: "text",
            title: "机构名/学校名",
        },
        uname: {
            type: "text",
            title: "学号",
        },
        password: {
            type: "password",
            title: "密码",
        },
    } as Form<"cx-login-school">,
    "zhs-login-other": {} as Form<"zhs-login-other">,
    "zhs-login-phone": {
        phone: {
            type: "text",
            title: "手机号",
        },
        password: {
            type: "password",
            title: "密码",
        },
    } as Form<"zhs-login-phone">,
    "zhs-login-school": {
        schoolname: {
            type: "text",
            title: "学校名",
        },
        code: {
            type: "text",
            title: "学号",
        },
        password: {
            type: "password",
            title: "密码",
        },
    } as Form<"zhs-login-school">,
};
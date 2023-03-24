import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRemeberMe] = useState<boolean>(false);

  useEffect(() => {
    const isRememeber = localStorage.getItem("remember-me");
    setRemeberMe(Boolean(isRememeber));
  }, []);

  const changeEmail = (newVal: string) => {
    setEmail(newVal);
  };
  const changePassword = (newVal: string) => {
    setPassword(newVal);
  };

  const remember = (newVal: boolean) => {
    setRemeberMe(newVal);
  };

  const login = () => {
    // todo : 로그인 기능 구현
    if (rememberMe) {
      localStorage.setItem("remember-me", email);
    } else {
      localStorage.removeItem("remember-me");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-8 border-2 border-G-06 w-[520px] rounded-lg shadow-xl">
        <form className="flex flex-col w-full gap-4" action="#">
          <Input
            isLogin
            label="email"
            type="email"
            name="email"
            placeholder="camstudy@gooroomee.com"
            value={email}
            onChange={changeEmail}
          />
          <Input
            isLogin
            label="password"
            type="password"
            name="password"
            placeholder=""
            value={password}
            onChange={changePassword}
          />
          <div className="flex items-center justify-between">
            <Checkbox id="remember" label="Remember me" onChange={remember} />
            <Link
              href="/auth/signup"
              className="text-sm font-bold text-cams-blue-04"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            classes="rounded-lg w-full h-[50px] font-bold mt-4"
            onClick={login}
          >
            로그인
          </Button>
          <p className="text-sm font-bold text-gray-08">
            Don’t have an account yet?
            <Link
              href="/auth/signup"
              className="ml-2 font-bold text-cams-blue-04"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

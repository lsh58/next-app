import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const changeEmail = (newVal: string) => {
    setEmail(newVal);
  };
  const changePassword = (newVal: string) => {
    setPassword(newVal);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-8 border-2 border-G-06 w-[520px] rounded-lg shadow-xl">
        <h2 className="text-xl font-bold">계정 만들기</h2>
        <form className="flex flex-col w-full gap-4 mt-4" action="#">
          <Input
            label="email"
            type="email"
            name="email"
            placeholder="camstudy@gooroomee.com"
            value={email}
            onChange={changeEmail}
          />
          <Input
            label="password"
            type="password"
            name="password"
            placeholder=""
            value={password}
            onChange={changePassword}
          />
          <Input
            label="checkPassword"
            type="password"
            name="checkPassword"
            placeholder=""
            value={checkPassword}
            onChange={setCheckPassword}
          />
          <Button
            type="submit"
            classes="rounded-lg w-full h-[50px] font-bold mt-4"
          >
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

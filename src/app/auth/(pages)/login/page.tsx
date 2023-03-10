"use client";

import Link from "next/link";
import AuthLayout from "../../layout";
import { AuthBox, AuthBoxContainer, AuthBoxHeader, AuthForm, InputGroup, Input, RecoverLink, BtnContainer, Button, BottomInfo, Line, H2 } from "../../resources/components/auth-components";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { ChangeEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);


  const submit = async () => {
    setLoading(true);

    

    console.log(email, password, loading)
  };

  return (
    <AuthBoxContainer>
      <AuthBox>
        <AuthBoxHeader>
          <H2>Bem vindo ao Adagio</H2>
          <span>Digite seu email e sua senha para entrar </span>
        </AuthBoxHeader>

        <AuthForm>
          <InputGroup>
            <Input
              name="email"
              id="email"
              placeholder="seu e-mail"
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <MdOutlineAlternateEmail />
          </InputGroup>
          <InputGroup>
            <Input
              name="password"
              id="password"
              placeholder="senha"
              minLength={8}
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <RiLockPasswordLine />
          </InputGroup>
          <RecoverLink>
            <Link href={"/recover"}>Recuperar senha</Link>
          </RecoverLink>
          <BtnContainer>
            <Button onClick={(e) => submit()}>Entrar</Button>
          </BtnContainer>
        </AuthForm>
      </AuthBox>

      <BottomInfo>
        <Line />
        <span>
          Ainda não tem uma conta? <Link href={"/auth/register"}>Crie uma agora</Link>
        </span>
      </BottomInfo>
    </AuthBoxContainer>
    );
}

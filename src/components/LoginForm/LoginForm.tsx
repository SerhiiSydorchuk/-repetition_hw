import React from 'react';
import {useForm} from "react-hook-form";
import {IUserLogin} from "../../Model/IUserLogin";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidation} from "../../validations/loginValidation";
import {loginService} from "../../services/api.service";


const LoginForm = () => {
  const {register ,
      handleSubmit,
          }
      =  useForm<IUserLogin>({mode:'all' , resolver: joiResolver(loginValidation)})

    const login = async (dataForm:IUserLogin) =>{
        console.log(await loginService(dataForm));


    }
    return (
        <form onSubmit={handleSubmit(login)}>
            <label>
                <input placeholder={'login'} type={"text"} {...register('username')}/>

            </label>
            <label><input placeholder={'password'} type={"text"} {...register('password')}/>

            </label>
            <label><input placeholder={'expiresInMins'} type={"number"} {...register('expiresInMins')}/></label>
            <button >Login</button>
        </form>
    );
};

export default LoginForm;
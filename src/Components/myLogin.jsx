import React from 'react';
import validationSchema from '../utils/validationSchema';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function MyLogin() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      senha: '',
    },
    resolver: yupResolver(validationSchema),
  });

  //
  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            id="email"
            name="email"
            type="email"
            className="input"
          />
          <span>{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input
            {...register('senha')}
            id="senha"
            name="senha"
            type="password"
            className="input"
          />
          <span>{errors.senha?.message}</span>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default MyLogin;

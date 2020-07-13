import React, { useRef, useCallback, useMemo } from 'react';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import { isAfter, parseISO } from 'date-fns';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ISignInCredentials, useAuth } from '../../../../hooks/auth';
import { useToast } from '../../../../hooks/toast';

import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import logo from '../../../../assets/logo.svg';
import authenticateBackground from '../../../../assets/authenticate-background.svg';
import Alert from '../../../../components/Alert';

const Authenticate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { signIn, attempts, clearAttempts } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInCredentials) => {
      try {
        formRef.current?.setErrors([]);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        clearAttempts();

        addToast({
          type: 'success',
          title: 'Autenticado com sucesso!',
          description: `Seja bem vindo novamente!`,
        });

        history.push('/dashboard/statistics');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao realizar a autenticação, tente novamente.',
        });
      }
    },
    [addToast, signIn, clearAttempts, history],
  );

  const canTryAgain = useMemo(() => {
    if (attempts.length >= 3) {
      const attempt = attempts[attempts.length - 1];

      const { endsIn } = attempt;

      if (isAfter(new Date(), parseISO(String(endsIn)))) {
        clearAttempts();

        return true;
      }

      return false;
    }

    return true;
  }, [attempts, clearAttempts]);

  return (
    <>
      <img src={authenticateBackground} alt="Authenticate Background" />

      <main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" />

          <h1>Faça seu logon</h1>

          <Input
            name="email"
            type="email"
            icon={FiMail}
            placeholder="E-mail"
            disabled={!canTryAgain}
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha secreta"
            disabled={!canTryAgain}
          />

          <Alert type="error" isVisible={!canTryAgain}>
            Você excedeu o limite de tentativas.
          </Alert>

          <Button type="submit" disabled={!canTryAgain}>
            {canTryAgain ? 'Entrar no sistema' : 'Aguarde 5 minutos'}
          </Button>

          <Link to="/">
            <FiArrowLeft color="#f4ede8" size={20} />
            Voltar
          </Link>
        </Form>
      </main>
    </>
  );
};

export default Authenticate;

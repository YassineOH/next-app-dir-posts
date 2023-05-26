'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import Input, { TextArea } from './Input';

const formValidation = z.object({
  title: z.string().nonempty('the title is required'),
  body: z.string().nonempty('the body is required'),
});

type FormType = z.infer<typeof formValidation>;

function FormPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      title: '',
      body: '',
    },
    resolver: zodResolver(formValidation),
    mode: 'onBlur',
  });

  const handleMutate: SubmitHandler<FormType> = async (values) => {
    const { data } = await axios.post('/api/posts', {
      body: values.body,
      title: values.body,
    });
    console.log(data);
  };

  return (
    <form
      className='flex flex-col gap-y-4'
      onSubmit={handleSubmit(handleMutate)}
    >
      <Input label='title' {...register('title')} err={errors.title?.message} />
      <TextArea label='body' {...register('body')} err={errors.body?.message} />
      <button
        className='w-full rounded-md bg-teal-400 py-2 transition-all duration-300 ease-linear hover:scale-95'
        type='submit'
      >
        submit
      </button>
    </form>
  );
}
export default FormPost;

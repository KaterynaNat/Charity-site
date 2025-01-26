import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Form.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const schema = yup.object({
  name: yup.string().min(5, 'Ім’я має бути не коротше 5 символів').required('Це поле обов’язкове'),
  email: yup.string().email('Некоректна електронна пошта').required('Це поле обов’язкове'),
  phone: yup
    .string()
    .matches(/^\+[0-9]{1,12}$/, 'Номер має починатися з "+" і містити не більше 12 цифр')
    .required('Це поле обов’язкове'),
  description: yup
    .string()
    .min(5, 'Опис має містити щонайменше 5 слів')
    .required('Це поле обов’язкове'),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert('Вітаємо! Вашу інформацію успішно надіслано.');
      } else {
        alert('Виникла помилка. Спробуйте пізніше.');
      }
    } catch {
      alert('Виникла помилка. Спробуйте пізніше.');
    }
  };

  return (
<section className={styles.heroSection}>
  <div className={styles.heroContent}>
    <h1>Допомагаємо українцям освоїтися у Великій Британії</h1>
    <h2>Освіта, емоційний комфорт і соціальна допомога для переселенців</h2>
  </div>
  <div className={styles.formContainer}>
    <h2>Потребуєте нашої допомоги?</h2>
    <p>Заповніть форму, і ми вам зателефонуємо якомога швидше.</p>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>Ваше ім'я</label>
        <input {...register('name')} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div>
        <label>Електронна пошта</label>
        <input {...register('email')} />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div>
        <label>Номер телефону</label>
        <input {...register('phone')} />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>
      <div>
        <label>Коротко опишіть вашу проблему</label>
        <textarea {...register('description')} />
        {errors.description && <p className={styles.error}>{errors.description.message}</p>}
      </div>
      <button type="submit">Надіслати</button>
    </form>
  </div>
</section>
  );
}

export default Form;
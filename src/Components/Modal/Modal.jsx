import React, { useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import "./index.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Logo } from '../Logo';
import { closeModal } from '../../slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const Modal = () => {

    const { isOpen } = useSelector((store) => store.modal)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


    return (
        <div onClick={() => dispatch(closeModal())} className='overlay'>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className='modalContainer'>
                <div>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            agree: false
                        }}
                        validationSchema={
                            Yup.object({
                                name: Yup.string().required("Adınızı daxil edin"),
                                email: Yup.string().email().required("Bir e-mail daxil edin"),
                                password: Yup.string()
                                    .required('Şifrə daxil edin')
                                    .min(8, 'Şifrə qısadır, ən az 8 simvoldan istifadə edin')
                                    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/, 'Şifrədə ən az bir rəqəm, bir xüsusi simvol və bir böyük hərf olmalıdır.'),
                                agree: Yup.boolean().oneOf([true], "Şərtlər qəbul edilməlidir!")
                            })
                        }
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            axios.post('https://6579eae11acd268f9afa6395.mockapi.io/test', values)
                                .then(response => {
                                    console.log('API response:', response.data);
                                    setSubmitting(false);
                                    resetForm();
                                })
                                .catch(error => {
                                    console.error('API error:', error);
                                    setSubmitting(false);
                                });
                        }}
                    >
                        {({ dirty, isSubmitting }) => (
                            <Form>
                                <h1>Qeydiyyat</h1>
                                <div className="form-group">
                                    <Field className="form-inp" id='name' type="text" name="name" placeholder='Adınız' />

                                    <ErrorMessage className='input-feedback' name="name" component="div" />
                                </div>

                                <div className="form-group">
                                    <Field className="form-inp" id='email' type="email" name="email" placeholder='E-mail' />

                                    <ErrorMessage className='input-feedback' name="email" component="div" />
                                </div>
                                <div className="form-group">

                                    <Field className="form-inp" id='password' type="password" name="password" placeholder='Şifrə' />

                                    <ErrorMessage className='input-feedback' name="password" component="div" />
                                </div>

                                <div className="form-items">
                                    <Field type="checkbox" name="agree" />
                                    <label htmlFor="agree">Qaydaları qəbul edirəm.</label>

                                </div>
                                <ErrorMessage className='input-feedback' name="agree" component="div" />

                                <button type='submit' disabled={!dirty || isSubmitting}>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='modalRight'>
                    <p className='closeBtn' onClick={() => dispatch(closeModal())}><IoClose /></p>
                    <div className='content'>
                        <Logo />
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Modal;

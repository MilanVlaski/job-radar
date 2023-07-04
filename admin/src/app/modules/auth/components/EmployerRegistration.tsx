import React from 'react';
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";
import clsx from "clsx";

const initialValues = {
    firstName: '',
    lastName: '',
    userEmail: '',
    password: '',
    confirmPassword: '',

    companyName: '',
    industry: '',
    numOfEmployees: '',
    city: '',
    address: '',
    companyEmail: '',
    phone: '',
    fax: ''
}

const registrationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    lastName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Last name is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Password confirmation is required')
        .when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
        }),
    companyName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Company name is required'),
    industry: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Max 50 symbols')
        .required('Type of industry is required'),
    numOfEmployees: Yup.number()
        .min(1, 'Minimum one employee')
        .max(15000000,'Too many employees'),
    city: Yup.string()
        .min(2, 'Minimum 2 symbols')
        .max(50,'Max 50 symbols'),
    address: Yup.string()
        .min(3, 'Minimum 2 symbols')
        .max(50,'Max 50 symbols'),
    companyEmail: Yup.string()
        .min(3, 'Minimum 2 symbols')
        .max(50,'Max 50 symbols')
        .email('Wrong email format'),
    phone: Yup.string()
        .min(4, 'Minimum 4 symbols')
        .max(20, 'Max 20 symbols'),
    fax: Yup.string()
        .min(4, 'Minimum 4 symbols')
        .max(20, 'Max 20 symbols')
})

const EmployerRegistration = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: () => {
            //idi na login?
        }
    });

    return (
        <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            onSubmit={formik.handleSubmit}
            id='kt_login_signup_form'
        >
            <div className='mb-10 text-center'>
                <h1 className='text-dark mb-3'>Create an Account</h1>

                <div className='text-gray-600 fw-bold fs-4'>
                    Already have an account?
                    <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
                        Log in
                    </Link>
                </div>

            </div>

            <div className="container">
                <div className='row'>

                    <div className='col-md-6'>
                        <div className="row">
                            <h2 className='text-center'>User information</h2>
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>First name</label>
                                <input
                                    placeholder='First name'
                                    type='text'
                                    autoComplete='off'
                                    {...formik.getFieldProps('firstName')}
                                    className={clsx(
                                        'form-control form-control-lg form-control-solid',
                                        {
                                            'is-invalid': formik.touched.firstName && formik.errors.firstName,
                                        },
                                        {
                                            'is-valid': formik.touched.firstName && !formik.errors.firstName,
                                        }
                                    )}
                                />
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>
                                            <span role='alert'>{formik.errors.firstName}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
                                <input
                                    placeholder='Last name'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control form-control-lg form-control-solid'
                                    {...formik.getFieldProps('lastName')}
                                />
                            </div>
                        </div>
                        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
                        <input
                            placeholder='Email'
                            type='email'
                            autoComplete='off'
                            className='form-control form-control-lg form-control-solid'
                            {...formik.getFieldProps('email')}
                        />
                        <label className='form-label fw-bolder text-dark fs-6'>Password</label>
                        <input
                            placeholder='Password'
                            type='password'
                            autoComplete='off'
                            className='form-control form-control-lg form-control-solid'
                            {...formik.getFieldProps('password')}
                        />
                        {/*Password meter*/}
                        <div
                            className='d-flex align-items-center my-3'
                            data-kt-password-meter-control='highlight'
                        >
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
                        </div>
                        <p className='text-muted'>
                            Use 8 or more characters with a mix of letters, numbers & symbols.
                        </p>
                        <label className='form-label fw-bolder text-dark fs-6'>Confirm password</label>
                        <input
                            placeholder='Password confirmation'
                            type='password'
                            autoComplete='off'
                            className='form-control form-control-lg form-control-solid'
                            {...formik.getFieldProps('confirmPassword')}
                        />
                    </div>


                    <div className='col-md-6'>

                        <h2 className='text-center'>Company information</h2>
                        <label className='form-label fw-bolder text-dark fs-6'>Company name</label>
                        <input
                            placeholder='Company name'
                            type='text'
                            autoComplete='off'
                            className='form-control form-control-lg form-control-solid'
                            {...formik.getFieldProps('companyName')}
                        />

                        <div className="row">
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>Industry</label>
                                <input
                                    placeholder='What do you do?'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control form-control-lg form-control-solid'
                                    {...formik.getFieldProps('industry')}
                                />
                            </div>
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>No. employees</label>
                                <input
                                    placeholder='No. employees'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control form-control-lg form-control-solid'
                                    {...formik.getFieldProps('numOfEmployees')}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>City</label>
                                <input
                                    placeholder='City'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control form-control-lg form-control-solid'
                                    {...formik.getFieldProps('city')}
                                />
                            </div>
                            <div className='col-sm-6'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Address</label>
                                    <input
                                        placeholder='Address'
                                        type='text'
                                        autoComplete='off'
                                        className='form-control form-control-lg form-control-solid'
                                        {...formik.getFieldProps('address')}
                                    />
                            </div>
                        </div>

                        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
                        <input
                            placeholder='Email'
                            type='email'
                            autoComplete='off'
                            className='form-control form-control-lg form-control-solid'
                            {...formik.getFieldProps('companyEmail')}
                        />
                        <div className="row">
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>Phone</label>
                                <input
                                    placeholder='Phone'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control form-control-lg form-control-solid'
                                    {...formik.getFieldProps('phone')}
                                />
                            </div>
                            <div className='col-sm-6'>
                                <label className='form-label fw-bolder text-dark fs-6'>Fax</label>
                                <input
                                    placeholder='Fax'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control form-control-lg form-control-solid'
                                    {...formik.getFieldProps('fax')}
                                />
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary btn-block mt-4' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    );
};

export default EmployerRegistration;
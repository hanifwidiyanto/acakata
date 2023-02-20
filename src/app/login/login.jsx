"use client"

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'


function Login() {
    const onSubmit = async (values, actions) => {
        // push db
        console.log('submitted')
    }

    const SchemaForm = yup.object().shape({
        dd: yup.string().required('Tanggal Lahir Kamu Harus Diisi Ya!'),
        month: yup.string().required('Bulan Lahir Kamu Harus Diisi Ya!'),
        year: yup.string().required('Tahun Lahir Kamu Harus Diisi Ya!'),
    })

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            dd: '',
            month: '',
            year: '',
        },
        validationSchema: SchemaForm,
        onSubmit
    })
    console.log(values)
    return (
        <>
            <motion.div
                initial={{ y: "200%" }}
                animate={{ y: "0%" }}
            >
                <div className='bg-container-login w-full h-full bg-contain bg-no-repeat bg-center'>
                    <div className='flex justify-center w-full pt-5'>
                        <h1 className='font-cubano text-3xl text-white outline-title'>login</h1>
                    </div>

                    <div className='px-10 pt-8'>
                        <h2 className='outline-title text-white font-cubano text-lg'>Tanggal Lahir</h2>
                        <form className='mt-3' autoComplete='off' onSubmit={handleSubmit}>
                            <div className='flex w-full justify-between'>
                                <select type="text" className='w-10 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu appearance-none' placeholder='01' name="dd" onChange={handleChange} onBlur={handleBlur}>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select type="text" className='w-24 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu appearance-none' placeholder='Januari' name="month" onChange={handleChange} onBlur={handleBlur}>
                                    <option value="Januari">Januari</option>
                                    <option value="Februari">Februari</option>
                                    <option value="Maret">Maret</option>
                                    <option value="April">April</option>
                                    <option value="Mei">Mei</option>
                                    <option value="Juni">Juni</option>
                                    <option value="Juli">Juli</option>
                                    <option value="Agustus">Agustus</option>
                                    <option value="September">September</option>
                                    <option value="Oktober">Oktober</option>
                                    <option value="Novemeber">Novemeber</option>
                                    <option value="Desember">Desember</option>
                                </select>
                                <select type="text" className='w-12 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu appearance-none' placeholder='2008' name="year" onChange={handleChange} onBlur={handleBlur}>
                                    <option value="2008">2008</option>
                                    <option value="2009">2009</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                            <div className='flex justify-center w-full mt-5 active:scale-90 duration-100 cursor-pointer'>
                                <div className='w-fit'>
                                    <button type='submit' className='bg-btn-login font-cubano w-[110px] h-[36px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-lg'>masuk</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className='px-6 pt-2 flex justify-between w-full'>
                    <span className='font-cubano outline-title text-white text-lg '>belum punya akun? </span>
                    <div className='active:scale-90 duration-100 cursor-pointer'>

                        <Link href="./daftar" className='bg-btn-nologin font-cubano w-[70px] h-[24px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title  text-sm'>daftar</Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Login
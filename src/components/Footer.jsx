import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer pt-5 '>
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex flex-column">
            <Link className='d-flex'>
              <div className='footer-logo d-flex align-items-center justify-content-center'>ع</div>
              <span className='logo-name pe-2 pt-2'>عدسة</span>
            </Link>
            <p className='footer-content pt-2'>
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className=' d-flex gap-2'>
              <Link className='social-link d-flex justify-content-center align-items-center'>
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link className='social-link d-flex justify-content-center align-items-center'>
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link className='social-link d-flex justify-content-center align-items-center'>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link className='social-link d-flex justify-content-center align-items-center'>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>


          <div className="col-md-3">
            <h3>
              <div className="divider"></div>
              <span className='pe-2'>استكشف</span>
            </h3>
            <div className="pt-3">
              <Link className='links' >
              <i className="fas fa-angle-left"></i>
                الرئيسية 
              </Link>
              <Link className='links' to='/blog'>
               <i className="fas fa-angle-left"></i>
                المدونة 
              </Link>
              <Link className='links' to='/about'>
              <i className="fas fa-angle-left"></i>
                من نحن 
              </Link>

            </div>
          </div>
           <div className="col-md-3">
            <h3>
              <div className="divider"></div>
              <span className='pe-2'>التصنيفات</span>
            </h3>
            <div className=" pt-3">
              <Link className='links' >
              <i className="fas fa-angle-left"></i>
              إضاءة
              </Link>
              <Link className='links'>
               <i className="fas fa-angle-left"></i>
               بورتريه
              </Link>
              <Link className='links'>
              <i className="fas fa-angle-left"></i>
                مناظر طبيعية
              </Link>
              <Link className='links'>
               <i className="fas fa-angle-left"></i>
               تقنيات
              </Link>

            </div>
          </div>
          <div className="col-md-3">
             <h3>
              <div className="divider"></div>
              <span className='pe-2'> ابقي علي اطلاع</span>
            </h3>
            <p className='footer-content p-3'>
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

          <form >
            <input type="email" placeholder='ادخل البريد الالكتروني' />
    
            <button className="btn btn-submit rounded-5 mt-2" to="/blog">اشترك</button>
          </form>
          </div>
        </div>
        <div className="divider1 mt-5">

          <div className='pt-5 d-flex justify-content-between'>
            <p className='footer-content'>© 2026 عدسة. صنع بكل <i className='fas fa-heart heart-icon'></i> جميع الحقوق محفوظة.</p>
             <div className='d-flex gap-2'>
               <Link className='links' >سياسة الخصوصية  </Link>
               <Link className='links' > شروط الخدمة </Link>

             </div>


          </div>

        </div>
      </div>
    </footer>
  )
}

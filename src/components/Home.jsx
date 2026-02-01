import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
export default function Home() {
  const selectedArticles = [
  {
    id: 1,
    image: "../src/assets/img29.jpg",
    badge: "إضاءة",
    readTime: "8 دقائق للقراءة",
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    description: "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    authorImg: "../src/assets/img1.jpg",
    authorName: "سالم أحمد",
    date: "15 يناير 2026",
  },
  {
    id: 2,
    image: "../src/assets/img30.jpg",
    badge: "بورتريه",
    readTime: "6 دقائق للقراءة",
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    description: "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    authorImg: "../src/assets/img32.jpg",
    authorName: "محمد علي",
    date: "12 يناير 2026",
  },
  {
    id: 3,
    image: "../src/assets/img31.jpg",
    badge: "مناظر طبيعية",
    readTime: "10 دقائق للقراءة",
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    description: "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    authorImg: "../src/assets/img33.jpg",
    authorName: "إبراهيم حسن",
    date: "10 يناير 2026",
  },
]

const recentArticles = [
  {
    id: 1,
    image: "../src/assets/img34.jpg",
    badge: "تقنيات",
    readTime: "7 دقائق للقراءة",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    description: "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO.",
    authorImg: "../src/assets/img4.jpg",
    authorName: "داود خالد",
    authorJob: "مدرب تصوير",
  },
  {
    id: 2,
    image: "../src/assets/img35.jpg",
    badge: "تقنيات",
    readTime: "9 دقائق للقراءة",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    description: "تعلم القواعد الأساسية للتكوين التي يستخدمها المصورون المحترفون.",
    authorImg: "../src/assets/img5.jpg",
    authorName: "ليث محمود",
    authorJob: "فنان بصري",
  },
  {
    id: 3,
    image: "../src/assets/img36.jpg",
    badge: "معدات",
    readTime: "8 دقائق للقراءة",
    title: "تصوير الهاتف المحمول: كيف تلتقط صورًا احترافية بهاتفك",
    description: "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    authorImg: "../src/assets/img6.jpg",
    authorName: "جمال عبدالله",
    authorJob: "مصور ومراجع تقني",
  },
]
  return (

    <main>
      <section className='explore grid-bg pt-5 '>
        <div className="container">
          <div className='d-flex justify-content-center mt-5'>
            <span className="about-badge">مرحباً بك في عدسة</span>
          </div>
          <h1 className="home-title">
            اكتشف <span>فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className='explore-content d-flex justify-content-center pt-4 m-auto'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>

          <div className='m-auto text-center d-flex justify-content-center align-items-center gap-3 pt-4 pb-5'>
            <Link to='/blog'>
              <button className='btn btn-explore rounded-5'> استكشف المقالات   <i className='fas  fa-arrow-left-long'></i>  </button>

            </Link>
            <Link to='/about'>
              <button className='btn btn-know rounded-5'> <i className='fas  fa-circle-exclamation'></i>   اعرف المزيد </button>
            </Link>
          </div>

          <div className="explore-stats">

            <div className="explore-card ">
              <i className="fas fa-newspaper d-flex justify-content-center"></i>
              <h3>50+</h3>
              <p>مقالة</p>
            </div>
            <div className="explore-card">
              <i className="fas fa-users  d-flex justify-content-center"></i>
              <h3>  +10 الف</h3>
              <p> قارئ</p>
            </div>
            <div className="explore-card">
              <i className="fas fa-folder-open  d-flex justify-content-center"></i>
              <h3>4</h3>
              <p> تصنيفات</p>
            </div>

            <div className="explore-card">
              <i className="fas fa-pen-nib  d-flex justify-content-center"></i>
              <h3>6</h3>
              <p>كاتب</p>
            </div>

          </div>
        </div>
      </section>
 
      <section className='selected pt-5'>
        <div className="container">
          <span className="about-badge">مميز</span>
          <h2> مقالات مختارة</h2>
          <div className='d-flex justify-content-between start'>
            <p>محتوى منتقى لبدء رحلة تعلمك</p>
            <Link to='/blog'>
              <button className='btn btn-show '>عرض الكل <i className='fas fa-arrow-left-long'></i></button>
            </Link>
          </div>

          {selectedArticles.map(article => (
            <Link to="/" className="article-link" key={article.id}>
              <div className="article-card row g-0">
                <div className="col-md-6 article-image">
                  <span><i className='fas fa-star'></i> مميز</span>
                  <img src={article.image} alt="post" />
                </div>
                <div className="col-md-6 article-content">
                  <div className="badge-time">
                    <span className="badge">{article.badge}</span>
                    <span className="read"><i className='fa-regular fa-clock'></i> {article.readTime}</span>
                  </div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <div className="author d-flex justify-content-between">
                    <div className="d-flex">
                      <img src={article.authorImg} alt="author" className='mt-3' />
                      <div>
                        <h4 className='pt-4'>{article.authorName}</h4>
                        <h5>{article.date}</h5>
                      </div>
                    </div>
                    <div className="read-more">
                      اقرأ المقال
                      <i className='fas fa-arrow-left-long pe-2'></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='recent pt-5'>
        <div className="container">
          <span className="recent-badge">مميز</span>
          <h2 className='recent-title'>أحدث المقالات</h2>
          <div className='d-flex justify-content-between start'>
            <p>محتوى جديد طازج من المطبعة</p>
            <Link to='/blog' className='recent-artic'>
              عرض جميع المقالات <i className='fas fa-arrow-left-long'></i>
            </Link>
          </div>
          <div className="row g-4 pt-5">
            {recentArticles.map(article => (
              <div className="col-md-4" key={article.id}>
                <Link to="/" className="post-link">
                  <div className="post-card">
                    <div className="post-img">
                      <span className="post-badge">{article.badge}</span>
                      <img src={article.image} />
                    </div>
                    <div className="post-body">
                      <div className="post-time"><i className="fa-regular fa-clock"></i> {article.readTime}</div>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <div className="post-author">
                        <img src={article.authorImg} />
                        <div>
                          <h5>{article.authorName}</h5>
                          <span>{article.authorJob}</span>
                        </div>
                      </div>
                      <div className="post-arrow">
                        <i className="fas fa-chevron-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='subscribe pt-5'>
        <div className="container d-flex justify-content-center  py-5">
          <div className="subscribe-card text-center pt-5">

            <div className="subscribe-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>

            <h3>
              اشترك في <span>نشرتنا الإخبارية</span>
            </h3>

            <p>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <div className="subscribe-form d-flex justify-content-center gap-2 mt-5">
              <input type="email" placeholder="بريدك الإلكتروني" />
              <button className="btn-submit ">اشترك الآن</button>
            </div>

            <div className="subscriber d-flex justify-content-center align-items-center gap-3 mt-4">

              <div className="subscriber-images">
                <img src="../src/assets/img3.jpg" />
                <img src="../src/assets/img2.jpg" />
                <img src="../src/assets/img1.jpg" />
              </div>

              <span>انضم لـ +10,000 مصور</span>
              <span>بدون إزعاج</span>
              <span>إلغاء الاشتراك في أي وقت</span>

            </div>

          </div>
        </div>


      </section>
    </main>
  )
}

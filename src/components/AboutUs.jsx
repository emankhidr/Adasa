import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'

export default function AboutUs() {

  const stats = [
    { icon: "fas fa-users", number: "+2M", text: "قارئ شهريًا" },
    { icon: "fas fa-newspaper", number: "5+00", text: "مقالة منشورة" },
    { icon: "fas fa-pen-nib", number: "+50", text: "كاتب خبير" },
    { icon: "fas fa-book", number: "+15", text: "تصنيف" }
  ];

  const rates = [
    { icon: "fas fa-bullseye", title: "الجودة أولاً", text: "محتوى مدروس ومكتوب بخبرة" },
    { icon: "fas fa-bolt", title: "تركيز عملي", text: "أمثلة واقعية يمكنك تطبيقها اليوم" },
    { icon: "fas fa-handshake", title: "المجتمع", text: " تعلم مع آلاف المصورين" },
    { icon: "fas fa-arrows-rotate", title: "دائماً محدث", text: "أحدث الاتجاهات وأفضل الممارسات" }
  ];

  const teamMembers = [
    { img: "img1.jpg", name: "سالم أحمد", role: "مصور محترف" },
    { img: "img2.jpg", name: "محمد علي", role: "مصو ر بورتريه" },
    { img: "img3.jpg", name: "إبراهيم حسن", role: "مصور طبيعة" },
    { img: "img4.jpg", name: "داود خالد", role: "مدرب تصوير" },
    { img: "img5.jpg", name: "ليث محمود", role: "فنان بصري" },
    { img: "img6.jpg", name: "جمال عبدالله", role: "مصو ر ومراجع تقني" },
    { img: "img7.jpg", name: "خالد الفيصل", role: "مصور فلكي" },
    { img: "img8.jpg", name: "نادر سعيد", role: "مصور شوارع" },
    { img: "img9.jpg", name: "هاني الشمري", role: "مصور طعام" },
    { img: "img10.jpg", name: "عمر الراشد", role: "مصور حياة برية" },
    { img: "img11.jpg", name: "فارس العلي", role: "فنان فوتوغرافي" },
    { img: "img12.jpg", name: "سامي الحربي", role: "خبير تعديل صور" },
    { img: "img13.jpg", name: "رامي الخطيب", role: "مصور ماكرو" },
    { img: "img14.jpg", name: "باسم المصري", role: "مصور فني" },
    { img: "img15.jpg", name: "منصور الزهراني", role: "مصور زفاف" },
    { img: "img16.jpg", name: "فيصل الدوسري", role: "مصور جوي" },
    { img: "img17.jpg", name: "لؤي الصالح", role: "مصور تجاري" },
    { img: "img18.jpg", name: "طارق النعيمي", role: "مصور معماري" },
    { img: "img19.jpg", name: "أحمد الشهري", role: "مصور رياضي" },
    { img: "img20.jpg", name: "ماجد القحطاني", role: "مصور استديو" },
    { img: "img21.jpg", name: "ياسر العتيبي", role: "مصور رحالة" },
    { img: "img22.jpg", name: "دحام الحسيني", role: "فنان بصري" },
    { img: "img23.jpg", name: "نايف المطير", role: "مصور مواليد" },
    { img: "img24.jpg", name: "عبدالله الغامدي", role: "مصور عقارات" },
    { img: "img25.jpg", name: "كريم الفهد", role: "خبير تقني" },
    { img: "img26.jpg", name: "سلطان الراجحي", role: "فنان تصوير" },
    { img: "img27.jpg", name: "فهد السبيعي", role: "مراجع معدات" },
    { img: "img28.jpg", name: "راشد الجاسر", role: "فنان بصري" }
  ];

  return (
    <main>
      <section className="about grid-bg">
        <div className="container text-center">
          <span className="about-badge">من نحن</span>
          <h1 className="about-title">مهمتنا هي <span>الإعلام والإلهام</span></h1>
          <p className="about-content">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
            لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم
            من خلال محتوى عالي الجودة.
          </p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <i className={stat.icon}></i>
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='rate-us'>
        <div className="container">
          <h2 className="rate-title">
            <span className="line"></span>
            <span className="title-text">قيمنا</span>
            <span className="line"></span>
          </h2>
          <p className='rate-content'>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          <div className="about-rates pt-5">
            {rates.map((rate, index) => (
              <div key={index} className="rate-card">
                <i className={`d-flex justify-content-center align-items-center ${rate.icon}`}></i>
                <h3>{rate.title}</h3>
                <p>{rate.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='our-team pt-5'>
        <div className="container">
          <div className='d-flex justify-content-center'>
            <span className="about-badge m-auto text-center "> فريقنا</span>
          </div>
          <h2 className="rate-title mt-4">
            <span className="title-text ">تعرف على كتابنا</span>
          </h2>
          <p className='rate-content'>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>

          <div className="row g-4 pt-5 team">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="team-card text-center">
                  <div className="team-img">
                    <img src={`../src/assets/${member.img}`} alt="" />
                    <span className="check-icon">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <Link className='social-link d-flex justify-content-center align-items-center'>
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link className='social-link d-flex justify-content-center align-items-center'>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link className='social-link d-flex justify-content-center align-items-center'>
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='contact pt-5'>
        <div className="container">
          <h2 className='d-flex justify-content-center'>لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className='d-flex justify-content-center '>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>
          <div className='m-auto text-center d-flex justify-content-center align-items-center gap-3 pt-4 pb-5'>
            <button className='btn btn-contact'><i className='fas fa-envelope'></i> تواصل معنا</button>
            <Link to='/blog'>
              <button className='btn btn-search'>تصفح المقالات</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

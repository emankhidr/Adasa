import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './BlogDetails.css'


const articles = [
  {
    id: 1,
    title: "جمال المناظر الطبيعية بعدسة احترافيةإتقان تصوير الساعة الذهبية: دليل شامل",
    category: " إضاءة",
    readTime: " 5 دقائق للقراءة",
    description: "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    image: "../src/assets/img31.jpg",
    authorImg: "../src/assets/img1.jpg",
    authorName: "سالم أحمد ",
    authorJob: " مصور محترف",
  },
  {
    id: 2,
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    category: "بورتريه",
    readTime: "6 دقائق للقراءة",
    description: "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    image: "../src/assets/img30.jpg",
    authorImg: "../src/assets/img2.jpg",
    authorName: "محمد علي",
    authorJob: " مصور بورتريه",
  },
  {
    id: 3,
    title: "  المناظر الطبيعية: من المبتدئ إلى المحترف",
    category: "مناظر طبيعية",
    readTime: "10 دقائق للقراءة",
    description: "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    image: "../src/assets/img31.jpg",
    authorImg: "../src/assets/img3.jpg",
    authorName: " ابراهيم حسن",
    authorJob: "مصور طبيعة",
  },
  {
    id: 4,
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    category: "تقنيات",
    readTime: "7 دقائق للقراءة",
    description: "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO.",
    image: "../src/assets/img34.jpg",
    authorImg: "../src/assets/img4.jpg",
    authorName: "داود خالد",
    authorJob: "مدرب تصوير",
  },
  {
    id: 5,
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    category: "تقنيات",
    readTime: "9 دقائق للقراءة",
    description: "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    image: "../src/assets/img35.jpg",
    authorImg: "../src/assets/img5.jpg",
    authorName: "ليث محمود",
    authorJob: "مصور محترف",
  },
  {
    id: 6,
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    category: "معدات",
    readTime: "8 دقائق للقراءة",
    description: "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    image: "../src/assets/img36.jpg",
    authorImg: "../src/assets/img6.jpg",
    authorName: "جمال عبدالله",
    authorJob: "مصور ومراجع تقني",
  },
  {
    id: 7,
    title: "تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",
    category: " إضاءة",
    readTime: " 11 دقائق للقراءة",
    description: "تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",
    image: "../src/assets/img37.jpg",
    authorImg: "../src/assets/img7.jpg",
    authorName: " خالد فيصل  ",
    authorJob: " مصور فلكي",
  },
  {
    id: 8,
    title: "تصوير الشارع: فن التقاط الحياة اليومية",
    category: "بورتريه",
    readTime: "7 دقائق للقراءة",
    description: "اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",
    image: "../src/assets/img38.jpg",
    authorImg: "../src/assets/img8.jpg",
    authorName: "مادر سعيد ",
    authorJob: " مصور شوارع",
  },
  {
    id: 9,
    title: " تصوير الطعام: كيف تجعل أطباقك تبدو شهية   ",
    category: " تقنيات",
    readTime: "10 دقائق للقراءة",
    description: "تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",
    image: "../src/assets/img39.jpg",
    authorImg: "../src/assets/img9.jpg",
    authorName: "  هاني الشمري",
    authorJob: "مصور طعام",
  },
  {
    id: 10,
    title: "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",
    category: "مناظر طبيعية",
    readTime: "10 دقائق للقراءة",
    description: "دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",
    image: "../src/assets/img40.jpg",
    authorImg: "../src/assets/img10.jpg",
    authorName: " عمر الراشد",
    authorJob: " مصور حياة برية",
  },
  {
    id: 11,
    title: "التصوير بالأبيض والأسود: فن الضوء والظل",
    category: "تقنيات",
    readTime: "9 دقائق للقراءة",
    description: " اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",
    image: "../src/assets/img41.jpg",
    authorImg: "../src/assets/img11.jpg",
    authorName: "فارس العلي  ",
    authorJob: "فنان فوتوغرافي ",
  },
  {
    id: 12,
    title: " أساسيات تعديل الصور في Lightroom",
    category: "معدات",
    readTime: "12 دقائق للقراءة",
    description: "تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",
    image: "../src/assets/img42.jpg",
    authorImg: "../src/assets/img12.jpg",
    authorName: "سامي حربي ",
    authorJob: "خبير تعديل صور  ",
  },
  {
    id: 13,
    title: "عالم التصوير الماكرو: اكتشف التفاصيل الخفية",
    category: "تقنيات",
    readTime: "10 دقائق للقراءة",
    description: "انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",
    image: "../src/assets/img43.jpg",
    authorImg: "../src/assets/img13.jpg",
    authorName: "رامي الخطيب",
    authorJob: "مصور ماكرو",
  },
  {
    id: 14,
    title: "التعريض الطويل: كيف تصور الحركة والزمن",
    category: "إضاءة",
    readTime: "6 دقائق للقراءة",
    description: "تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",
    image: "../src/assets/img44.jpg",
    authorImg: "../src/assets/img14.jpg",
    authorName: "باسم المصري ",
    authorJob: "مصور فني",
  },
  {
    id: 15,
    title: "تصوير حفلات الزفاف: دليل المصور المحترف",
    category: "مناظر طبيعية",
    readTime: "11 دقائق للقراءة",
    description: "تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",
    image: "../src/assets/img45.jpg",
    authorImg: "../src/assets/img15.jpg",
    authorName: "منصور الزهراني",
    authorJob: "مصور زفاف",
  },
  {
    id: 16,
    title: "التصوير بالدرون: منظور جديد للعالم",
    category: "معدات",
    readTime: "9 دقائق للقراءة",
    description: "اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",
    image: "../src/assets/img46.jpg",
    authorImg: "../src/assets/img16.jpg",
    authorName: "فيصل الدويسري",
    authorJob: "مدرب جوي",
  },
  {
    id: 17,
    title: "تصوير المنتجات: أساسيات التصوير التجاري",
    category: "تقنيات",
    readTime: "8 دقائق للقراءة",
    description: "تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",
    image: "../src/assets/img47.jpg",
    authorImg: "../src/assets/img17.jpg",
    authorName: "لؤي الصالح",
    authorJob: "مصور تجاري",
  },
  {
    id: 18,
    title: "تصوير العمارة: كيف تلتقط روح المباني",
    category: "مناظر طبيعية",
    readTime: "9 دقائق للقراءة",
    description: "اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",
    image: "../src/assets/img48.jpg",
    authorImg: "../src/assets/img18.jpg",
    authorName: "طارق النعيمي",
    authorJob: "مصور  معماري",
  },
  {
    id: 19,
    title: "تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",
    category: "بورتريه",
    readTime: "5 دقائق للقراءة",
    description: "تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",
    image: "../src/assets/img49.jpg",
    authorImg: "../src/assets/img19.jpg",
    authorName: "أحمد الشهري",
    authorJob: "مصور رياضي",
  },
  {
    id: 20,
    title: "أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",
    category: "إضاءة",
    readTime: "6 دقائق للقراءة",
    description: "افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",
    image: "../src/assets/img50.jpg",
    authorImg: "../src/assets/img20.jpg",
    authorName: "ماجد القحطاني",
    authorJob: "مصور استديو",
  },
  {
    id: 21,
    title: "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",
    category: "مناظر طبيعية",
    readTime: "9 دقائق للقراءة",
    description: "نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",
    image: "../src/assets/img51.jpg",
    authorImg: "../src/assets/img21.jpg",
    authorName: "ياسر العتيبي",
    authorJob: "مصور رحالة",
  },
  {
    id: 22,
    title: "نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",
    category: "تقنيات",
    readTime: "7 دقائق للقراءة",
    description: "افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",
    image: "../src/assets/img52.jpg",
    authorImg: "../src/assets/img22.jpg",
    authorName: "دحانم الحسيني ",
    authorJob: " فنان بصري",
  },
  {
    id: 23,
    title: "تصوير المواليد: فن التقاط البراءة",
    category: "بورتريه",
    readTime: "10 دقائق للقراءة",
    description: "تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",
    image: "../src/assets/img53.jpg",
    authorImg: "../src/assets/img23.jpg",
    authorName: "نايف المطيري",
    authorJob: "مصور مواليد",
  },
  {
    id: 24,
    title: "تصوير العقارات: كيف تجعل المنزل يبيع نفسه",
    category: "تقنيات",
    readTime: "8 دقائق للقراءة",
    description: "تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",
    image: "../src/assets/img54.jpg",
    authorImg: "../src/assets/img24.jpg",
    authorName: "عبدالله الغامدي",
    authorJob: "مصور  عقارات",
  },
  {
    id: 25,
    title: "RAW مقابل JPEG: متى تستخدم كلاً منهما",
    category: "معدات",
    readTime: "6 دقائق للقراءة",
    description: "افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",
    image: "../src/assets/img55.jpg",
    authorImg: "../src/assets/img25.jpg",
    authorName: "كريم الفهد",
    authorJob: " خبير تقني",
  },
  {
    id: 26,
    title: "تصوير البورتريه الذاتي: كن موضوعك الخاص",
    category: "بورتريه",
    readTime: "6 دقائق للقراءة",
    description: "تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",
    image: "../src/assets/img56.jpg",
    authorImg: "../src/assets/img26.jpg",
    authorName: "سلطان الراجحي ",
    authorJob: "فنان تصوير ",
  },
  {
    id: 27,
    title: "دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",
    category: " معدات",
    readTime: "9 دقائق للقراءة",
    description: "افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",
    image: "../src/assets/img57.jpg",
    authorImg: "../src/assets/img27.jpg",
    authorName: "فهد السبيعي",
    authorJob: "مراجع معدات ",
  },
  {
    id: 28,
    title: "التصوير البسيط (Minimalist): قوة الفراغ",
    category: "تقنيات",
    readTime: "6 دقائق للقراءة",
    description: "اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",
    image: "../src/assets/img58.jpg",
    authorImg: "../src/assets/img28.jpg",
    authorName: "راشد الجاسر",
    authorJob: "مدرب تصوير",
  },


];
export default function BlogDetails() {
  const { id } = useParams()
  const post = articles.find(a => a.id === parseInt(id))
  

  if (!post) {
    return <p>Not Found  </p>
  }

  return (
    <main className="blog-details">
      <div
        className="post-hero"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="overlay">
          <div className="blog-data rounded-5">
            <Link to="/" className="home-link"><i className='fas fa-home fs-5'></i> <i className='fas fa-angle-left'></i></Link>

            <Link to="/blog" className="blog-link"> المدونة <i className='fas fa-angle-left'></i></Link>
            <span className="category-gray">{post.category}</span>
          </div>

          <div className="post-category-time">
            <span className="category rounded-5">{post.category}</span>
            <span className="read-time rounded-5"><i className='fa-regular fa-clock'></i> {post.readTime}</span>
          </div>

          <h2 className="post-title">{post.title}</h2>

          <div className="post-author-details">
            <img src={post.authorImg} alt={post.authorName} className="author-img" />
            <div className="author-info">
              <h5>{post.authorName}</h5>
              <span>{post.authorJob}</span>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-explore container py-5">
        <div className="row">

          <div className="col-md-8">

            <div className="description">
              <p></p>
            </div>

            <div className="features mt-4">
              {[...Array(6)].map((_, index) => (
                <div className="feature-item" key={index}>
                  <i className="fa-solid fa-camera"></i>
                  <div className="feature-text">
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tags mt-4">
              <div className='d-flex'>
                <i className="fa-solid fa-tags pt-2"></i>
                <span className='pe-2'>الوسوم</span>
              </div>
              <div className="tags-list">
                <span>#الإضاءة</span>
                <span>#الساعات_الذهبية</span>
                <span>#التصوير_الخارجي</span>
              </div>
            </div>

            <div className="share-article mt-4 d-flex justify-content-between align-items-center">
              <span>شارك المقال</span>
              <div className="social-icons d-flex gap-2">
                <Link className="social-link"><i className="fa-brands fa-twitter"></i></Link>
                <Link className="social-link"><i className="fa-brands fa-linkedin"></i></Link>
                <Link className="social-link"><i className="fa-brands fa-whatsapp"></i></Link>
                <Link className="social-link"><i className="fas fa-link"></i></Link>
              </div>
            </div>

            <div className="author-details mt-4">
              <span className="author-label">كاتب المقال</span>
              <h5></h5>
              <span></span>
              <p>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
            </div>

          </div>

          <div className="col-md-4">

            <div className="article-contents">
              <div className='d-flex'>
                <i className="fa-solid fa-list"></i>
                <span>محتويات المقال</span>
              </div>
              <div className="questions mt-3">
                {[...Array(6)].map((_, index) => (
                  <div className="question-item d-flex justify-content-between align-items-center" key={index}>
                    <div className="question-number">{index + 1}</div>
                    <h5></h5>

                  </div>
                ))}
              </div>
            </div>

            <div className="read-time mt-4 text-center justify-content-center align-items-center">
              <div className='text-center'>
                <i className="fa-regular fa-clock"></i>
              </div>
              <p className='pt-2'>{articles.readTime}</p>
            </div>


            <div className="newsletter mt-4 text-center">
              <i className="fa-regular fa-envelope"></i>
              <h5>لا تفوت جديدنا</h5>
              <p>اشترك للحصول على أحدث المقالات</p>
              <Link to="/blog" className="btn btn-primary w-100">تصفح المزيد</Link>
            </div>

          </div>

        </div>
      </section>


    </main>
  )
}

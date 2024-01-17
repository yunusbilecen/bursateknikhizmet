import Link from 'next/link';
import React from 'react';
import Counter from '../common/counter';

const AboutSection = () => {
    return (
        <section className="about__area pt-80 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__left-one p-relative mb-60">
                            <div className="about__left-thumb">
                                <img src="/assets/img/about/about-01.jpg" alt="about-img" />
                            </div>
                            <div className="about__experience-shape">
                                <div className="about__experience-content">
                                    <h2 className="counter"><Counter number="10" /></h2>
                                    <span>Yıllık Tecrübe</span>
                                    <div className="about__experience-shape-icon">
                                        <i className="fal fa-trophy-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__right-content mb-60">
                            <div className="section__title-one mb-35">
                                <span> {"// Hakkımızda"}</span>
                                <h4>Bursa Teknik Hizmet: 10 Yıldır Güvenle Yanınızda.</h4>
                            </div>
                            <div className="about__description-text">
                                <h4>10 Yıldır Güvenle Yanınızda</h4>

                                <p><strong>Bursa Teknik Hizmet</strong>, beyaz eşya tamiri, klima temizliği, kombi ve petek temizliği alanlarında uzmanlaşmış, 7/24 kesintisiz hizmet sunan köklü bir firma olarak Bursa'da faaliyet göstermektedir. 10 yıldan fazla süredir sektörde liderliği elinde tutan firma olarak, müşteri memnuniyetini her zaman önceliğimiz olarak kabul ediyoruz.</p>

                                <h4>Hizmetlerimiz</h4>

                                <ul>
                                    <li><strong>Beyaz Eşya Tamiri:</strong> Deneyimli teknik ekibimizle, her türlü beyaz eşya arızasına hızlı ve etkili çözümler sunuyoruz. Kaliteli yedek parça kullanımı ve uzman kadromuzla, cihazlarınızı ilk günkü performansına kavuşturuyoruz.</li>

                                    <li><strong>Klima Temizliği:</strong> Her marka ve model klima sistemlerinin temizliği konusunda uzmanız. Düzenli bakım ve temizlik işlemleri ile klima verimliliğinizi artırıyor, iç mekan hava kalitesini en üst seviyede tutuyoruz.</li>

                                    <li><strong>Kombi ve Petek Temizliği:</strong> Isınma sistemlerinizin düzenli bakımı ve temizliği, enerji tasarrufu sağlamak ve arızaları önlemek açısından kritiktir. Kombi ve petek temizliği konusundaki profesyonel yaklaşımımızla, ısınma sistemlerinizi güvenle kullanmanızı sağlıyoruz.</li>
                                </ul>

                                <h4>Neden Bursa Teknik Hizmet?</h4>

                                <ul>
                                    <li><strong>Uzman Kadro:</strong> Alanında uzmanlaşmış teknik ekibimizle sorunlarınıza hızlı ve etkili çözümler sunuyoruz.</li>

                                    <li><strong>Güvenilir Hizmet:</strong> 10 yıldan fazla süredir sektörde faaliyet gösteriyor olmamız, müşterilerimize olan güveni artırmıştır.</li>

                                    <li><strong>Müşteri Memnuniyeti:</strong> Her zaman müşteri memnuniyetini ön planda tutuyoruz. Memnun müşterilerimiz, en iyi referanslarımızdır.</li>

                                    <li><strong>Teknolojik Çözümler:</strong> Sürekli gelişen teknolojiye ayak uydurarak, en son teknolojiyle donatılmış ekipman ve çözümler sunuyoruz.</li>
                                </ul>

                                <p><strong>Bursa Teknik Hizmet</strong> olarak, siz değerli müşterilerimize en iyi hizmeti sunabilmek için sürekli olarak kendimizi geliştiriyor ve yeniliklere açık bir yaklaşım sergiliyoruz. İhtiyacınız olduğunda, bir telefon kadar yakınınızdayız.</p>

                                <p>Bizi tercih ettiğiniz için teşekkür eder, sağlıklı ve konforlu günler dileriz.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
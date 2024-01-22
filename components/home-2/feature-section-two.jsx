
import React from 'react';

const FeatureSectionTwo = () => {
    return (
        <section className="features__area include__bg pt-120 pb-60" style={{ background: "url(/assets/img/bg/features-bg.jpg)" }}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6  col-lg-6">
                        <div className="features__thunb-warpper p-relative mb-60">
                            <img className="features__thunb-1" src="/assets/img/features/features-01.jpg" alt="image not found" />
                            <img className="features__thunb-2" src="/assets/img/features/features-02.jpg" alt="image not found" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="features__content-wrapper mb-60">
                            <div className="section__title-two s-2 mb-50">
                                <span>Özellikler</span>
                                <h2 className="mb-25">Sizlerden gelen sıkça sorular</h2>
                            </div>
                            <div className="bd-faq__wrapper mb-30">
                                <div className="bd-faq__accordion" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Beyaz eşya tamir servisi nedir?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Cihaz tamir servisi, ev ünitelerinin tamirinden sorumlu olan temel ev hizmetlerinin özel bir alanıdır. Buzdolapları, dondurucular, çamaşır makineleri, fırın ve ocaklar, mikrodalga fırınlar vb. onarım prosedürlerini içerir. Bu tür kuruluşlar, cihazlarınızdaki mevcut arızaların giderilmesi için lokasyonlarınıza nitelikli teknik personel gönderir. Cihaz tamir çalışanlarının bu işi gerçekleştirmek için özel eğitime ve lisanslara sahip olmaları gerekir (özellikle gazlı cihaz tamiri söz konusu olduğunda). Farklı cihazlardaki sorunları çözmek için elektrik, sıhhi tesisat ve hatta HVAC sistemlerinin çalışması hakkında aşırı bilgi sahibi olunmalıdır. Uzman tamirciler, onarımları tek seferde tamamlamak için genellikle sık kullanılan yedek parçaları yanlarında taşırlar.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Bir cihaz tamircisi ne kadar ücret alır?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Cihaz onarım maliyeti değişken bir miktardır ve pek çok faktöre bağlıdır. Çoğu durumda, onarım şirketi yalnızca sorunla ilgili açıklamanıza dayanarak telefonla size tam ve nihai fiyatı söyleyemeyecektir. Onarım uzmanları, iş ve yedek parça fiyatlarına ilişkin hesaplamaları size sunmadan önce daima sorunu yerinde ön incelemeye tabi tutarlar. Dikkatli olun; bu, nihai fiyatı yalnızca iş tamamlandığında öğrenebileceğiniz anlamına gelmez. Dürüst şirketler en yaygın işler için adil ve peşin fiyatlandırma uygular. Ve iş başlamadan önce teklif tarafınıza sunulacak ve açıklanacaktır. İyi cihaz tamir şirketlerinin sabit servis çağrı fiyatları olduğunu ve ek gizli ücretler olmadığını da belirtmekte fayda var..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Ev aletlerini tamir etmeye değer mi?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Cihazınızın çalışmayı durdurması veya çalışmaya başlamaması gibi bir sorunla karşılaştığınızda, cihazın tamir edilip edilmeyeceğine veya değiştirilip değiştirilmeyeceğine ilişkin karar, yalnızca ünitenin tam teşhisi ve muayenesinden sonra verilmelidir. Nitelikli bir tamirci karar vermenize yardımcı olacaktır. Ünitenin tamamen tamir edilemeyecek duruma geldiği durumlar oldukça nadirdir. Ancak cihazınız eskiyse ve daha önce birkaç kez tamir görmüşse sorunun tekrar ortaya çıkma ihtimali vardır. Ve arızalı cihaz sadece zaman ve para harcayan bir felakete dönüşecek. Ayrıca üniteleri zamanla daha güncel ve verimli modellerle değiştirmek, faturalardan tasarruf etmenize yardımcı olacağından akıllıca olacaktır.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSectionTwo;
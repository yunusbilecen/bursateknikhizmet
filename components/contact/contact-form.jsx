import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact__form mb-60">
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact__from-input">
                            <input type="text" placeholder="İsim" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact__from-input">
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact__from-input">
                            <input type="text" placeholder="Telefon" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact__select mb-20">
                            <select>
                                <option value="0">Seç</option>
                                <option value="1">Teknik Destek</option>
                                <option value="2">Bilgi</option>
                                <option value="3">Diğer</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contact__from-input">
                            <textarea name="Message" id="Message" placeholder="Mesaj Yaz"></textarea>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="comment__btn e-btn" type="submit">Mesaj Gönder</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
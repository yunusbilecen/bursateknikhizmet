
import Link from 'next/link';
import React from 'react';

const ServiceSidebar = () => {
    return (
        <div className="service__sidebar-wrapper mb-60">
            <div className="sidebar__widget mb-45">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Our Services</h3>
                </div>
                <div className="sidebar__service-list">
                    <ul>
                        <li><Link href="/service-details/5" ><div>Beyaz Eşya Servisi</div></Link></li>
                        <li><Link href="/service-details/6" ><div>Klima Servisi</div></Link></li>
                        <li><Link href="/service-details/8" ><div>Kombi ve Kalorifer Servisi</div></Link></li>
                        <li><Link href="/service-details/7" ><div>7/24 İletişim</div></Link></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar__widget mb-45 d-none">
                <div className="sidber__adv-thumb">
                    <img src="/assets/img/service/service-adv.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
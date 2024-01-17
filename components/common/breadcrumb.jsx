import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ breadTitle, breadSubtitle }) => {
   return (
      <div className="breadcrumb__area include__bg" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb.jpg)" }}>
         <div className="container fluid">
            <div className="row">
               <div className="col-xl-12">
                  <div className="breadcrumb__wrapper text-center mt-20">
                     <div className="breadcrumb__title">
                        <h2>{breadTitle}</h2>
                     </div>
                     <div className="breadcrumb__menu">
                        <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                              <li className="trail-item trail-begin"><span><Link href="/" ><span>BTH</span></Link></span></li>
                              <li className="trail-item trail-end"><span>{breadSubtitle}</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Breadcrumb;
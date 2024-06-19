import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './Purchase.css';
import Affiliate from './Affiliate';
import Store from './Store';
import openBook from './photos/openBook4.png';
import note1 from './photos/notesh.png';
import note2 from './photos/notesh2.png';
import note3 from './photos/notesh4.png';
import offer from './photos/offernew.png';
import store from './photos/store.png';
import amz from './photos/amazon.png';
import flip from './photos/flipkart.png';

export default function Purchase() {
    const location = useLocation();
    const showMainContent = location.pathname === '/Purchase';

    return (
        <>
            {showMainContent && (
                <div className='main'>
                    <div className='sideAnim'>
                        <img className='note1' src={note1} alt="note1" />
                        <img className='note2' src={note2} alt="note2" />
                        <img className='note3' src={note3} alt="note3" />
                        <img className='book' src={openBook} alt="openBook" />
                        <img className="Offer" src={offer} alt="offer" />
                    </div>
                    <nav className='purchasenav'>
                        <Link className='Store' id='Store' to='store'>Store
                            <img className='storeimg' src={store} alt="store" />
                        </Link>
                        <Link className='Affiliate' id='Affiliate' to='affiliate'>Affiliate
                            <img className='amazon' src={amz} alt="amazon" />
                            <img className='flipkart' src={flip} alt="flipkart" />
                        </Link>
                    </nav>
                </div>
            )}
            <Routes>
                <Route path='store/*' element={<Store />} />
                <Route path='affiliate' element={<Affiliate />} />
            </Routes>
        </>
    );
}

import * as React from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import './style.scss';

export default function Layout(props: { children: React.ReactNode }) {
    return <div>
        <Header/>
       <div className="main-content">
           {props.children}
       </div>
        <Footer />
    </div>
}
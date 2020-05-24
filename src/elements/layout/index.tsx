import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.scss';
import { connect } from 'react-redux';
import { StoreState } from '../../state/types';
import { getOptions } from '../../state/settings/selectors';
import { GET_OPTIONS_REQUEST } from '../../state/settings/actions';
import { useEffect } from 'react';

function Layout(props: { children: React.ReactNode, options: any, getOptions: () => void }) {

    useEffect(() => {
        if (!props.options.length) {
            props.getOptions();
        }
    }, []);

    return <div>
        <Header/>
        <div className="main-content">
            {props.children}
        </div>
        <Footer/>
    </div>;
}

const mapDispatchToProps = dispatch => {
    return {
        getOptions: () => {
            dispatch(GET_OPTIONS_REQUEST(true));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        options: getOptions(state),
    }),
    mapDispatchToProps
)(Layout);


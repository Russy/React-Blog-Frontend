import React, { useState } from 'react';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import Notification from '../../elements/notification';
import Input from '../../elements/Input';
import Button from '../../elements/button';
import { connect } from 'react-redux';
import { GET_LOGIN_REQUEST } from '../../state/login/actions';
import { StoreState } from '../../state/types';
import { getErrors, isFetching } from '../../state/login/selectors';
import WithPreloader from '../../components/WithPreloader';

type Props = {
    login: (params: {login: string, password: string}) => void,
    errors: string[],
    isFetching: boolean
};

function Login(props: Props) {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    return <Layout>
        <Container>
            <SidebarLayout
                sidebar={<>
                    <Ad/>
                </>}
            >
                <WithPreloader isLoading={props.isFetching}>
                    <div>
                        {props.errors.map((error, key) => {
                            return <Notification key={key} message={error}/>;
                        })}
                    </div>
                    <Input
                        type={'text'}
                        name={'login'}
                        placeholder={'Login'}
                        className={'mb-20'}
                        value={login}
                        onChange={(event) => {
                            setLogin(event.target.value);
                        }}
                    />
                    <Input
                        type={'password'}
                        name={'password'}
                        placeholder={'Password'}
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <div className={'mt-20'}>
                        <Button
                            type={'primary'}
                            onClick={() =>{
                                props.login({
                                    login, password
                                });
                            }}
                        >
                            Login
                        </Button>
                    </div>
                </WithPreloader>

            </SidebarLayout>
        </Container>
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        login: (params) => {
            dispatch(GET_LOGIN_REQUEST(params));
        }
    };
};

//GET_LOGIN_REQUEST
export default connect(
    (store: StoreState) => ({
        errors: getErrors(store),
        isFetching: isFetching(store),
    }),
    mapDispatchToProps
)(Login);
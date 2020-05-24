import React, { Component, useEffect, useState } from 'react';
import Container from '../../../elements/container';
import FullWidthLayout from '../../../elements/FullWidthLayout';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';
import { GET_ADMIN_POSTS_REQUEST } from '../../../state/posts/actions';
import { connect } from 'react-redux';
import { StoreState } from '../../../state/types';
import { getIsFetching, getPagination, getPosts } from '../../../state/posts/selectors';
import Heading from '../../../elements/heading';
import Input from '../../../elements/Input';
import SettingsSelect from './components/SettingsSelect';
import { Option } from '../../../state/settings/state';
import { GET_OPTIONS_REQUEST, POST_OPTIONS_REQUEST } from '../../../state/settings/actions';
import { getOptions } from '../../../state/settings/selectors';
import Button from '../../../elements/button';
import { getPagesOptions } from '../../../state/pages/selectors';

type Props = {
    isFetching: boolean,
    getOptions: () => void,
    postOptions: (options: any) => void,
    options: Option[],
    pages: any
};

function Settings(props: Props) {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        props.getOptions();
    }, []);

    useEffect(() => {
        setOptions(props.options);
    }, [props.options, props.pages]);

    return <Layout>
        <Container>
            <FullWidthLayout>
                <WithPreloader
                    isLoading={props.isFetching}
                >
                    <Heading
                        size='medium'
                        classNames={'mb-10'}
                    >
                        Blog Title
                    </Heading>
                    <Input
                        type={'text'}
                        className={'mb-20'}
                        value={getOption(options, 'title', '') as string}
                        onChange={(e) => {
                            if (isExistOption(options, 'title')) {
                                setOptions([
                                    ...options.map(op => {
                                        if(op.name === 'title') {
                                            op.value = e.target.value;
                                        }
                                        return op
                                    })
                                ]);
                            } else {
                                setOptions([
                                    ...options,
                                    {
                                        name: 'title',
                                        value: e.target.value
                                    }
                                ]);
                            }

                        }}
                    />
                    <Heading
                        size='medium'
                        classNames={'mb-10'}
                    >
                        Main Menu
                    </Heading>
                    <SettingsSelect
                        onChange={(e) => {
                            if (isExistOption(options, 'main-menu')) {
                                setOptions([
                                    ...options.map(op => {
                                        if(op.name === 'main-menu') {
                                            op.value = e;
                                        }
                                        return op
                                    })
                                ]);
                            } else {
                                setOptions([
                                    ...options,
                                    {
                                        name: 'main-menu',
                                        value: e
                                    }
                                ]);
                            }

                        }}
                        options={props.pages}
                        value={getOption(options, 'main-menu', []) as []}
                        className={'mb-20'}
                    />

                    <Heading
                        size='medium'
                        classNames={'mb-10'}
                    >
                        Footer menu
                    </Heading>
                    <SettingsSelect
                        onChange={(e) => {
                            if (isExistOption(options, 'footer-menu')) {
                                setOptions([
                                    ...options.map(op => {
                                        if(op.name === 'footer-menu') {
                                            op.value = e;
                                        }
                                        return op
                                    })
                                ]);
                            } else {
                                setOptions([
                                    ...options,
                                    {
                                        name: 'footer-menu',
                                        value: e
                                    }
                                ]);
                            }

                        }}
                        options={props.pages}
                        value={getOption(options, 'footer-menu', []) as []}
                        className={'mb-20'}
                    />

                    <Button
                        className={'mb-40'}
                        type={'primary'}
                        onClick={() => {
                            props.postOptions(options)
                        }}
                    >Save</Button>

                </WithPreloader>
            </FullWidthLayout>
        </Container>
    </Layout>;
}

const getOption = (options: Option[], option, def: string | []) => {
    const op = options.find((op) => op.name === option);
    return op ? op.value : def;
}

const isExistOption = (options: Option[], option) => {
    const op = options.find((op) => op.name === option);
    return !!op;
}

const mapDispatchToProps = dispatch => {
    return {
        getOptions: () => {
            dispatch(GET_OPTIONS_REQUEST());
        },
        postOptions: (options: Option[]) => {
            dispatch(POST_OPTIONS_REQUEST(options));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        isFetching: getIsFetching(state),
        options: getOptions(state),
        pages: getPagesOptions(state),
    }),
    mapDispatchToProps)(Settings);
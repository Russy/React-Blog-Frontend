import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Container from '../../../elements/container';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';
import { PageType, PostType, StoreState } from '../../../state/types';
import { getIsFetching } from '../../../state/page/selectors';
import { useParams } from 'react-router-dom';
import SidebarLayout from '../../../elements/sidebarLayout';
import Textarea from './components/Textarea';
import Button from '../../../elements/button';
import Input from '../../../elements/Input';
import Heading from '../../../elements/heading';
import Status from './components/Status';
import { getPage } from '../../../state/page/selectors';
import {
    CLEAR_PAGE_REQUEST,
    GET_EDIT_PAGE_REQUEST,
    GET_EMPTY_PAGE_REQUEST, PAGE_DELETE_REQUEST,
    PAGE_EDIT_PAGE_REQUEST
} from '../../../state/page/actions';

type Props = {
    getPage: (slug: string) => void;
    getEmptyPage: () => void;
    updatePage: (post: PageType) => void;
    page: PageType,
    isFetching: boolean,
    clearPage: () => void,
    deletePage: (id: number) => void,
};

function EditPage(props: Props) {

    const [page, setPage] = useState(props.page);

    let {id} = useParams();

    useEffect(() => {
        if (id != 'new') {
            props.getPage(id);
        } else {
            props.getEmptyPage();
        }
    }, []);

    useEffect(() => {
        setPage(props.page);
    }, [props.page]);

    return <Layout>
        <Container>
            <SidebarLayout
                sidebar={<>

                    <Status
                        status={page.is_published}
                        onSelect={(is_published) => {
                            setPage({
                                ...page,
                                is_published
                            });
                        }}
                    />

                </>}
            >
                <WithPreloader
                    className={'mb-80'}
                    isLoading={props.isFetching}
                >
                    <Heading
                        classNames={'mb-10'}
                        size={'small'}
                    >Title</Heading>
                    <Input
                        className={'mb-40'}
                        type={'text'}
                        placeholder={'Title'}
                        name={'title'}
                        value={page.title}
                        onChange={(e) => {
                            setPage({
                                ...page,
                                title: e.target.value
                            });
                        }}
                    />

                    <Textarea
                        title={'Content'}
                        content={page.content ? page.content : ''}
                        className={'mt-40 mb-30'}
                        name={'content'}
                        onChange={(content) => {
                            if (page.id || id === 'new') {
                                setPage({
                                    ...page,
                                    content
                                });
                            }
                        }}
                    />

                    <Button
                        className={'mr-10'}
                        type={'primary'}
                        onClick={() => {
                            props.updatePage(page);
                        }}
                    >
                        Save
                    </Button>

                    <Button
                        type={'warning'}
                        onClick={() => {
                            props.deletePage(page.id);
                        }}
                    >
                        Delete
                    </Button>


                </WithPreloader>

            </SidebarLayout>

        </Container>
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        getPage: (slug: string) => {
            dispatch(GET_EDIT_PAGE_REQUEST(slug));
        },
        getEmptyPage: () => {
            dispatch(GET_EMPTY_PAGE_REQUEST());
        },
        updatePage: (post: PostType) => {
            dispatch(PAGE_EDIT_PAGE_REQUEST(post));
        },
        clearPage: () => {
            dispatch(CLEAR_PAGE_REQUEST());
        },
        deletePage: (id: number) => {
            dispatch(PAGE_DELETE_REQUEST(id));
        },
    };
};

export default connect(
    (state: StoreState) => ({
        page: getPage(state),
        isFetching: getIsFetching(state)
    }),
    mapDispatchToProps
)(EditPage);

import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import FullWidthLayout from '../../../elements/FullWidthLayout';
import Container from '../../../elements/container';
import Layout from '../../../elements/layout';
import { GET_ADMIN_POSTS_REQUEST, GET_POSTS_REQUEST, SEARCH_POSTS_REQUEST } from '../../../state/posts/actions';
import { PageType, Pagination as PaginationType, PostType, StoreState } from '../../../state/types';
import { getIsFetching, getPagination } from '../../../state/pages/selectors';
import { Link, useParams } from 'react-router-dom';
import Pagination from './components/Pagination';
import WithPreloader from '../../../components/WithPreloader';
import { getPages } from '../../../state/pages/selectors';
import { GET_ADMIN_PAGES_REQUEST } from '../../../state/pages/actions';

type Props = {
    pages: PageType[],
    getPages: (page: string | undefined) => {},
    // searchPosts: (query: string) => {},
    isFetching: boolean,
    pagination: PaginationType
};

function Pages(props: Props) {

    const {pagination} = props;

    let {page, query} = useParams();

    useEffect(() => {
        if (query) {
            // props.searchPosts(query);
        } else {
            props.getPages(page);
        }
    }, [page, query]);

    return <Layout>
            <Container>
                <FullWidthLayout>
                    <WithPreloader
                        isLoading={props.isFetching}
                    >
                        <Link
                            className={'button primary mb-20'}
                            to={'/admin/page/new'}
                        >New Page</Link>

                        <div className={'admin-post'}>
                            <div  className="admin-post__id">
                                <strong>ID</strong>
                            </div>
                            <div  style={{width: '60%'}} className="admin-post__title">
                                <strong>Title</strong>
                            </div>
                            <div className="admin-post__slug">
                                <strong>Slug</strong>
                            </div>
                            <div className="admin-post__published">
                                <strong>Published</strong>
                            </div>
                            <div className="admin-post__controls">
                                <strong>Controls</strong>
                            </div>
                        </div>

                        {props.pages.map((page, key) => {
                            return <div key={key} className={'admin-post'}>
                                <div  style={{width: '5%'}} className="admin-post__id">
                                    {page.id}
                                </div>

                                <div style={{width: '60%'}} className="admin-post__title">
                                    {page.title}
                                </div>
                                <div className="admin-post__slug">
                                    {page.slug}
                                </div>
                                <div className="admin-post__published text-center">
                                    {page.is_published}
                                </div>
                                <div className="admin-post__controls">
                                    <Link
                                        className={'button primary'}
                                        to={`/admin/pages/${page.id}`}
                                    >Edit page</Link>
                                </div>
                            </div>;
                        })}

                        {pagination.last_page > 1 ? <Pagination
                            type={'pages'}
                            pagination={pagination}
                        /> : <></>}
                    </WithPreloader>


                </FullWidthLayout>
            </Container>
        </Layout>;
}


const mapDispatchToProps = dispatch => {
    return {
        getPages: (page) => {
            dispatch(GET_ADMIN_PAGES_REQUEST(page));
        },
        searchPosts: (query) => {
            // dispatch(SEARCH_POSTS_REQUEST(query));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        pages: getPages(state),
        isFetching: getIsFetching(state),
        pagination: getPagination(state)
    }),
    mapDispatchToProps)(Pages);
import { StoreState } from '../types';
import { createSelector } from 'reselect'

export const getPages = (Store: StoreState) => Store.pages.pages;
export const getIsFetching = (Store: StoreState) => Store.pages.is_fetching;
export const getPagination = (Store: StoreState) => Store.pages.pagination;

const PagesOptions = createSelector(
    getPages,
    pages => pages.map((page) => ({
        label: page.title,
        value: page.slug
    }))
)

export const getPagesOptions = createSelector(
    PagesOptions,
    options => [{label: 'Select page', value: ''} ,...options]
)
import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';

type Props = {};
type State = {
    term: string;
};

class Search extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onChange = (event: any) => {
        const {value} = event.currentTarget;
        this.setState({
            term: value
        });
    };

    render() {
        return <>
            <div className="search-form">
                <input
                    onChange={this.onChange}
                    type="text"
                    value={this.state.term}
                    placeholder="Search..."
                />
                <div className="fa fa-search" />
            </div>
        </>;
    }
}

export default connect(null, null)(Search);
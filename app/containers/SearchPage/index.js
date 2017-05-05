import React from 'react';
import Helmet from 'react-helmet';
import {bookmarkSerie, seenSerie} from '../app/actions';
import {isInit, fetchSeries, querySeries} from './actions';
import {connect} from 'react-redux';
import SerieList from 'components/SeriesList';
import {FormGroup, FormControl} from 'react-bootstrap';
import {push} from 'react-router-redux';

let timeout = null;

export class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preventShowDetailPage: false
    }
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchSeries());
  }

  onBookmark(selectedSerie) {
    console.log("bookmarked: ", selectedSerie);
    const {dispatch} = this.props;
    dispatch(bookmarkSerie(selectedSerie.id))
    this.setState({
      preventShowDetailPage: true
    });
  }

  onSeen(arg1) {
    console.log("seen: ", arg1);
    const {dispatch} = this.props;
    dispatch(seenSerie(selectedSerie.id));
    this.setState({
      preventShowDetailPage: true
    })
  }

  showDetailPage(item) {
    const {dispatch} = this.props;
    !this.state.preventShowDetailPage ?
    dispatch(push('/search/' + item.id))
    : this.setState({
      preventShowDetailPage: false
    })
  }

  onSearch(e) {
    const {dispatch} = this.props;
    const value = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(querySeries(value));
    }, 150)
  }

  render() {
    const {series, dispatch} = this.props;
    return (
      <div>
        <FormGroup controlId="search-field">
          <FormControl
            type="text"
            label="Search"
            placeholder="Search"
            onChange={this.onSearch.bind(this)}
          />
        </FormGroup>
        <SerieList
          items={series}
          dispatch={dispatch}
          enableBookmarkFunc={true}
          enableSeenFunc={true}
          enableDetailPane={true}
          onBookmark={this.onBookmark.bind(this)}
          onSeen={this.onSeen.bind(this)}
          onItemClick={this.showDetailPage.bind(this)}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    series: state.get('search').get('series').get('queriedSeries')
  }
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(SearchPage);

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {

  }

  render() {
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          DIT IS EEN TEST
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};

export function mapDispatchToProps(dispatch) {
  return {
    /*onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },*/
  };
}

const mapStateToProps = createStructuredSelector({

});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { gameActions } from '../../actions/gameActions';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.game,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

class Game extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      gameActions.getGameFeed()
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.game) {
      return null;
    }

    const markup = { __html: marked(this.props.game.name, { sanitize: true }) };
    const canModify = this.props.currentUser &&
      this.props.currentUser.email === this.props.game.owner.email;
    return (
      <div className="article-page">

        <div className="banner">
          <div className="container">

            <h1>{this.props.game.name}</h1>

          </div>
        </div>

        <div className="container page">

          <div className="row article-content">
            <div className="col-xs-12">

              <div dangerouslySetInnerHTML={markup}></div>

            </div>
          </div>

          <hr />

          <div className="article-actions">
          </div>

          
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

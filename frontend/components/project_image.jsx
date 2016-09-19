import React from 'react';

const ProjectImage = React.createClass({
  getInitialState () {
    return {showLinks: false};
  },
  componentDidMount () {
    $(this._imgFrame).hover(this._showLinks, this._hideLinks);
  },
  _showLinks () {
    this.setState({showLinks: true});
    $(this._imgFrame).children('img').css('filter', 'brightness(35%)');
  },
  _hideLinks () {
    this.setState({showLinks: false});
    $(this._imgFrame).children('img').css('filter', 'none');
  },
  render () {
    return (
      <div className='project-image-frame' ref={(c) => this._imgFrame = c}>
        <img className='project-image' src={this.props.imgSrc} />
        {this.state.showLinks ?
          <div className='project-links'>
            {
              this.props.linkNames.map((linkName, i) => {
                const linkAddress = this.props.links[i];
                return <a href={linkAddress} key={i}>{linkName}</a>;
              })
            }
          </div> : ''}
      </div>
    );
  }
});

export default ProjectImage;

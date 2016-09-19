import React from 'react';

const Contact = React.createClass({
  componentDidMount () {
    $(".contact-list").children('li').hover(this._growText, this._shrinkText);
    $(".resume-download").hover(this._growText, this._shrinkText);
  },
  componentWillUnmount () {
    $(".contact-list").children('li').unbind('mouseenter mouseleave');
    $(".resume-download").unbind('mouseenter mouseleave');
  },
  _growText (e) {
    $(e.currentTarget).find('p').animate({'font-size': '20px'}, 0);
    $(e.currentTarget).find('i').addClass('highlighted');
  },
  _shrinkText (e) {
    $(e.currentTarget).find('p').animate({'font-size': '16px'}, 0);
    $(e.currentTarget).find('i').removeClass('highlighted');
  },
  render () {
    return (
      <div className='content-section'>
        <h1 className='contact-header'>Contact</h1>
        <ul className='contact-list'>
          <li>
            <a href='http://www.github.com/willyp63'>
              <i className="fa fa-github-square"></i>
              <p>Github</p>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/wil-pirino-33675b122'>
              <i className="fa fa-linkedin-square"></i>
              <p>Linkedin</p>
            </a>
          </li>
          <li>
            <a href='mailto:wpirino1@gmail.com'>
              <i className="fa fa-envelope"></i>
              <p>Email</p>
            </a>
          </li>
        </ul>
        <h3 className='resume-download-header'>Or View my Resume</h3>
        <a className='resume-download' href='/wil-pirino.pdf'>
          <i className="fa fa-file-text"></i>
          <p>Resume</p>
        </a>
      </div>
    );
  }
});

export default Contact;

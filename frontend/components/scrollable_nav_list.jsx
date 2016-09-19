import React from 'react';

const ScrollableNavList = React.createClass({
  componentDidMount () {
    $('.nav-list').children('li').click(this._scrollToTarget);
    $(window).scroll(this._onScroll);

    // stop auto scroll on user scroll
    window.onmousewheel = document.onmousewheel = function () {
      $('html, body').stop();
    };
  },
  componentWillUnmount () {
    $('.nav-list').children('li').unbind('click');
    $(window).unbind('scroll');
  },
  _scrollToTarget (e) {
    let itemName = e.target.id.match(/(.*)-nav-item/)[1];
    const itemIdx = this.props.itemNames.indexOf(itemName);
    const targetId = this.props.targetIds[itemIdx];
    $(`#${targetId}`).scrollView({duration: 1000});
  },
  _onScroll () {
    $('.nav-item.selected').removeClass('selected');

    // find what section we are in and select its nav-item
    let selectedItemName;
    const midWindowScrollTop = window.scrollY + (window.innerHeight / 2);
    for (let i = 1; i < this.props.targetIds.length; i++) {
      const targetOffset = $(`#${this.props.targetIds[i]}`).offset().top;
      if (midWindowScrollTop < targetOffset) {
        selectedItemName = this.props.itemNames[i - 1];
        break;
      }
    }
    selectedItemName = selectedItemName || this.props.itemNames[this.props.itemNames.length - 1];
    $(`#${selectedItemName}-nav-item`).addClass('selected');
  },
  render () {
    return (
      <ul className='nav-list'>
        {
          this.props.itemNames.map((itemName, i) => {
            return <li className={`nav-item${(i === 0 ? ' selected' : '')}`}
                       id={`${itemName}-nav-item`}
                       key={i}>
                       {itemName[0].toUpperCase() + itemName.slice(1)}</li>;
          })
        }
      </ul>
    );
  }
});

export default ScrollableNavList;

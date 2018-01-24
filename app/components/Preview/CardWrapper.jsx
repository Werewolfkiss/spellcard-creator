import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

import classes from './CardWrapper.css';
import { downloadAsPDF, downloadAsPNG } from '../../util/download';
import Card from './Card';


export default class CardWrapper extends React.Component {
  static propTypes = {
    level: PropTypes.string.isRequired,
    spell: PropTypes.shape().isRequired,
    theme: PropTypes.shape().isRequired,
  };

  downloadAsPNG = () => {
    downloadAsPNG(this.card, this.props.spell.title);
  };

  downloadAsPDF = () => {
    const { spell, theme } = this.props;
    downloadAsPDF([this.card], spell.title, theme);
  };

  ref = (card) => {
    this.card = card;
  };

  render() {
    const { level, spell, theme } = this.props;
    const { height, width } = theme;

    return (
      <div
        className={classes.cardWrapper}
        style={{
          width: `${width}in`,
          height: `${height}in`,
          minWidth: `${width}in`,
          minHeight: `${height}in`,
          maxWidth: `${width}in`,
          maxHeight: `${height}in`,
        }}
      >
        <div className={classes.cardTools}>
          <button onClick={this.downloadAsPDF} title="Download as PDF">
            <Icon name="file-pdf-o" />
          </button>
          <button onClick={this.downloadAsPNG} title="Download as PNG">
            <Icon name="file-image-o" />
          </button>
        </div>
        <Card
          innerRef={this.ref}
          level={level}
          spell={spell}
          theme={theme}
        />
      </div>
    );
  }
}

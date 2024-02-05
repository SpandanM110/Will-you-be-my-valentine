import React, { Component } from 'react';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noCount: 0,
      yesPressed: false,
    };
  }

  handleNoClick = () => {
    this.setState((prevState) => ({
      noCount: prevState.noCount + 1,
    }));
  };

  getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    const { noCount } = this.state;
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  render() {
    const { noCount, yesPressed } = this.state;
    const yesButtonSize = noCount * 20 + 16;

    const imageStyle = {
      maxWidth: '80%',
      marginBottom: '1rem',
    };

    const buttonStyle = {
      fontSize: `${yesButtonSize}px`,
      marginRight: '1rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', marginTop: '-16px' }}>
        {yesPressed ? (
          <>
            <img src="https://gifdb.com/images/high/sending-love-hug-milk-mocha-ceqvokl0htg22l5v.gif" alt="bear-kisses" style={imageStyle} />
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>Ok yay!!!</div>
          </>
        ) : (
          <>
            <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="love-bear" style={{ height: '180px', marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Will you be my Valentine?</h1>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                style={buttonStyle}
                onClick={() => this.setState({ yesPressed: true })}
              >
                Yes
              </button>
              <button
                onClick={this.handleNoClick}
                style={{
                  ...buttonStyle,
                  backgroundColor: '#f44336',
                  marginRight: '0',
                }}
              >
                {noCount === 0 ? "No" : this.getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Page;

import React from 'react';
// import ThirdPartySection from './thirdparty.jsx';
import LeftNavigation from 'third-party-component-1/app/leftnavigation.jsx';
import ThirdPartySection from 'third-party-component-1/app/index.jsx';
import ThirdPartySection2 from './thirdparty2.jsx';
import ThirdPartySection3 from './thirdparty3.jsx';

const App = React.createClass({
  getInitialState() {
    return {
      overrideThirdPartyStyle: {},
      Menus: undefined,
      ListStyles: undefined,
      PrimaryText: undefined
    }
  },

  onChange() {
    let overrideThirdPartyStyle = {
      backgroundColor: 'black',
      color: 'white'
    }

    // Override LeftNavigation
    let Menus = [
      { text: 'Composite Settings', icon: 'settings_input_composite'},
      { text: 'Audio/Mic Off', icon: 'mic_off'},
      { text: 'Queue Play Next', icon: 'queue_play_next'},
      { text: 'Play Circle Filled', icon: 'play_circle_filled'},
      { text: 'Video Library', icon: 'video_library'}
    ];

    let ListStyles = {
      backgroundColor: '#7AAAC5',
      width: 235
    }

    this.setState({overrideThirdPartyStyle: overrideThirdPartyStyle});
    this.setState({Menus: Menus});
    this.setState({ListStyles: ListStyles});
    this.setState({PrimaryText: 'Overriden 3rd party submodule'});
  },
  resetStyles() {
    this.setState({overrideThirdPartyStyle: {}});
    this.setState({Menus: undefined});
    this.setState({ListStyles: undefined});
    this.setState({PrimaryText: undefined});
  },
  render() {

    // Override LeftNavigation
    let Menus = [
      { text: 'Main Menu 1', icon: 'settings_input_composite'},
      { text: 'Main Menu 2', icon: 'mic_off'},
      { text: 'Main Menu 3', icon: 'queue_play_next'},
      { text: 'Main Menu 4', icon: 'play_circle_filled'},
      { text: 'Main Menu 5', icon: 'video_library'}
    ];

    let ListStyles = {
      backgroundColor: '#7AAAC5',
      width: 200
    }

    // Button
    let buttonStyle = {
      padding: 10
    }
    let buttonStyle2 = {
      padding: 10,
      marginLeft: 10,
      marginBottom: 10
    }

    return (
      <div>
        <h2>Overriding 3rd Party Components using   ReactJS</h2>
        <div>
          <button style={buttonStyle} onClick={this.onChange}>Send down properties to third party components</button>
          <button style={buttonStyle2} onClick={this.resetStyles}>Undo</button>

          <ThirdPartySection style={this.state.overrideThirdPartyStyle} PrimaryText={this.state.PrimaryText}/><br/>
          <ThirdPartySection2 style={this.state.overrideThirdPartyStyle}/><br/>
          <ThirdPartySection3 style={this.state.overrideThirdPartyStyle}/>
        </div>
        <br/>
        <hr/>
        <div>
          <h3>{(this.state.Menus) ? 'Modified Left Navigation' : 'Default Left Navigation'}</h3>
          <LeftNavigation Menus={this.state.Menus} ListStyles={this.state.ListStyles}/>
        </div>
      </div>
      )
  }
})

export default App;

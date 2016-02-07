import React from 'react';

import LeftNavigation from 'left-navigation/app/leftnavigation.jsx';
import BoxSection from 'box-module/app/box.jsx';
import ThirdPartySection2 from './thirdparty2.jsx';
import ThirdPartySection3 from './thirdparty3.jsx';

const App = React.createClass({
  getInitialState() {
    return {
      overrideThirdPartyStyle: {},
      ListItemProperties: {
        Menus: undefined,
        ListStyles: undefined
      },
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
      { text: 'Video Library', icon: 'video_library'},
      { text: 'Subtitles', icon: 'subtitles'},
      { text: 'Slow Motion Video', icon: 'slow_motion_video'},
      { text: 'Surround Sound', icon: 'surround_sound'}
    ];

    let ListStyles = {
      backgroundColor: '#7AAAC5',
      width: 235
    }

    let innerDivStyle = {
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 7
    }

    let ListItemProperties = {
      Menus,
      ListStyles,
      innerDivStyle 
    }

    this.setState({overrideThirdPartyStyle: overrideThirdPartyStyle});
    this.setState({PrimaryText: 'Overriden Section Name'});
    this.setState({ListItemProperties: ListItemProperties});
  },

  resetStyles() {
    this.setState({overrideThirdPartyStyle: {}});
    this.setState({
      ListItemProperties: {
        Menus: undefined,
        ListStyles: undefined
      }
    });
    this.setState({PrimaryText: undefined});
  },

  render() {

    // Button styling
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
        <h2>Overriding 3rd Party Components using ReactJS</h2>
        <div>
          <button style={buttonStyle} onClick={this.onChange}>Send down properties to third party components</button>
          <button style={buttonStyle2} onClick={this.resetStyles}>Undo</button>

          <BoxSection style={this.state.overrideThirdPartyStyle} PrimaryText={this.state.PrimaryText}/><br/>
          <ThirdPartySection2 style={this.state.overrideThirdPartyStyle}/><br/>
          <ThirdPartySection3 style={this.state.overrideThirdPartyStyle}/>
        </div>
        <br/>
        <hr/>
        <div>
          <h3>{(this.state.ListItemProperties.Menus) ? 'Modified Left Navigation' : 'Default Left Navigation'}</h3>
          <LeftNavigation
            Menus={this.state.ListItemProperties.Menus}
            ListStyles={this.state.ListItemProperties.ListStyles}
            innerDivStyle={this.state.ListItemProperties.innerDivStyle}
          />
        </div>
      </div>
    )
  }
})

export default App;

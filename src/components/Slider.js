import React,{ Component} from 'react';
import {
View
} from 'react-native';
import ImageSlider from 'react-native-image-slider';




class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: true
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View>
                <ImageSlider
                    images={[
                        `http://placeimg.com/640/480/1`,
                        `http://placeimg.com/640/480/2`,
                        `http://placeimg.com/640/480/3`,
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}
                    />
            </View>
        );
    }
}



export default Slider;
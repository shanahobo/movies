import React from 'react';
import {Typography, Slider} from '../modules/material-module'; // Material component imports used for the slider

/**
 * This component controls the rating slider of the now playing movies
 * when the state is changed here, the filter value on the Now Playing view is also updated
 **/
class StepSlider extends React.Component {

    /**
     *  Update the state after changing the slider
     */
    handleChange = (event, value) => {
        this.setState({ value }, this.props.setFilterValue({rating:value}));
    };

    // render method
    render() {
        const styles = {
            sliderValue:{padding: '7px'},
            slider:{ height: '10px', padding: '12px', marginTop: '12px'}
        };

        return (
            <div>
                <Typography style={styles.sliderValue} variant="subtitle2" color="textSecondary">
                    Only show movies with a rating of {this.props.rating} or higher.
                </Typography>
                <Slider style={styles.slider} value={this.props.rating} min={0} max={10} step={0.5} onChange={this.handleChange} />
            </div>
        );
    }
}

export default StepSlider;

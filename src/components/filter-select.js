import React from 'react';
import {Typography, Select, MenuItem, Checkbox, ListItemText, FormControl, Input} from '../modules/material-module'; // Material imports for the dropdown & checkboxes

/**
 * This component controls the genre checkbox filter of the now playing movies
 * when the state is changed here, the filter value on the Now Playing view is also updated
 */
class MultipleSelect extends React.Component {

    state = {
        selectedGenres: []
    };

    /**
     *  Update the state after selecting a checkbox
     */
    handleChange = event => {
        this.setState({ selectedGenres: event.target.value }, this.props.setFilterValue({selectedGenres: event.target.value}));
    };

    // render method
    render() {
        const styles = {select: {width: '200px'}, container: {marginTop: '7px'}};

        return (
            <div style={styles.container}>
                <FormControl>
                    <Typography variant="subtitle2" color="textSecondary">Select Genres</Typography>

                    <Select style={styles.select}
                            multiple
                            value={this.state.selectedGenres}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={this.props.getGenreTextFromId}
                    >
                        {this.props.availableGenres.map(genre => (
                            <MenuItem key={genre.id} value={genre.id}>
                                <Checkbox checked={this.state.selectedGenres.indexOf(genre.id) > -1} />
                                <ListItemText primary={genre.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default MultipleSelect;
import React from 'react';
import NowPlaying from './features/now-playing/now-playing';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Grid container>
                    <Grid item xs={12} style={{ padding: 20}}>
                        <Grid container justify="center">
                            <NowPlaying />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default App;
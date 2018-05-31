import React, { Component } from 'react';


import { Paper, Tabs, Tab, Typography } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        const value = this.props.selectedPage;

        return (
            <Paper>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.props.handlePageUpdate}
                    centered
                >
                    <Tab label="Home" />
                    <Tab label="Flags" />
                    <Tab label="Users" />
                </Tabs>
                <Typography variant="caption" gutterBottom align="center">
                    @FutureFlags Team
                </Typography>
            </Paper>
        )
    }
}
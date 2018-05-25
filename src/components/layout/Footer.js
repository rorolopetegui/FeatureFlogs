import React, { Component } from 'react';
import { Paper, Tabs, Tab, Typography } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        return (
            <Paper>
                <Tabs
                    value = {0}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Componente Uno" />
                    <Tab label="Componente Dos" />
                    <Tab label="Componente Tres" />
                </Tabs>
                <Typography variant="caption" gutterBottom align="center">
                    @FutureFlags Team
                </Typography>
            </Paper>
        )
    }
}
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


import { Paper, Tabs, Tab, Typography } from '@material-ui/core';

class Footer extends Component {
    constructor(props) {
        super(props);
        let varValue = 0;
        switch(this.props.location.pathname){
            case "/MySpace":
                varValue = 1;
            break;
            case "/Contact":
                varValue = 2;
            break;
        }
        this.state = {
            value: varValue,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value) {
        if (value !== undefined) {
            this.setState({ value });
            let myRedirectValue;
            switch (value) {
                case 0:
                    myRedirectValue = "/Home";
                    break;
                case 1:
                    myRedirectValue = "/MySpace";
                    break;
                case 2:
                    myRedirectValue = "/Contact";
                    break;
            }
            this.props.history.push(myRedirectValue);
        }
    };
    render() {
        const { value } = this.state;

        return (
            <Paper>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
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
export default withRouter(Footer);
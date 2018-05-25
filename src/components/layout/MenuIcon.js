import React, { Component } from 'react';
//import { Drawer, List } from '@material-ui/core';
//import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default class MyMenuIcon extends Component {
    constructor() {
        super();
        this.state = {
            anchor: 'left'
        }
    }
    

    render() {
        //const { anchor } = this.state;
        /*const sideList = (
            <div >
                <List>
                    <li>Componente Uno</li>
                    <li>Componente Dos</li>
                    <li>Componente Tres</li>
                </List>
            </div>
        );*/
        return (
            <MenuIcon/>
            //<Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
            /*
            <div>
                <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
            */
        )
    }
}
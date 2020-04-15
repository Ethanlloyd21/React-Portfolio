import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Resume from '../Resume';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Contact from '../Contact'


export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/skills' component={Skills} />
                <Route path='/resume' component={Resume} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
        </div>
    );
}
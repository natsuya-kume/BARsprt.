import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { AuthProvider } from './AuthService.js'
import LoggedInRouteRoute from './LoggedInRoute'
import Top from "./Components/Top"
import history from './Components/History'
import Chat from './Components/chat/Chat'
import { NavProvider } from './NavContext';
import News from './Components/news/News'
import Video from './Components/video/Video'
// import ResponsiveDrawerListItem from './Components/ResponsiveDrawerListItem'

const App = () => {

    return (
        <>
            <NavProvider>
                <AuthProvider>
                    <Router history={history}>
                        <Switch>
                            <LoggedInRouteRoute exact path="/news" component={News} />
                            <Route exact path='/' component={Top} />
                            <Route exact path='/chat' component={Chat} />
                            <Route exact path='/video' component={Video} />
                        </Switch>
                    </Router>
                </AuthProvider>
            </NavProvider>
        </>
    )
}

export default App
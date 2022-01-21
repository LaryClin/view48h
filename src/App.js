import React, {Suspense, lazy, useEffect, useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Web3Context } from 'state'
import { eagerConnect } from 'utils/web3'
import { Div } from 'atomize'

import Header from 'components/Header'
import PageLoader from 'components/Loader/PageLoader'
import { NotificationListener } from 'contexts/NotificationsContext'

const Home = lazy(() => import('views/Home'));

//import Home from './views/Home'

const App = () => {
    const { setAccount } = useContext(Web3Context);

    useEffect(() => {
        async function callEagerConnect() {
            const address = await eagerConnect();
            if (address) setAccount(address);
        }

        callEagerConnect();
    }, [setAccount]);

    return (
        <BrowserRouter>
            <Div tag="main" overflow="hidden">
                <Header>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Suspense>
                </Header>
            </Div>

            <NotificationListener />
        </BrowserRouter>
    );
}

export default App;

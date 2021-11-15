import {Navigate, Route, Routes } from "react-router";
import {ErrorBoundary} from "./component/error-boundary";
import {FrontPage} from "./page/front/front-page";
import {BackPage} from "./page/back/back-page";
import {FullPageErrorFallback} from "./component/lib";


export const App = () => {
    return (
        <div className="App">
            <ErrorBoundary fallbackRender={FullPageErrorFallback}>
                <Routes>
                    <Route path="/front/*" element={<FrontPage/>}/>
                    <Route path="/back/*" element={<BackPage/>}/>
                    <Navigate to="/front"/>
                </Routes>
            </ErrorBoundary>
        </div>
    );
}
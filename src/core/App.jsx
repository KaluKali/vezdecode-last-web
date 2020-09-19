import React, {useEffect} from "react";
import {ConfigProvider, Root} from "@vkontakte/vkui";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../state/reducers/vk/actions";

import MainView from "../Views/Root";

import {MAP_VIEW, ROOT_VIEW} from "../constants/ViewConstants";

import {setPreviousPanel} from "../state/reducers/history/actions";

import "../styles/index.scss";
import "@vkontakte/vkui/dist/vkui.css";
import MapView from "../Views/Map";


const App = () => {
    const dispatch = useDispatch();
    const {activeView} = useSelector((state) => state.history);

    useEffect(() => {
        window.addEventListener("popstate", () => dispatch(setPreviousPanel()));
        dispatch(getUser());
    }, []);

    return (
        <ConfigProvider isWebView={true}>
            <Root id="APP" activeView={activeView}>
                <MapView id={MAP_VIEW}/>
                <MainView id={ROOT_VIEW}/>
            </Root>
        </ConfigProvider>
    );
};

export default App;

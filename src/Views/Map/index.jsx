import React from "react";
import {View} from "@vkontakte/vkui";
import {useDispatch, useSelector} from "react-redux";


import {EMOTIONS_MAP_PANEL} from "../../constants/PanelConstants";

import {setPreviousPanel} from "../../state/reducers/history/actions";
import EmotionsMap from "../../Panels/EmotionsMap";


const MapView = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const { activePanel, history } = useSelector((state) => state.history);

    return (
            <View
                id={id}
                history={history}
                activePanel={activePanel}
                onSwipeBack={() => dispatch(setPreviousPanel())}
            >
                <EmotionsMap id={EMOTIONS_MAP_PANEL} />
            </View>
    );
};

export default MapView;

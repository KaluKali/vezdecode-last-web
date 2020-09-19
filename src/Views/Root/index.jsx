import React from "react";
import {Epic, Tabbar, TabbarItem, View} from "@vkontakte/vkui";
import {useDispatch, useSelector} from "react-redux";

import HelloPanel from "../../Panels/HelloWall";


import {CATEGORY_WALL_PANEL, HELLO_PANEL} from "../../constants/PanelConstants";

import {setPreviousPanel} from "../../state/reducers/history/actions";
import Icon28NewsfeedOutline from "@vkontakte/icons/dist/28/newsfeed_outline";
import Icon28ServicesOutline from "@vkontakte/icons/dist/28/services_outline";
import Icon28MessageOutline from "@vkontakte/icons/dist/28/message_outline";
import Icon28ClipOutline from "@vkontakte/icons/dist/28/clip_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/user_circle_outline";
import CategoryWall from "../../Panels/CategoryWall";


const MainView = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const { activePanel, history } = useSelector((state) => state.history);

    return (
        <Epic activeStory={id} tabbar={
            <Tabbar>
                <TabbarItem
                    // selected={activePanel === 'HELLO_PANEL'}
                    data-story="feed"
                    text="Новости"
                ><Icon28NewsfeedOutline /></TabbarItem>
                <TabbarItem
                    // selected={activePanel === 'services'}
                    data-story="services"
                    text="Сервисы"
                ><Icon28ServicesOutline/></TabbarItem>
                <TabbarItem
                    // selected={activePanel === 'messages'}
                    data-story="messages"
                    label="12"
                    text="Сообщения"
                ><Icon28MessageOutline /></TabbarItem>
                <TabbarItem
                    // selected={activePanel === 'clips'}
                    data-story="clips"
                    text="Клипы"
                ><Icon28ClipOutline /></TabbarItem>
                <TabbarItem
                    // selected={activePanel === 'profile'}
                    data-story="profile"
                    text="Профиль"
                ><Icon28UserCircleOutline /></TabbarItem>
            </Tabbar>
        }>
            <View
                id={id}
                history={history}
                activePanel={activePanel}
                onSwipeBack={() => dispatch(setPreviousPanel())}
            >
                <HelloPanel id={HELLO_PANEL} />
                <CategoryWall id={CATEGORY_WALL_PANEL}/>
            </View>
        </Epic>
    );
};

export default MainView;

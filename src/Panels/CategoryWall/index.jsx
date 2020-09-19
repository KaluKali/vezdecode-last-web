import React from "react";
import {Div, FixedLayout, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import {handleToPreviousPanel} from "../../core/HistoryDispatcher";
import {useDispatch, useSelector} from "react-redux";
import Icon28GlobeOutline from "@vkontakte/icons/dist/28/globe_outline";
import {setActiveView} from "../../state/reducers/history/actions";
import {EMOTIONS_MAP_PANEL} from "../../constants/PanelConstants";
import {MAP_VIEW} from "../../constants/ViewConstants";
import FullFeedSnippet from "../InternalComponent/FullFeedSnippet";

const emojiList = {
    '🎨': 'Арт',
    '💻': 'IT',
    '♟': 'Игры',
    '🎧': 'Музыка',
    '📷': 'Фото',
    '🥇': 'Наука',
    '⚽️': 'Спорт',
    '✈️': 'Туризм',
    '🎬': 'Кино',
    '😂': 'Юмор',
    '👔': 'Стиль',
};

const CategoryWall = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const feed = useSelector(state =>state.vk.feed);
    const user = useSelector(state =>state.vk.user);


    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={() => handleToPreviousPanel(dispatch)} />}>{emojiList[user.primaryCategory]}</PanelHeader>
            {(feed.filter(item=>item.theme===user.primaryCategory)).map((item, index)=>(
                <FullFeedSnippet key={index} user={user} image={item.photo} likes={item.likes} comments={'7.2k'} mood={user.mood} />
                ))}
            <FixedLayout vertical="bottom">
                <div
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Div
                        style={{
                            display:'flex', justifyContent:'center', alignItems:'stretch', width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: '#4986CC',
                            boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.08)',
                            margin:'10px'
                        }} onClick={()=>{
                        dispatch(setActiveView({panelId:EMOTIONS_MAP_PANEL,viewId:MAP_VIEW}))
                    }}><Icon28GlobeOutline fill={'#FFFFFF'} style={{alignSelf:'center'}} /></Div>
                </div>
            </FixedLayout>
        </Panel>
    );
};

CategoryWall.propTypes = {
    id: PropTypes.string.isRequired,
};

export default CategoryWall;

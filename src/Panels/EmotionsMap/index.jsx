import React, {useState} from "react";
import {Div, FixedLayout, FormLayout, HorizontalScroll, Panel, Search, Select, Text} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import GoogleMapReact from 'google-map-react';
import {getBoundsPosts, setVkUser} from "../../state/reducers/vk/actions";
import {setActiveView} from "../../state/reducers/history/actions";
import {CATEGORY_WALL_PANEL} from "../../constants/PanelConstants";
import {ROOT_VIEW} from "../../constants/ViewConstants";
// TEMPLATE
const emoji = {
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
const moodList = {
    '😜': 'Активное',
    '😃': 'Позитивное',
    '🙁': 'Негативное',
    '😴': 'Пассивное',
};
const CirclePost = ({ text, withText, style }) => (
    <div
        style={{
            display:'flex', justifyContent:'center', alignItems:'stretch',
            height: '60px',
            width: '60px',
            borderRadius: '50%',
            background: '#fff',
            boxShadow:'0px 0px 2px rgba(0, 0, 0, 0.08), 0px 2px 24px rgba(0, 0, 0, 0.08)',
            ...style
        }}><span role="img" aria-label="sheep" style={{fontSize:20, alignSelf:'center'}}>{text}</span>
        <Text weight="semibold" style={{fontSize:'13px', alignSelf:'center'}}>{withText ? emoji[text] : ''}</Text>
    </div>
);

const EmotionsMap = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const posts = useSelector(state=>state.vk.bounds);
    const [searchField, setSearchText] = useState('');
    const user = useSelector(state=>state.vk.user);

    return (
        <Panel id={id}>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    onBoundsChange={(center,zoom,bounds,boundsMargin)=>dispatch(getBoundsPosts(zoom, user.mood,bounds[3],bounds[2],bounds[1],bounds[0]))}
                    onChildClick={(e)=>{
                        dispatch(setVkUser({primaryCategory: posts[`${e}`].theme}));
                        dispatch(setActiveView({panelId:CATEGORY_WALL_PANEL,viewId:ROOT_VIEW}))
                    }}
                    // onChildMouseEnter={(e)=>console.log(e)}
                    bootstrapURLKeys={{ key: 'AIzaSyBt25U2wgcYNGliFfLd0YEHQG3ZgPqBwfE' }}
                    defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                    }}
                    defaultZoom={11}
                >
                    {posts.map((item,index)=>(
                        <CirclePost
                            key={index}
                            lat={item.location.latitude}
                            lng={item.location.longitude}
                            text={item.theme}
                            withText={true}
                            style={{flexDirection:'column'}}
                        />
                    ))}
                </GoogleMapReact>
                <FixedLayout vertical="top">
                    <Select onChange={e=>{
                        dispatch(setVkUser({mood:e.target.value}))
                    }} defaultValue={'😴'} >
                        {Object.keys(moodList).map((moodkey,index)=>(
                            <option key={index} value={moodkey}>{moodkey} {moodList[moodkey]}</option>
                        ))}
                    </Select>
                </FixedLayout>
                <FixedLayout vertical="bottom">
                    <FormLayout>
                        <Div
                            style={{background:'#fff'}}
                        >
                            <Search after={null} onChange={(e)=>{dispatch(setVkUser({mood:e.target.value}))}}/>
                            <HorizontalScroll>
                                <div style={{display:'flex'}}>
                                    { (posts.filter((postItem) => emoji[postItem.theme].toLowerCase().indexOf(searchField) > -1))
                                        .map((item,index)=>(
                                            <div key={index} style={{
                                                flexShrink: 0,
                                                width: 80,
                                                height: 94,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                fontSize: 12, paddingLeft: 4 }}>
                                                <CirclePost
                                                    text={item.theme}
                                                    style={{alignSelf:'center'}}
                                                /><Text weight="semibold" style={{fontSize:'13px', alignSelf:'center'}}>
                                                {emoji[item.theme]}
                                            </Text>
                                            </div>
                                        ))
                                    }
                                </div>
                            </HorizontalScroll>
                        </Div>
                    </FormLayout>
                </FixedLayout>
            </div>
        </Panel>
    );
};

EmotionsMap.propTypes = {
    id: PropTypes.string.isRequired,
};

export default EmotionsMap;

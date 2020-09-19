import React, {useEffect, useState} from "react";
import {
    Cell,
    Div,
    FixedLayout,
    HorizontalScroll,
    List,
    Panel,
    PanelHeader,
    PanelHeaderButton,
    PanelHeaderContext,
    Tabs,
    TabsItem
} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import Icon16Dropdown from "@vkontakte/icons/dist/16/dropdown";
import Icon28SettingsOutline from "@vkontakte/icons/dist/28/settings_outline";
import Icon28UsersOutline from "@vkontakte/icons/dist/28/users_outline";
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Icon28GlobeOutline from '@vkontakte/icons/dist/28/globe_outline';
import FlowButton from "../InternalComponent/FlowButton";
import {EMOTIONS_MAP_PANEL} from "../../constants/PanelConstants";
import FeedSnippet from "../InternalComponent/FeedSnippet";
import {setActiveView} from "../../state/reducers/history/actions";
import {MAP_VIEW} from "../../constants/ViewConstants";
import {getFeed} from "../../state/reducers/vk/actions";

const Hello = (props) => {
    const { id } = props;
    const dispatch = useDispatch();

    const feed = useSelector(state =>state.vk.feed);
    const user = useSelector(state =>state.vk.user);
    const [opened, setOpened] = useState(false);
    const [activeEl, setActiveEl] = useState('recomendations');

    useEffect(()=>{
        dispatch(getFeed());
    },[]);


    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton><Icon28CameraOutline /></PanelHeaderButton>}
                // right={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton>}
                separator={false}
            >
                <Tabs>
                    <TabsItem
                        onClick={()=>{
                            if (activeEl !== 'news') {
                                setActiveEl('news')
                            } else {
                                setOpened(!opened)
                            }
                        }}
                        selected={activeEl === 'news'}
                        after={<Icon16Dropdown fill="var(--accent)" style={{
                            transform: `rotate(${opened ? '180deg' : '0'})`
                        }}/>}
                    >
                        Новости
                    </TabsItem>
                    <TabsItem
                        onClick={() => setActiveEl('recomendations')}
                        selected={activeEl === 'recomendations'}
                    >
                        Интересное
                    </TabsItem>
                </Tabs>
            </PanelHeader>
            <Tabs>
                <HorizontalScroll>
                    <TabsItem
                        style={{paddingRight:'5px'}}
                    >
                        <FlowButton mode={'active'} content={'Для вас'}/>
                    </TabsItem>
                    <TabsItem
                        style={{paddingRight:'5px', paddingLeft:'5px'}}
                    >
                        <FlowButton mode={'passive'} content={'Наука'}/>
                    </TabsItem>
                    <TabsItem
                        style={{paddingRight:'5px', paddingLeft:'5px'}}
                    >
                        <FlowButton mode={'passive'} content={'Наука'}/>
                    </TabsItem>
                    <TabsItem
                        style={{paddingRight:'5px', paddingLeft:'5px'}}

                    >
                        <FlowButton mode={'passive'} content={'Наука'}/>
                    </TabsItem>
                    <TabsItem
                        style={{paddingRight:'5px', paddingLeft:'5px'}}
                    >
                        <FlowButton mode={'passive'} content={'Наука'}/>
                    </TabsItem>
                </HorizontalScroll>
            </Tabs>
            <PanelHeaderContext opened={opened} onClose={()=>{}}>
                <List>
                    <Cell
                        before={<Icon28UsersOutline />}
                        data-mode="all"
                    >
                        Новости
                    </Cell>
                    <Cell
                        before={<Icon28SettingsOutline />}
                        data-mode="managed"
                    >
                        Друзья
                    </Cell>
                </List>
            </PanelHeaderContext>
            {feed.map((item, index)=>(<FeedSnippet key={index} user={user} image={item.photo} likes={item.likes} />))}
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

Hello.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Hello;

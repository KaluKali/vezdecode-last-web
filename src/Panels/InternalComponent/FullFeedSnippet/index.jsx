import React from "react";
import {Avatar, Div, SimpleCell, Text} from "@vkontakte/vkui";
import Icon20LikeOutline from "@vkontakte/icons/dist/20/like_outline";
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28CommentOutline from '@vkontakte/icons/dist/28/comment_outline';
import Icon28ViewOutline from '@vkontakte/icons/dist/28/view_outline';

const FullFeedSnippet = (props) => {
    const { user, image, likes, comments, mood } = props;

    const moodList = {
        '😜': 'активное',
        '😃': 'позитивное',
        '🙁': 'негативное',
        '😴': 'пассивное',
    };

    return (
        <Div
            style={{
                backgroundColor:'#ECEDF1'
            }}
        >
            <div
                style={{
                    backgroundColor:'#FFFFFF',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
                    borderRadius:'10px'
                }}
            >
                <SimpleCell description={`час назад • ${moodList[mood]} настроение`} before={<Avatar size={28} src={user.photo_100} />}>{user.first_name} {user.last_name}</SimpleCell>
                <div
                    style={{
                        backgroundPosition: 'center center',
                        backgroundSize: '100%, 100%',
                        background:`url(${image})`,
                        height: '140px',
                        borderRadius:'10px',
                        backgroundRepeat: 'no-repeat',
                    }}/>
                <Div><Text weight="medium" style={{ color:'rgba(0, 0, 0, 0.35)' }}>15 комментариев</Text></Div>
                <SimpleCell disabled
                            after={
                                <div
                                    style={{display:'flex',
                                        alignItems:'stretch'
                                    }}
                                >
                                <Icon28ViewOutline fill={'#99A2AD'} style={{alignSelf:'center'}}
                                />
                            <label style={{color:'#818C99', paddingLeft:'6px', paddingRight:'20px', alignSelf:'center' }}>{comments}</label></div>}>
                    <div
                    style={{display:'flex',
                    alignItems:'stretch'
                    }}
                    >
                        <Icon20LikeOutline fill={'#99A2AD'} style={{alignSelf:'center'}} />
                        <label style={{color:'#818C99', paddingLeft:'6px', paddingRight:'20px', alignSelf:'center' }}>{likes}</label>
                        <Icon28ShareOutline style={{paddingLeft:'6px', paddingRight:'20px'}} fill={'#99A2AD'}/>
                        <Icon28CommentOutline style={{alignSelf:'center', paddingLeft:'6px', paddingRight:'20px'}} fill={'#99A2AD'}/>
                    </div>
                </SimpleCell>
            </div>
        </Div>
    );
};

// Example.propTypes = {
//     id: PropTypes.string.isRequired,
// };

export default FullFeedSnippet;

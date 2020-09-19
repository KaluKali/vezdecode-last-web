import React from "react";
import {Avatar, Div, SimpleCell, Text} from "@vkontakte/vkui";
import Icon20LikeOutline from "@vkontakte/icons/dist/20/like_outline";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import Icon20ShareOutline from "@vkontakte/icons/dist/20/share_outline";

const FeedSnippet = (props) => {
    const { user, image, likes } = props;

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
                    borderRadius:'10px',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <SimpleCell before={<Avatar size={28} src={user.photo_100} />}>{user.first_name} {user.last_name}</SimpleCell>
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
                            before={<div style={{display:'flex', alignItems:'stretch'}}>
                                <Icon20LikeOutline fill={'#99A2AD'} style={{alignSelf:'center'}} />
                                <label style={{ color:'#818C99', paddingLeft:'6px', paddingRight:'25px', alignSelf:'center' }}>{likes}</label>
                            </div>}
                            after={<Icon24MoreHorizontal fill={'#99A2AD'}/>}>
                    <Icon20ShareOutline fill={'#99A2AD'}/></SimpleCell>
            </div>
        </Div>
    );
};

// Example.propTypes = {
//     id: PropTypes.string.isRequired,
// };

export default FeedSnippet;

import * as types from './actionTypes';

const initialState = {
  vkpay_id: 0,
  image: '',
  form: { title:'', duration: '', link:{}, name:'', description:'', abnormal: false, exclude:false, trailer:false },
  user: {first_name: 'Матвей', last_name: 'Правосудов',
    photo_100:'https://sun9-23.userapi.com/impg/tRuIFWRNOZfwluZoM56CVieUp67NSiSLzgN45A/hcuD0JX3rx0.jpg?size=50x0&quality=88&crop=146,26,207,207&sign=2909f82e720f75ecf953ba2c6e9f4b06&ava=1',
    mood:'😃',
    primaryCategory:'',
  },
  bounds:[],
  feed:[{
    location: {
      longitude: 60.2,
      latitude: 36.2
    },
    id: 1,
    name: 'string',
    photo: 'https://vk12.itis.team/uploads/de03d310aecba8e9930d788c82d3da9f5.png',
    text: 'string',
    theme: 'string',
    mood: 'string',
    likes: 0,
    createdAt: '2020-09-19T00:42:44.258Z',
    updatedAt: '2020-09-19T00:42:44.258Z'
  }]
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PODCAST_ICON:
      return {
        ...state,
        image: action.payload
      };
    case types.SET_PODCAST_CONTENT:
      return {
        ...state,
        music: action.payload
      };

    case types.SET_PODCAST_FORM:
      return {
        ...state,
        form: {...state.form, ...action.payload}
      };
    case types.SET_VK_USER:
      return {
        ...state,
        user: {...state.user, ...action.payload}
      };
    case types.SET_BOUNDS_POSTS:
      return {
        ...state,
        bounds: action.payload
      };
    case types.SET_CATEGORY_ON_WALL:
      return {
        ...state,
        selectedCategory: action.payload
      };
    case types.SET_VK_FEED:
      return {
        ...state,
        feed: action.payload
      };
    default:
      return state;
  }
};

export default historyReducer;

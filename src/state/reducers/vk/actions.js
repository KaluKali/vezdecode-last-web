import * as types from "./actionTypes";
import bridge from "@vkontakte/vk-bridge";
import axios from 'axios';

export const setPodcastIcon = (image) => ({
  type: types.SET_PODCAST_ICON,
  payload: image,
});

export const setPodcastContent = (music) => ({
  type: types.SET_PODCAST_CONTENT,
  payload: music,
});

export const setPodcastForm = (form) => ({
  type: types.SET_PODCAST_FORM,
  payload: form,
});

export const setVkUser = (user) => ({
  type: types.SET_VK_USER,
  payload: user,
});

export const getUser = () => dispatch => {
  bridge.send('VKWebAppGetUserInfo')
      .then(data =>dispatch(setVkUser(data)));
};

export const setVkFeed = (data) => ({
  type: types.SET_VK_FEED,
  payload: data,
});

export const selectCategory = (data) => ({
  type: types.SET_CATEGORY_ON_WALL,
  payload: data,
});

export const getFeed = () => dispatch => {
  axios.get('https://vk12.itis.team/feed/get')
      .then(data => dispatch(setVkFeed(data.data)))
};

export const setBoundsPosts = (data) => ({
  type: types.SET_BOUNDS_POSTS,
  payload: data,
});

export const getBoundsPosts = (zoom, mood, minLongitude, minLatitude,maxLongitude ,maxLatitude ) => dispatch => {
  axios.get('https://vk12.itis.team/feed/inArea', { params:
        {minLongitude:minLongitude,minLatitude:minLatitude,maxLongitude:maxLongitude,maxLatitude:maxLatitude,
        zoom:zoom,mood:mood
        }})
      .then(data => dispatch(setBoundsPosts(data.data)))
      .catch(e=>console.log(e))
};

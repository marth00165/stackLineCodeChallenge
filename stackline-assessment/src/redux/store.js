import React from "react";
import {createStore} from 'redux';
import ViewGraph from '../components/viewGraph'
import allReducers from './reducers';

const store = createStore(allReducers);

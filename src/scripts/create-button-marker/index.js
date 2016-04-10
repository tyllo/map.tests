import { L } from 'scripts/commons';
import map from 'scripts/map';

import './style.scss';
import template from './template.jade'

// add button for markers
export default ({ onClick }) => L.easyButton(template(), onClick).addTo(map);

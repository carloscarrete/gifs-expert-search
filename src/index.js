import React from 'react';
import GifExpertApp from './GifExpertApp';
import {createRoot} from 'react-dom/client'

import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(<GifExpertApp/>);
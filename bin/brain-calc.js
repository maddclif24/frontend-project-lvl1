#!/usr/bin/env node
import { rules, calcGame } from '../src/calcGame.js';
import game from '../src/engine.js';

game(rules, calcGame);

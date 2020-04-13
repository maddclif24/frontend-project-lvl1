#!/usr/bin/env node
import game from '../src/engine.js';
import { rules, progressionGame } from '../src/progressionGame.js';

game(rules, progressionGame);

#!/usr/bin/env node
import game from '../src/engine.js';
import { rules, gcdGame } from '../src/gcdGame.js';

game(rules, gcdGame);

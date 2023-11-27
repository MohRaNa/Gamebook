import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameScreen } from '../componentes/games/GameScreen';
import { PcScreen } from '../componentes/pc/PcScreen';
import { PsScreen } from '../componentes/ps/PsScreen';
import { SwitchScreen } from '../componentes/switch/SwitchScreen';
import { XboxScreen } from '../componentes/xbox/XboxScreen';
import GameCollectionApp from '../componentes/collection/GameCollectionApp';

const GamesRouter = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/ps" element={<PsScreen />} />
          <Route path="/xbox" element={<XboxScreen />} />
          <Route path="/switch" element={<SwitchScreen />} />
          <Route path="/pc" element={<PcScreen />} />
          <Route path="/game/:gameId" element={<GameScreen />} />
          <Route path="/collection" element={<GameCollectionApp />} />
          <Route path="*" element={<Navigate to="/ps" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default GamesRouter;

import { Middleware } from '@reduxjs/toolkit';
import { OrderbookSocket } from '../OrderbookSocket';
import { SocketAction } from '../types';
import {
  connectToSocket,
  disconnectFromSocket,
  subscribeToMarket,
  unsubscribeFromMarket,
} from './socket-slice';

const socketMiddleware: Middleware = (store) => {
  let orderbookSocket: OrderbookSocket | null;

  return (next) => (action: SocketAction) => {
    if (connectToSocket.match(action)) {
      if (!orderbookSocket) {
        orderbookSocket = new OrderbookSocket(store.dispatch);
      }
    } else if (disconnectFromSocket.match(action)) {
      orderbookSocket?.closeSocket();
      orderbookSocket = null;
    } else if (subscribeToMarket.match(action)) {
      orderbookSocket?.subscribeToMarket(action.payload);
    } else if (unsubscribeFromMarket.match(action)) {
      orderbookSocket?.unsuscribeFromMarket(action.payload);
    }

    next(action);
  };
};

export default socketMiddleware;
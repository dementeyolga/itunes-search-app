declare global {
  declare type RootState = import('@shared/store/store').RootState;
  declare type AppDispatch = import('@shared/store/store').AppDispatch;
  declare type AppStore = import('@shared/store/store').AppDispatch;
}
export {};

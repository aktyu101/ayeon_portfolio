import { create } from "zustand";
//zustand : 전역 상태 관리
const useThemeStore = create((set) => ({
  theme: "light", //기본 상태값 getter
  updateThemeDark: () => set(() => ({ theme: "dark" })), //setter
  updateThemeLight: () => set(() => ({ theme: "light" })),
  //store state
}));

export default useThemeStore;

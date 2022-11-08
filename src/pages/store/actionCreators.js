// 存放不同的 action
export const type = {
  SWITCH_MENU : 'SWITCH_MENU'
};

export function switchMenu(menuName) {
  return {
    type: type.SWITCH_MENU,
    menuName
  }
}
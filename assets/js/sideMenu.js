window.addEventListener('load', () => {
  initMenu();
});

// accordionSideMenu 切換監聽
function initMenu() {
  for (let n = 0; n <= 7; n++) {
    const tab = document.querySelector(`button[data-bs-target="#accordion_0${n}"]`);

    // 監聽連結
    if (tab) {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
      
        // 表單初始化
        clearAccordionAction();
        // 樣式切換
        tab.classList.remove('collapsed');
    });
    }
  };
};

function clearAccordionAction() {
  for (let n = 0; n <= 7; n++) {
    const tabItem = document.querySelector(`#heading_0${n} button`);
    const tabContent = document.querySelector(`#accordion_0${n}`);
    if (tabItem) {
      const hasCollapsed = tabItem.classList.contains('collapsed');
      if (!hasCollapsed) {
        tabItem.classList.add('collapsed');
      }
      tabContent.classList.remove('show');
    }
  }
};

// 監聽側邊選單連結
const menuList = document.querySelectorAll('.list-group-item');
menuList.forEach(menuItem => {
  //const menuItem = document.querySelector(`#${menu}`);
  
  // 監聽連結
  if (menuItem) {
    menuItem.addEventListener('click', (event) => {
      event.preventDefault();
    
       // 樣式切換
       clearAction();
       event.target.classList.add('active');  
     });
   }
 });

// 清除選單全部 [.active] 樣式
function clearAction() {
  menuList.forEach(menu => {
    menu.classList.remove('active');
  });
};

// 載入對應的頁面
function loadPage(menu, subMenu) {  
  document.querySelector('#main-content').src = `./pages/${menu}/${subMenu}.html`;
};
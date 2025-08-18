window.addEventListener('load', () => {
  initMenu();
});

const accordionList = ['Amend','App','Review','Query','Prompt','Customer','Member'];
// accordionSideMenu 切換監聽
function initMenu() {
  accordionList.forEach(accordion => {
    const tab = document.querySelector(`button[data-bs-target="#${accordion}"]`);

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
  });
};

function clearAccordionAction() {
  accordionList.forEach(accordion => {
    const tabItem = document.querySelector(`button[data-bs-target="#${accordion}"]`);
    const tabContent = document.querySelector(`#${accordion}`);
    if (tabItem) {
      const hasCollapsed = tabItem.classList.contains('collapsed');
      if (!hasCollapsed) {
        tabItem.classList.add('collapsed');
      }
      tabContent.classList.remove('show');
    }
  });
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
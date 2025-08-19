// 檢查 auth BH: 經辦，BS:主管，SM:系統管理員，MB:總行，BM:分行管理員
let authType = null; // 預設經辦
function getAuth() {
  const urlSearchParams = new URLSearchParams(parent.location.search);
  authType = urlSearchParams.get('auth');  
}
getAuth();


function backHomeHandler() {
  // 初始化 Accordion
  window.parent.clearAccordionAction();
  // 初始化選項 active，再指定項目
  window.parent.clearAction();
  location.href="../../pages/Home.html";
};
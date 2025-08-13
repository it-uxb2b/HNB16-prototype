// 檢查 auth H:經辦，S:主管
let authType = null; // 預設經辦
function getAuth() {
  const urlSearchParams = new URLSearchParams(parent.location.search);
  authType = urlSearchParams.get('auth');  
}
getAuth();



// 選單 ID 
// const menuList = ['todoList', 'info', 'lcList', 'negotiationList', 'acceptNegotiation', 'checkNegotiation', 'setGroup', 'setBeneficiary', 'setLcTable', 'accountManager', 'roleManager', 'branchManager', 'track', 'send'];

// const homePage = document.querySelector('#homePage');
// homePage.addEventListener('click', (e) => {
//   e.preventDefault();
//   const lcListTab = window.parent.document.querySelector('#lcList');
//   clearAction();
//   lcListTab.classList.add('active');
//   window.parent.document.querySelector('#main-content').src = `./pages/lcList.html`;
// });

// // 清除選單全部 [.active] 樣式
// function clearAction() {
//   menuList.forEach(menu => {
//     this[`${menu}tab`] = window.parent.document.querySelector(`#${menu}`);
//     this[`${menu}tab`].classList.remove('active');
//   });
// };

// // 代辦事項 - 押匯申請待受理
// function draftHandler() {
//   const negotiation = window.parent.document.querySelector('#negotiation');
//   const acceptNegotiation = window.parent.document.querySelector('#acceptNegotiation');
//   clearAction();
//   negotiation.classList.add('show');
//   acceptNegotiation.classList.add('active');
//   window.parent.document.querySelector('#main-content').src = `./pages/acceptNegotiationList.html`;
// };

// // 代辦事項 - 系統待重送
// function resendHandler() {
//   const record = window.parent.document.querySelector('#record');
//   const send = window.parent.document.querySelector('#send');
//   clearAction();
//   record.classList.add('show');
//   send.classList.add('active');
//   window.parent.document.querySelector('#main-content').src = `./pages/send.html`;
// };
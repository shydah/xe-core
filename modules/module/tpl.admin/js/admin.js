/**
 * @file   : modules/module/js/admin.js
 * @author : zero <zero@nzeo.com>
 * @desc   : module 모듈의 관리자용 javascript
 **/

/* 카테고리 관련 작업들 */
function doUpdateCategory(module_category_srl, mode, message) {
  if(typeof(message)!='undefined'&&!confirm(message)) return;

  var fo_obj = xGetElementById('fo_category_info');
  fo_obj.module_category_srl.value = module_category_srl;
  fo_obj.mode.value = mode;

  procFilter(fo_obj, update_category);
}

/* 카테고리 정보 수정 후 */
function completeUpdateCategory(ret_obj) {
  var error = ret_obj['error'];
  var message = ret_obj['message'];
  alert(message);

  var url = "./?module=admin&mo=module&act=dispCategory";
  location.href = url;
}

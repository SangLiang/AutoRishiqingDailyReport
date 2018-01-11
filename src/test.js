const puppeteer = require('puppeteer');

puppeteer.launch({executablePath:"C:/Users/sangliang/Desktop/chrome-win32/chrome-win32/chrome.exe","headless":false}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101219872&redirect_uri=https://www.rishiqing.com/task/qqOauth/afterLogin&response_type=code&state=empty_empty_empty_empty_empty_empty&scope=get_user_info,add_topic,add_one_blog,add_album,upload_pic,list_album,add_share,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idollist,add_idol,del_ido,get_tenpay_addr');
//   dumpFrameTree(page.mainFrame(), '');

  console.dir(page.mainFrame());
//   await browser.close();

//   function dumpFrameTree(frame, indent) {
//     for (let child of frame.childFrames()){
//       dumpFrameTree(child, indent + '  ');
//       console.log(child);    
//     }
     
//   }
});
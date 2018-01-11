var puppeteer = require("puppeteer");
var {timeout} = require('./tool.js');
var loginData = require('./config');

(async () => {
    const browser = await puppeteer.launch({executablePath:"C:/Users/sangliang/Desktop/chrome-win32/chrome-win32/chrome.exe","headless":false});

    const page = await browser.newPage();
    const LOGIN_URL = "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101219872&redirect_uri=https://www.rishiqing.com/task/qqOauth/afterLogin&response_type=code&state=empty_empty_empty_empty_empty_empty&scope=get_user_info,add_topic,add_one_blog,add_album,upload_pic,list_album,add_share,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idollist,add_idol,del_ido,get_tenpay_addr";

    const INDEX_URL = "https://www.rishiqing.com/i?port=2";

    await page.setViewport({
        width: 1600,    
        height: 800
      });

    await page.goto(INDEX_URL);
    var res = await page.waitForNavigation({ waitUntil: "networkidle"});

    await timeout(1500);
    var title  = await page.title();
    console.log("进入页面: "+title+" URL: "+INDEX_URL);

    let account = await page.$('[placeholder=输入您的邮箱或手机号]');
    await account.click();
    await account.type(loginData.loginName, {delay: 20})
    
    var password = await page.$('[placeholder=输入密码]')
    await password.click()
    await password.type(loginData.password, {delay: 20})
    
    
    var loginBtn = await page.$('div.mainContainer div#loginView.container.showing div.btn');
    await loginBtn.click();

    console.log("登录...");

    await page.goto("https://www.rishiqing.com/app/doc/846502");
    var response = await page.waitForNavigation({ waitUntil: "networkidle"});

    var addBtn = await page.$(".new-doc-item");
    
    await addBtn.click();
    
    var dailyText = "今日完成：打酱油";
    await page.type('.editArea',dailyText,{delay:80});
    console.log("开始写日志："+dailyText);

    var addBtn = await page.$(".collect-name");
    await addBtn.click();
    console.log("任务结束");
    await timeout(2000);
    
    await browser.close();

})().then(res=>{
}).catch(err=>{
    console.error(err);
});
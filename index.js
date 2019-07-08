$('#myJD').addDropdown({
    href: '#',
    title: "我的京东",
    dropDownWidth: 280,
    colWidth:126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('#procurement').addDropdown({
    title: '企业采购',
    colWidth: 56,
    dropDownWidth:140,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});


$('#service').addDropdown({
    title: '客户服务',
    colWidth: 70,
    dropDownWidth:170,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    title: '网站导航',
    direction: 'x',
    dropDownWidth:1188,
    menuList: [{
        title: '特色主题',
        // itemWidth代表每一块的宽度
        itemWidth: 340,
        colWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        itemWidth: 270,
        colWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }]
    }]
});

$('#swiper').swiper({
    imgList: ['https://img1.360buyimg.com/pop/jfs/t1/34441/17/1285/197831/5cb463ebEe81f91c3/4600bf8a8baf704c.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/37133/26/2273/30169/5cb594f2E3b91bb43/822488aa1d7b031e.jpg', 'https://img1.360buyimg.com/da/jfs/t1/37440/29/1488/102221/5cb52c56E454e4f66/383fac3e1d70d495.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/32341/26/11683/46759/5cb58102E544717ff/5d06d34c2c7b1c34.jpg'],
    isAuto: true,
    animateType: 'fade',
    showPointBtn : true,
    changeBtn : true,
});
$('#swiper1').swiper({
    imgList: ['https://img1.360buyimg.com/pop/jfs/t1/34441/17/1285/197831/5cb463ebEe81f91c3/4600bf8a8baf704c.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/37133/26/2273/30169/5cb594f2E3b91bb43/822488aa1d7b031e.jpg', 'https://img1.360buyimg.com/da/jfs/t1/37440/29/1488/102221/5cb52c56E454e4f66/383fac3e1d70d495.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/32341/26/11683/46759/5cb58102E544717ff/5d06d34c2c7b1c34.jpg'],
    // isAuto: true,
    animateType: 'animate',
    showPointBtn : true,
    imgWidth:200,
    showImgWidth:800,
    changeBtn : true,
});
$('#swiper2').swiper({
    imgList: ['https://img1.360buyimg.com/pop/jfs/t1/34441/17/1285/197831/5cb463ebEe81f91c3/4600bf8a8baf704c.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/37133/26/2273/30169/5cb594f2E3b91bb43/822488aa1d7b031e.jpg', 'https://img1.360buyimg.com/da/jfs/t1/37440/29/1488/102221/5cb52c56E454e4f66/383fac3e1d70d495.jpg',
        'https://m.360buyimg.com/babel/jfs/t1/32341/26/11683/46759/5cb58102E544717ff/5d06d34c2c7b1c34.jpg'],
    isAuto: true,
    animateType: 'animate',
    showPointBtn : true,
    
    changeBtn : true,
});

var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];

//左侧导航条功能
function renderLeftMenuList(){
    menuList.forEach(function(menu){
        var oLi = $('<li></li>');
        menu.title.forEach(function(title,index){
            $('<a href="#">'+title+'</a>').appendTo(oLi);
            if(index != menu.title.length-1){
                $('<span>/</span>').appendTo(oLi);
            }
        });
        $('#menu-list').append(oLi);
    })
}

var hideTimer = null;
function leftMenuEvent(){
    $('#menu-list').on('mouseenter','li',function(){
        var index = $(this).index();
        clearTimeout(hideTimer);
        renderLeftMenuContent(menuList[index].content);
        $('#menu-content').show();
    }).on('mouseleave','li',function(){
        hideTimer = setTimeout(function(){
            $('#menu-content').hide();
        },500);
    });
    $('#menu-content').on('mouseenter',function(){
        clearTimeout(hideTimer);
    }).on('mouseleave',function(){
        hideTimer = setTimeout(function(){
            $('#menu-content').hide();
        },500);
    });
}
function renderLeftMenuContent(data){
    // console.log(data);
    $('#menu-content').empty();
    var oUl = $('<ul class="tabs"></ul>');
    data.tabs.forEach(function(tab){
        $('<li></li>').text(tab).appendTo(oUl);
    });
    var oDiv = $('<div class="item-content"></div>');
    data.subs.forEach(function(sub){
        var oDl = $('<dl></dl>');
        $('<dt></dt>').text(sub.title).appendTo(oDl);
        var oDd = $('<dd></dd>');
        sub.items.forEach(function(item){
            $('<a href="#">'+item+'</a>').appendTo(oDd);
        });
        oDl.append(oDd).appendTo(oDiv);
    });
    $('#menu-content').append(oUl).append(oDiv);
}
leftMenuEvent();
renderLeftMenuList();


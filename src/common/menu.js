export const menuData = [
  {
    name: '会员管理',
    icon: 'book',
    path: 'member',
    children: [{
      name: '标签设置',
      path: 'membertags',
      menutype:2
    },{
      name: '会员管理',
      path: 'membermanage',
      menutype:2
    }]
  },
  {
    name: '商城管理',
    icon: 'dashboard',
    path: 'mall',
    menutype: 1,
    children: [{
      name: '商品',
      icon: 'shop',
      path: 'shop',
      menutype: 1,
      children:[
        {
          name: '分组设置',
          path: 'category',
          menutype: 2,
        },{
          name: '商品管理',
          path: 'shopmanage',
          menutype: 2,
        }
      ]
    }],
  },
  {
    name: '表单类型',
    icon: 'book',
    path: 'formItemType/formItemTypePage',
    children: [],
    menutype: 2,
  },
  {
    name: '权限管理',
    icon: 'setting',
    path: 'permission',
    menutype: 1,
    children: [
      {
        name: '部门管理',
        path: 'department',
        menutype: 2,
      },
      {
        name: '菜单管理',
        path: 'menumanage',
        menutype: 2,
      },
      {
        name: '角色管理',
        path: 'rolemanage',
        menutype: 2,
      },
      {
        name: '用户管理',
        path: 'usermanage',
        menutype: 2,
      },
      {
        name: '系统日志',
        path: 'systemlog',
        menutype: 2,
      },
    ],
  },
  {
    name: '通用查询页',
    icon: 'search',
    path: 'TableList',
    menutype: 1,
    children: [
      {
        name: '标准列表页',
        path: 'TableList',
        menutype: 2,
      },
    ],
  },
];

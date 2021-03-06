import { routerRedux } from 'dva/router';
import { accountLogin, accountLoginOut } from '../services/api';

export default {
  namespace: 'login',
  state: {
    type: 'account',
    status: undefined,
    errorMessage: '',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(accountLogin, payload, '/sys/doLogin');
      if (response) {
        const { code } = response;
        const errorMessage = {
          200: '登录成功',
          100: '验证码错误',
          101: '用户名或密码错误',
        };
        yield put({
          type: 'changeLoginStatus',
          payload: {
            type: payload.type,
            status: code !== 200 ? 'error' : 'ok',
            errorMessage: errorMessage[code],
          },
        });
        if (code === 200) {
          yield put(routerRedux.push('/'));
        }
      }
    },
    *logout(_, { call, put, select }) {
      yield call(accountLoginOut, '/sys/logout');
      try {
        // get location pathname
        const urlParams = new URL(window.location.href); // eslint-disable-line
        const pathname = yield select(state => state.routing.location.pathname);
        // add the parameters in the url
        urlParams.searchParams.set('redirect', pathname);
        window.history.replaceState(null, 'login', urlParams.href);
      } finally {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: false,
            currentAuthority: 'guest',
          },
        });
        yield put(routerRedux.push('/user/login'));
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    // changeLoginStatus(state, { payload }) {
    //   setAuthority(payload.currentAuthority);
    //   return {
    //     ...state,
    //     status: payload.status,
    //     type: payload.type,
    //   };
    // },
  },
};

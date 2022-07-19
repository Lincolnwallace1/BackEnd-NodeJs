interface ISecurityConfig {
  adminToken: string;
  jwt: {
    key: string;
    exp: string;
    keyRefresh: string;
    refreshExp: string;
  };
}

const SecurityConfig: ISecurityConfig = {
  adminToken: 'TOKEN',
  jwt: {
    key: 'jwtkey',
    exp: '2h',
    keyRefresh: 'jwtkeyrefresh',
    refreshExp: '2h',
  },
};

export default SecurityConfig;

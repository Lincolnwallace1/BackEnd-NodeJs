interface IAPIConfig {
  swagger: {
    enabled: true;
    url: string;
  };
  url: string;
  paginationOptions: {
    defaultPageSize: number
  }
}

const APIConfig: IAPIConfig = {
  swagger: {
    enabled: true,
    url: 'http://localhost:3333',
  },
  url: 'http://localhost:3333',
  paginationOptions: {
    defaultPageSize: 12,
  },
};

export default APIConfig;

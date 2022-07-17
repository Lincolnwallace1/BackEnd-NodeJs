interface IStorageConfig {
  local: {
    tempFolder: string,
    uploadFolder: string,
  },
}

const storageConfig: IStorageConfig = {
  local: {
    tempFolder: 'temp',
    uploadFolder: 'data',
  },
};

export default storageConfig;

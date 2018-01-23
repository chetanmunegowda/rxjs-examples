export interface FileUpload {
  file: any;
  xhrObject: any;
  progress: {
    loaded: number,
    total: number,
    percent: number
  };
}
